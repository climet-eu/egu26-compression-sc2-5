const fs = require("fs");
const path = require("path");

const lab = {
  version: "main",
};

const repo = {
  user: "climet-eu",
  name: "egu26-compression-sc2-5",
  branch: "main",
};

const all_data_paths = fs
  .readdirSync("data")
  .toSorted()
  .reduce(
    (prev, folder) => ({
      ...prev,
      [folder]: fs
        .readdirSync(path.join("data", folder))
        .toSorted()
        .filter((name) => path.extname(name) !== ".txt"),
    }),
    {},
  );

const all_files = [
  "quickplot.py",
  "01-compression.ipynb",
  "02-datasets.ipynb",
  "03a-bit-round.ipynb",
  "03b-zfp.ipynb",
  "03c-sperr.ipynb",
  "03d-ebcc.ipynb",
  "03e-lc.ipynb",
  "03f-sz3.ipynb",
  "03g-pressio.ipynb",
  "03h-safeguards.ipynb",
];

console.log(
  `https://lab.climet.eu/${lab.version}/lab/index.html?` +
    all_files
      .map(
        (name) =>
          `fromURL=https://raw.githubusercontent.com/${repo.user}/${repo.name}/refs/heads/${repo.branch}/${name}`,
      )
      .join("&") +
    "&pyodideKernelEnv=" +
    encodeURIComponent(
      JSON.stringify({
        EARTHKIT_DATA_CACHE_POLICY: "off",
        EARTHKIT_REGRID_CACHE_POLICY: "off",
        CLIMET_LAB_BOOTSTRAP_CODE: `\
import pyodide_fs_mount_http

def mount_data_files(*args, is_mounted=[False], **kwargs):
    if is_mounted[0]:
        return
    is_mounted[0] = True

    import warnings
    from pathlib import Path

    import pyodide_fs_mount_http

    data = Path("data")

    for folder, files in ${JSON.stringify(all_data_paths)}.items():
        try:
            pyodide_fs_mount_http.mount_http_files(data / folder, {
                name: f"https://media.githubusercontent.com/media/${repo.user}/${repo.name}/refs/heads/${repo.branch}/data/{folder}/{name}"
                for name in files
            })
        except Exception as err:
            warnings.warn(f"Failed to mount data files in {data / folder}: {err}")

ip.events.register("pre_execute", mount_data_files)
`,
      }),
    ),
);
