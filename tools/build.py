#!/usr/bin/env python3
"""Build the publishable copy of the site into dist/.

site/ is the source and stays readable: its CSS and JavaScript carry the
comments that explain why things are the way they are, and those comments are
how the traps in AGENTS.md stay avoided. dist/ is what gets published. It is
site/ with the three stylesheets and scripts minified, nothing else changed.

Run it after tools/stamp.py, which writes the cache-busting hashes into
site/index.html; the hashes are taken from the source files, so a source edit
still changes them, and the minified copies are served under the same names.

    python3 tools/stamp.py && python3 tools/build.py

Then publish dist/ to gh-pages, as AGENTS.md describes.
"""
import pathlib, shutil, subprocess, sys

ESBUILD = ['npx', '--yes', 'esbuild@0.24.0']   # pinned, so a release cannot change the output
root = pathlib.Path(__file__).resolve().parent.parent
site, dist = root / 'site', root / 'dist'

if dist.exists():
    shutil.rmtree(dist)
shutil.copytree(site, dist)

total_in = total_out = 0
for name in ('tokens.css', 'app.css', 'app.js'):
    src, out = site / name, dist / name
    # No bundling and no format: a plain script stays a plain script, and its
    # top-level names, which other code may call, are left alone.
    r = subprocess.run(ESBUILD + [str(src), '--minify', '--log-level=warning',
                                  f'--outfile={out}'],
                       capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit(f'esbuild failed on {name}:\n{r.stderr}')
    a, b = src.stat().st_size, out.stat().st_size
    total_in += a; total_out += b
    print(f'{name:11} {a:>7,} -> {b:>7,} bytes')

print(f'{"total":11} {total_in:>7,} -> {total_out:>7,} bytes; dist/ ready to publish')
