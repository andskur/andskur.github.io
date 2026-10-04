#!/usr/bin/env python3
"""Stamp asset links in site/index.html with a content hash.

GitHub Pages serves assets with cache-control: max-age=600, so for ten
minutes after a deploy a browser can hold an old app.js against a new
index.html. That combination has already shipped a broken form once: the
stale script looked for a selector the new markup no longer used, attached
no handler, and the form posted natively. A hash in the query string makes
each deploy a different URL, so the pair can never be mismatched.
"""
import hashlib, io, re, pathlib

site = pathlib.Path(__file__).resolve().parent.parent / 'site'
html = (site / 'index.html').read_text(encoding='utf-8')

def digest(name):
    return hashlib.sha1((site / name).read_bytes()).hexdigest()[:8]

for asset in ('tokens.css', 'app.css', 'app.js'):
    h = digest(asset)
    html = re.sub(r'(["\'])/' + re.escape(asset) + r'(\?v=[0-9a-f]+)?\1',
                  lambda m: f'{m.group(1)}/{asset}?v={h}{m.group(1)}', html)

(site / 'index.html').write_text(html, encoding='utf-8')

# The sitemap's only real job on a one-page site is to say when the page last
# changed, so the date is written here rather than by hand, where it would go
# stale the first time someone forgot.
import datetime
sitemap = site / 'sitemap.xml'
if sitemap.exists():
    today = datetime.date.today().isoformat()
    xml = sitemap.read_text(encoding='utf-8')
    xml = re.sub(r'<lastmod>[^<]*</lastmod>', f'<lastmod>{today}</lastmod>', xml)
    sitemap.write_text(xml, encoding='utf-8')
    print('sitemap lastmod:', today)
print('stamped:', ', '.join(f'{a}?v={digest(a)}' for a in ('tokens.css', 'app.css', 'app.js')))
