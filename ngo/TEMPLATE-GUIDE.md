# NGO / Non-Profit Template — Customisation Guide

**Template:** NGO / Non-Profit Organisation  
**Package Tier:** Premium (5 pages)  
**Colour Scheme:** Deep Green `#166534` + Warm Orange `#ea580c`

---

## Files in This Template

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, impact stats, cause overview, featured programme, recent impact stories, CTA |
| `programmes.html` | All programmes — Education, Health, Livelihood, Emergency Relief |
| `about.html` | Story, Mission/Vision/Values, stats, leadership team, partners |
| `get-involved.html` | Donate section (with bank details + tiers), volunteer opportunities |
| `contact.html` | WhatsApp CTA, office address, hours, map placeholder |

---

## Placeholders to Replace

| Placeholder | What to Replace With |
|-------------|---------------------|
| `ORG NAME` | e.g. Bright Futures Foundation |
| `234XXXXXXXXXX` | e.g. 2348012345678 (no spaces, no +) |
| `STREET ADDRESS` | e.g. 22 Adeniran Ogunsanya Street |
| `AREA` | e.g. Surulere |
| `YEAR` | Year the org was founded e.g. 2015 |
| `CAUSE` | e.g. education and health for underserved communities |
| `FOUNDER NAME` | Real name of the founder |
| `PROGRAMMES DIRECTOR NAME` | Real name |
| `FINANCE OFFICER NAME` | Real name |
| `XXXXXXXXXX` (account number) | Real NGO bank account number |
| `BANK NAME` | e.g. GTBank, Access Bank |
| `PARTNER HOSPITAL NAME` | Real partner name |
| `DONOR ORGANISATION NAME` | Real major donor/funder |
| `COMMUNITY ASSOCIATION NAME` | Real community partner |
| `info@ORGNAME.org` | Real email address |

---

## Customising the Programmes

This template uses four standard programme areas: Education, Health, Livelihood, and Emergency Relief. To customise:

- **Rename** any programme to match the real NGO's focus (e.g. rename "Livelihood" to "Women Empowerment")
- **Remove** any programme section that doesn't apply — just delete the entire `<section>` block
- **Add** a new programme by duplicating an existing section and updating the content

---

## Donation Tiers (get-involved.html)

The three donation tiers (₦5,000 / ₦20,000 / ₦50,000) are examples. Update these to match the NGO's real suggested amounts. Replace the descriptions with what each amount actually funds in their programmes.

## Bank Account Details

The bank account section on `get-involved.html` contains placeholder fields. Replace:
- Account Name → Real NGO-registered account name
- Account Number → Real account number
- Bank → Real bank

**Important:** Only list a bank account that is registered in the NGO's legal name for credibility and donor confidence.

---

## Changing the Colour Scheme

Main colours used:
- **Deep Green** `#166534` — nav, section backgrounds, buttons
- **Warm Orange** `#ea580c` — accent colour, donate buttons, highlights
- **Light Green** `#f0fdf4` — section backgrounds

To change, use Find and Replace (Ctrl+H) across all files in the folder.

---

## Swapping Photos

All photos use Pexels CDN. Replace with real photos of the NGO's work:
1. Upload photos to the same folder as the HTML files
2. Replace `src="https://images.pexels.com/..."` with `src="your-photo.jpg"`

**Best photo types to request from client:**
- Community outreach events
- Beneficiaries (with permission)
- Team/volunteers in action
- Before/after project photos

---

## Deploying This Template

1. Duplicate the `_templates/ngo/` folder and rename it to the client name
2. Make all placeholder replacements
3. Deploy to Netlify (drag and drop the folder)
4. Test all 5 pages and all WhatsApp links before handover

---

*Template by Ebuka's Websites — ebukas-websites.netlify.app*
