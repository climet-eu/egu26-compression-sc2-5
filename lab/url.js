console.log(
  "https://lab.climet.eu/main/github/climet-eu/egu26-compression-sc2.5?pyodideKernelEnv=" +
    encodeURIComponent(
      JSON.stringify({
        EARTHKIT_DATA_CACHE_POLICY: "off",
        EARTHKIT_REGRID_CACHE_POLICY: "off",
        CLIMET_LAB_BOOTSTRAP_CODE: `\
import shutil
from pathlib import Path

import pyodide_fs_mount_http

data = Path("data")
all_data_names = [p.name for p in data.iterdir()]
shutil.rmtree(data)

pyodide_fs_mount_http.mount_http_files(data, {
    name: f"https://media.githubusercontent.com/media/climet-eu/egu26-compression-sc2.5/refs/heads/main/data/{name}"
    for name in all_data_names
})
`,
      }),
    ),
);
