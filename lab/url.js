const fs = require("fs");

const lab = {
  version: "main",
};

const repo = {
  user: "climet-eu",
  name: "egu26-compression-sc2-5",
  branch: "main",
};

const all_data_names = fs.readdirSync("data");

console.log(
  `https://lab.climet.eu/${lab.version}/lab/index.html?fromURL=` +
    `https://raw.githubusercontent.com/${repo.user}/${repo.name}/refs/heads/${repo.branch}/compression.ipynb` +
    "&pyodideKernelEnv=" +
    encodeURIComponent(
      JSON.stringify({
        EARTHKIT_DATA_CACHE_POLICY: "off",
        EARTHKIT_REGRID_CACHE_POLICY: "off",
        CLIMET_LAB_BOOTSTRAP_CODE: `\
from pathlib import Path

import pyodide_fs_mount_http

data = Path("data")

pyodide_fs_mount_http.mount_http_files(data, {
    name: f"https://media.githubusercontent.com/media/${repo.user}/${repo.name}/refs/heads/${repo.branch}/data/{name}"
    for name in ${JSON.stringify(all_data_names)}
})
`,
      }),
    ),
);
