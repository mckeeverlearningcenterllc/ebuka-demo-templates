# School / Training Centre Template — Customisation Guide

**Template:** School / Educational Institution  
**Package Tier:** Premium (5 pages)  
**Colour Scheme:** Royal Blue `#1e40af` + Amber `#f59e0b`

---

## Files in This Template

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, stats, why choose us, programmes overview, admissions CTA |
| `programmes.html` | Full programme listings — Nursery, Primary, Secondary, Extra-curricular |
| `about.html` | School story, mission/vision/values, stats, leadership team |
| `admissions.html` | How to apply, requirements, fees table, term dates, FAQ |
| `contact.html` | WhatsApp CTA, address, hours, map placeholder |

---

## Placeholders to Replace

Search the files for these exact placeholders and replace with real details:

| Placeholder | What to Replace With |
|-------------|---------------------|
| `SCHOOL NAME` | e.g. Bright Horizon Academy |
| `234XXXXXXXXXX` | e.g. 2348012345678 (no spaces, no +, starts with 234) |
| `STREET ADDRESS` | e.g. 14 Bode Thomas Street |
| `AREA` | e.g. Surulere |
| `YEAR` | Year the school was founded e.g. 2009 |
| `PROPRIETRESS NAME` | Real name of the proprietress |
| `PRINCIPAL NAME` | Real name of the principal |
| `HEAD OF NURSERY NAME` | Real name of nursery head |
| `₦XX,000` | Real fee amounts for each level |
| `September XX`, `December XX` etc. | Actual term dates |
| `0XX XXXX XXXX` | Real phone number |

---

## How to Change the Colour Scheme

The two main colours are used throughout inline styles:

- **Royal Blue** `#1e40af` — nav background, headings, buttons, section backgrounds
- **Amber** `#f59e0b` — accents, stat labels, active nav link, highlight borders

To change the school colour (e.g. dark green instead of blue):
1. Press **Ctrl+H** in VS Code (Find and Replace)
2. Check "Replace across all files in folder"
3. Replace `#1e40af` with your new colour
4. Repeat for the amber accent if needed

---

## Swapping Photos

All photos use free Pexels images. To use the school's own photos:

1. Upload photos to the same folder as the HTML files
2. Replace the `src="https://images.pexels.com/..."` URL with `src="your-photo.jpg"`
3. Keep `class="w-full h-40 object-cover"` to maintain consistent sizing

**Recommended photo sizes:**
- Hero: 1260×750px
- Programme cards: 600×350px
- Team headshots: 300×300px (will be cropped to circle)
- About story image: 700×450px

---

## Adding/Removing Programmes

To **remove** a programme (e.g. if it's nursery-only):
- Delete the entire `<div class="bg-white rounded-2xl overflow-hidden ...">` block for that card
- Adjust the grid from `md:grid-cols-3` to `md:grid-cols-2` if removing one of three

To **add** a programme:
- Duplicate an existing programme card block
- Update the image, title, description, and age range

---

## Updating the Fees Table (admissions.html)

The fees table uses `₦XX,000` as placeholders. Replace each cell with the real fee:
- Find the `<td>` cells containing `₦XX,000`
- Replace with actual amounts e.g. `₦85,000`

---

## Updating Term Dates (admissions.html)

Find the three term date cards and replace:
- `September XX` → `September 8`
- `December XX` → `December 12`
- etc.

---

## Embedding a Real Google Map

On `contact.html`, replace the grey map placeholder section with a real Google Maps embed:

1. Go to [maps.google.com](https://maps.google.com)
2. Search for the school address
3. Click **Share** → **Embed a map**
4. Copy the `<iframe>` code
5. Replace the entire placeholder `<div>` with the iframe code
6. Add `class="w-full rounded-2xl"` and `height="360"` to the iframe

---

## WhatsApp Message Text

The WhatsApp links have pre-filled messages. To customise what parents see when they tap:

Current message (URL-encoded):
```
Hi%2C%20I%27d%20like%20to%20enquire%20about%20admission%20at%20SCHOOL%20NAME.
```

Which decodes to:
```
Hi, I'd like to enquire about admission at SCHOOL NAME.
```

To change: replace the text after `?text=` with your own URL-encoded message. Use [urlencoder.org](https://www.urlencoder.org/) to encode your text.

---

## Deploying This Template

1. Duplicate the `_templates/school/` folder and rename it to the client name (e.g. `bright-horizon/`)
2. Make all placeholder replacements
3. Deploy to Netlify (drag and drop the folder) or GitHub Pages
4. Test all 5 pages and all WhatsApp links before handing over

---

*Template by Ebuka's Websites — ebukas-websites.netlify.app*
