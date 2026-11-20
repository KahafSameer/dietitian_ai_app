# Dietitian AI App

Early-stage front end for a diet recommendation app, created for Dr. Roha Minahil (dietitian).

## What's here

| Path | Contents |
|---|---|
| `templates/index.html` | "Dietitian AI" form: age, sex, weight, height, activity level. It posts to `/recommend` |
| `templates/result.html` | Result page template |
| `static/script.js`, `static/style.css` | Client-side input validation and styles |
| `data/diet_dataset.csv` | Placeholder dataset for diet recommendations |

## Status

The `templates/` + `static/` layout follows the Flask convention, but **there's no server code yet**: nothing handles `POST /recommend`. To run it, add a backend (for example a Flask `app.py`) that renders `index.html` and serves recommendations from `data/diet_dataset.csv`.

## Preview the UI

Open `templates/index.html` in a browser. Styles and scripts in `static/` may not load until a server serves them.
