#!/usr/bin/env python3
"""Rebuild preview/images.json — the picker's image library.
Run from the project root after adding or renaming anything under assets/:

    python3 preview/build-manifest.py
"""
import os, json, glob
from math import gcd
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

# order here is the order they appear in the picker
GROUPS = [
 ("estate",      "Cruikshank Estate — Exteriors", "Client photography · watermark cropped"),
 ("interiors",   "Cruikshank Estate — Interiors", "Kitchen, library, sun room, barn"),
 ("habeck",      "Habeck Residence",              "Colonial, Maryland"),
 ("commercial",  "Commercial & Hospitality",      "Dick's, TIAA-CREF, casino, Bobby Van's"),
 ("civic",       "Civic, Transit & Multifamily",  "Union Station, VRE, townhouses"),
 ("images",      "Project Archive",               "Catonsville and earlier work"),
 ("creative",    "Campaign Creative",             "The client's own advert artwork"),
 ("graphics",    "Diagrams & Charts",             "Custom, brand palette"),
 ("stock",       "Process Imagery",               "CC0 / public domain"),
 ("placeholders","Placeholders",                  "Still to be shot"),
 ("brand",       "Brand",                         "Logo variants"),
]

def pretty(fn):
    n = os.path.splitext(fn)[0].replace("-", " ").replace("_", " ")
    return n[:1].upper() + n[1:]

def ratio(w, h):
    if not w or not h: return ""
    g = gcd(w, h); a, b = w // g, h // g
    if a > 20 or b > 20:
        r = w / h
        for x, y in [(1,1),(4,3),(3,2),(16,9),(2,1),(3,4),(2,3),(9,16),(1,2),(4,1)]:
            if abs(r - x/y) < 0.05: return f"{x}:{y}"
        return f"{r:.2f}:1"
    return f"{a}:{b}"

out, total = [], 0
for gid, title, sub in GROUPS:
    d = f"assets/{gid}"
    items = []
    for p in sorted(glob.glob(f"{d}/*")):
        if not p.lower().endswith((".jpg", ".jpeg", ".png", ".webp")): continue
        try: w, h = Image.open(p).size
        except Exception: continue
        items.append({"src": "../" + p, "name": pretty(os.path.basename(p)),
                      "file": os.path.basename(p), "w": w, "h": h,
                      "ratio": ratio(w, h), "kb": os.path.getsize(p)//1024, "group": gid})
    if items:
        out.append({"id": gid, "title": title, "sub": sub, "images": items})
        total += len(items)

json.dump(out, open("preview/images.json", "w"), indent=1)
print(f"preview/images.json — {total} images in {len(out)} groups")
for g in out:
    print(f"  {g['title']:34s} {len(g['images']):3d}")
