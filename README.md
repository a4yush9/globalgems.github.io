# Global Suppliers — Git-ready website

This folder is a static website update for Global Suppliers, Pokhara.

## Structure

- `index.html` — main storefront page; original dark/gold layout is retained and expanded.
- `app.js` — product inventory, filters, Rashi selector, product modal and cart/WhatsApp checkout.
- `style.css` — original visual direction retained with additional transitions, responsive states and UI polish.
- `photos/` — uploaded logo, business card and old-shop photograph.
- `videos/` — uploaded new-shop video and all five additional Quick Tour clips.

## Local assets

| Asset | Website use |
|---|---|
| `photos/logo-global-suppliers.jpeg` | Header, hero, manager and footer branding |
| `photos/business-card.jpg` | Business-card / direct-contact section |
| `photos/old-shop-photo.jpeg` | Original/old shop heritage panel |
| `videos/new-shop-tour.mp4` | Current storefront primary video |
| `videos/quick-tour-01.mp4` … `quick-tour-05.mp4` | Quick Tour clips |

## Easy edits

Search the comments marked `EDITABLE` in `index.html` and `app.js`.

- Product names/prices/images: `app.js` → `products`
- Rashi names, stone associations and reference images: `app.js` → `rashiData`
- Manager information: `index.html` → Management section
- Business contact numbers: `index.html` and `app.js` WhatsApp checkout URL
- Uploaded media paths: `index.html` → Heritage / Quick Tour section

## Important product-image note

The supplied uploads contain shop/brand imagery and videos, but no individual product photo set. Therefore, product cards use public reference imagery where a matching uploaded product photograph was not available. The UI explicitly tells customers to confirm the exact in-stock item, material, size, finish and final Wholeale and Retail quote before ordering.

## Traditional-belief wording

Rashi Ratna and Panchadhatu descriptions use cultural/traditional wording rather than medical or scientific guarantees. Gemstone associations can vary by astrology tradition and practitioner.

## Run locally

Open `index.html` directly, or for the most reliable video/browser behavior run a local static server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

No build step or npm dependency is required.
