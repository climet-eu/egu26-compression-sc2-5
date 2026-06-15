# EGU26 SC2.5: Data compression and reduction for Earth System Sciences datasets in practice

| [![materials-badge]][materials-url] | [![slides-badge]][slides-url] |
|:-:|:-:|

[materials-badge]: https://zenodo.org/badge/DOI/10.5281/zenodo.20136415.svg
[slides-badge]: https://zenodo.org/badge/DOI/10.5281/zenodo.20136040.svg

[materials-url]: https://doi.org/10.5281/zenodo.20136415
[slides-url]: https://doi.org/10.5281/zenodo.20136040

See you at the [EGU26 Short Course SC2.5][egu26-sc25] on Friday, 08 May, 14:00–15:45 (CEST) in Room -2.82 or [remotely][egu26-sc25].

[egu26-sc25]: https://meetingorganizer.copernicus.org/EGU26/session/57884


## Getting Started

You can find the short course introduction slides in [00-introduction.pdf](00-introduction.pdf).

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

Alternatively, you can open the notebooks in the [Online Laboratory](https://egu.lab.climet.eu/egu26) for Climate Science and Meteorology and get started right away.
Please note that compression in the Online Laboratory currently only works in recent Firefox and Chrome browsers.


## Glossary

Bit Pattern
: The bits that make up a number, e.g. the 32 bits for a single-precision floating-point number.

Codec
: An algorithm that transforms the data from one representation to another (encoding) and back (decoding).

Compression
: Reducing the number of bits needed to store some data.

Compressor
: A codec that implements compression and decompression.

Filter
: A codec that transforms the data to make it more easily compressible without necessarily reducing its byte size directly itself.

IEEE 754 Floating Point Number
: A number with dynamic precision $(-1)^{s} \cdot 2^{e-b} \cdot 1.m\ldots$ that is represented by its sign $s$, its binary exponent $e$ with bias $b$, and a mantissa $m\ldots$ that encodes the binary fractional multiplier.

Lossless Compression
: Compression that reproduces the original bits exactly during decompression.

Lossy Compression
: Compression that may only produce an approximation of the original data during decompression.

Meta-Compressor
: A compressor that wraps one or more other compressors and transforms the data they work with. Meta-compressors can be used to combine multiple compressors or to provide extra functionality on top of existing compressors.

Pointwise Absolute Error Bound
: $|\hat{x} - x| <= \epsilon_{abs}$ for the original data $x$ and decompressed data $\hat{x}$

Pointwise Relative Error Bound
: $|\hat{x} - x| <= (|x| \cdot \epsilon_{rel})$ for the original data $x$ and decompressed data $\hat{x}$

Range-Relative Error Bound
: $|\hat{x} - x| <= ((\max{(X)} - \min{(X)}) \cdot \epsilon_{range\_rel})$ for the original data $x$ and decompressed data $\hat{x}$

Quantity of Interest
: Function $f(x)$ that is computed over the data $x$


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
