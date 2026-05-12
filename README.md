# EGU26 SC2.5: Data compression and reduction for Earth System Sciences datasets in practice

See you at the [EGU26 Short Course SC2.5][egu26-sc25] on Friday, 08 May, 14:00–15:45 (CEST) in Room -2.82 or [remotely][egu26-sc25].

[egu26-sc25]: https://meetingorganizer.copernicus.org/EGU26/session/57884


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

[Online Laboratory]: https://lab.climet.eu/v0.4.0/lab/index.html?fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/01-compression.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/02-datasets.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03a-bit-round.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03b-zfp.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03c-sperr.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03d-ebcc.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03e-lc.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03f-sz3.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03g-pressio.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/03h-safeguards.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/04a-nan-challenge.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/04b-eb-rel-challenge.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/04c-gradient-challenge.ipynb&fromURL=https://raw.githubusercontent.com/climet-eu/egu26-compression-sc2-5/refs/tags/1.0.0/quickplot.py&pyodideKernelEnv=%7B%22%24override%22%3A%7B%22CLIMET_LAB_BOOTSTRAP_CODE%22%3A%22import%20pyodide_fs_mount_http%5Cn%5Cndef%20mount_data_files(*args%2C%20is_mounted%3D%5BFalse%5D%2C%20**kwargs)%3A%5Cn%20%20%20%20if%20is_mounted%5B0%5D%3A%5Cn%20%20%20%20%20%20%20%20return%5Cn%20%20%20%20is_mounted%5B0%5D%20%3D%20True%5Cn%5Cn%20%20%20%20import%20warnings%5Cn%20%20%20%20from%20pathlib%20import%20Path%5Cn%5Cn%20%20%20%20import%20pyodide_fs_mount_http%5Cn%5Cn%20%20%20%20data%20%3D%20Path(%5C%22data%5C%22)%5Cn%5Cn%20%20%20%20for%20folder%2C%20files%20in%20%7B%5C%22HOAPS%5C%22%3A%5B%5C%22HOAPS_2020-08_6-hourly.nc%5C%22%5D%2C%5C%22ICON-XPP%5C%22%3A%5B%5C%22ICONXPP_regridded_t_025deg_steps_2026-05_06.nc%5C%22%2C%5C%22ICONXPP_regridded_tp_025deg_steps_2026-05_06.nc%5C%22%5D%2C%5C%22NextGEMS_EW3_ICON_ngc4008%5C%22%3A%5B%5C%22NextGEMS_regridded_hus_025deg_steps_44_45.nc%5C%22%2C%5C%22NextGEMS_regridded_pr_025deg_steps_44_45.nc%5C%22%5D%2C%5C%22OpenIFS%5C%22%3A%5B%5C%22OpenIFS_pl_regridded_q_025deg_steps_114_120_levels_100_1000.nc%5C%22%2C%5C%22OpenIFS_sfc_regridded_t_025deg_steps_114_120.nc%5C%22%2C%5C%22OpenIFS_sfc_regridded_tp_025deg_steps_114_120.nc%5C%22%5D%2C%5C%22hplp%5C%22%3A%5B%5C%22hplp_ml_regridded_q_025deg_levels_10_137_steps_228_240.nc%5C%22%2C%5C%22hplp_sfc_regridded_t_025deg_levels_steps_204_216_228_240.nc%5C%22%2C%5C%22hplp_sfc_regridded_t_025deg_steps_228_240.nc%5C%22%2C%5C%22hplp_sfc_regridded_tp_025deg_steps_228_240.nc%5C%22%5D%7D.items()%3A%5Cn%20%20%20%20%20%20%20%20try%3A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20pyodide_fs_mount_http.mount_http_files(data%20%2F%20folder%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20f%5C%22https%3A%2F%2Fmedia.githubusercontent.com%2Fmedia%2Fclimet-eu%2Fegu26-compression-sc2-5%2Frefs%2Ftags%2F1.0.0%2Fdata%2F%7Bfolder%7D%2F%7Bname%7D%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20name%20in%20files%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20except%20Exception%20as%20err%3A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20warnings.warn(f%5C%22Failed%20to%20mount%20data%20files%20in%20%7Bdata%20%2F%20folder%7D%3A%20%7Berr%7D%5C%22)%5Cn%5Cnip.events.register(%5C%22pre_execute%5C%22%2C%20mount_data_files)%5Cn%22%7D%7D


## Glossary

- Bit Pattern: The bits that make up a number, e.g. the 32 bits for a single-precision floating-point number.
- Codec: An algorithm that transforms the data from one representation to another (encoding) and back (decoding).
- Compression: Reducing the number of bits needed to store some data.
- Compressor: A codec that implements compression and decompression.
- Filter: A codec that transforms the data to make it more easily compressible without necessarily reducing its byte size directly itself.
- IEEE 754 Floating Point Number: A number with dynamic precision $(-1)^{s} \cdot 2^{e-b} \cdot 1.m\ldots$ that is represented by its sign $s$, its binary exponent $e$ with bias $b$, and a mantissa $m\ldots$ that encodes the binary fractional multiplier.
- Lossless Compression: Compression that reproduces the original bits exactly during decompression.
- Lossy Compression: Compression that may only produce an approximation of the original data during decompression.
- Meta-Compressor: A compressor that wraps one or more other compressors and transforms the data they work with. Meta-compressors can be used to combine multiple compressors or to provide extra functionality on top of existing compressors.
- Pointwise Absolute Error Bound: $|\hat{x} - x| <= \epsilon_{abs}$ for the original data $x$ and decompressed data $\hat{x}$
- Pointwise Relative Error Bound: $|\hat{x} - x| <= (|x| \cdot \epsilon_{rel})$ for the original data $x$ and decompressed data $\hat{x}$
- Range-Relative Error Bound: $|\hat{x} - x| <= ((\max{(X)} - \min{(X)}) \cdot \epsilon_{range\_rel})$ for the original data $x$ and decompressed data $\hat{x}$
- Quantity of Interest: Function $f(x)$ that is computed over the data $x$


## Compression Challenges

The notebooks also include some compression challenges, in which you are challenged to find the best-performing compressor for a specific task. There is also a [leaderboard](https://github.com/climet-eu/egu26-compression-sc2-5/issues/3) of all submitted entries.


## License

Licensed under the CC BY 4.0 license ([LICENSE](LICENSE.txt) or <https://creativecommons.org/licenses/by/4.0/>).

This product includes software produced by UChicago Argonne, LLC under Contract No. DE-AC02-06CH11357 with the Department of Energy.

The example datasets in the `data/` folder are licensed separately, please see the `LICENSE.txt` files in the respective subfolders.

The compressor pitch presentation slides in the `pitches/` folder are licensed under the CC BY 4.0 license ([LICENSE](LICENSE.txt) or <https://creativecommons.org/licenses/by/4.0/>), with the following exceptions:

- `pitches/f-sz.pdf` is licensed under the CC BY 4.0 license ([LICENSE](LICENSE.txt) or <https://creativecommons.org/licenses/by/4.0/>). (c) Argonne National Laboratory 08.05.2026.
- `pitches/g-pressio.pdf` is licensed under the CC BY 4.0 license ([LICENSE](LICENSE.txt) or <https://creativecommons.org/licenses/by/4.0/>). (c) Argonne National Laboratory 08.05.2026.


## Funding

The materials for the EGU26 SC2.5 course have been developed as part of [ESiWACE3](https://www.esiwace.eu), the third phase of the Centre of Excellence in Simulation of Weather and Climate in Europe.

Funded by the European Union. This work has received funding from the European High Performance Computing Joint Undertaking (JU) under grant agreement No 101093054.
