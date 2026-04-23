# EGU26 SC2.5: Data compression and reduction for Earth System Sciences datasets in practice


## Getting Started

### (a) Local installation

First, clone the this repository using git:

```shell
git clone https://github.com/climet-eu/egu26-compression-sc2-5.git
cd egu26-compression-sc2-5
```

We provide several example datasets, which are stored in Git Large File Storage. If you have not yet installed `git lfs` on your system, you can find instructions here: <https://git-lfs.com>.
Afterwards, you can download the datasets with:

```shell
git lfs install
git lfs fetch --all
```

We use the `uv` Python package manager. If you have not yet installed `uv` on your system, you can find instructions here: <https://docs.astral.sh/uv/getting-started/installation/>.
Afterwards, you can create a fresh virtual environment and install all dependencies using:

```shell
uv sync
```

Finally, you can run Jupyter Lab using:

```shell
uv run jupyter lab
```

### (b) Setup-free Online Laboratory

Alternatively, you can open the notebooks in the [Online Laboratory] for Climate Science and Meteorology and get started right away.
Please note that compression in the Online Laboratory currently only works in recent Firefox and Chrome browsers.

[Online Laboratory]: https://lab.climet.eu/main/lab/index.html?fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/heads/main/compression.ipynb?pyodideKernelEnv=%7B%22EARTHKIT_DATA_CACHE_POLICY%22%3A%22off%22%2C%22EARTHKIT_REGRID_CACHE_POLICY%22%3A%22off%22%2C%22CLIMET_LAB_BOOTSTRAP_CODE%22%3A%22from%20pathlib%20import%20Path%5Cn%5Cnimport%20pyodide_fs_mount_http%5Cn%5Cndata%20%3D%20Path(%5C%22data%5C%22)%5Cn%5Cnpyodide_fs_mount_http.mount_http_files(data%2C%20%7B%5Cn%20%20%20%20name%3A%20f%5C%22https%3A%2F%2Fmedia.githubusercontent.com%2Fmedia%2Fclimet-eu%2Fegu26-compression-sc2-5%2Frefs%2Fheads%2Fmain%2Fdata%2F%7Bname%7D%5C%22%5Cn%20%20%20%20for%20name%20in%20%5B%5C%22HOAPS_2020-08_6-hourly.nc%5C%22%2C%5C%22ICONXPP_regridded_t_025deg_steps_2026-05_06.nc%5C%22%2C%5C%22ICONXPP_regridded_tp_025deg_steps_2026-05_06.nc%5C%22%2C%5C%22NextGEMS_regridded_hus_025deg_steps_44_45.nc%5C%22%2C%5C%22NextGEMS_regridded_pr_025deg_steps_44_45.nc%5C%22%2C%5C%22OpenIFS_pl_regridded_q_025deg_steps_114_120_levels_100_1000.nc%5C%22%2C%5C%22OpenIFS_sfc_regridded_t_025deg_steps_114_120.nc%5C%22%2C%5C%22OpenIFS_sfc_regridded_tp_025deg_steps_114_120.nc%5C%22%2C%5C%22hplp_ml_regridded_q_025deg_levels_10_137_steps_228_240.nc%5C%22%2C%5C%22hplp_sfc_regridded_t_025deg_steps_228_240.nc%5C%22%2C%5C%22hplp_sfc_regridded_tp_025deg_steps_228_240.nc%5C%22%5D%5Cn%7D)%5Cn%22%7D


## License

Licensed under the CC BY 4.0 license ([LICENSE](LICENSE.txt) or <https://creativecommons.org/licenses/by/4.0/>).

The example datasets in the `data/` folder are licensed separately.


## Funding

The materials for the EGU26 SC2.5 course have been developed as part of [ESiWACE3](https://www.esiwace.eu), the third phase of the Centre of Excellence in Simulation of Weather and Climate in Europe.

Funded by the European Union. This work has received funding from the European High Performance Computing Joint Undertaking (JU) under grant agreement No 101093054.
