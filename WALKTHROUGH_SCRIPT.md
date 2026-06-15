# Walkthrough Script — Vietnamese Cuisine Listicle

> **How to use this script:**
> Start recording (LiceCap / ScreenToGif), then follow each scene in order.
> Read the **narration** out loud (or use it as a caption guide).
> Follow the **on-screen actions** exactly as written.

---

## Before You Record

1. Open your terminal in the project folder and run:
   ```
   npm install
   node server.js
   ```
2. Open Chrome and go to `http://localhost:3000`
3. Set browser window to about **1280 × 800** for a clean recording
4. Start your recording tool (LiceCap or ScreenToGif)

---

## Scene 1 — Home Page Overview (10–15 sec)

**On screen:** `http://localhost:3000`

**Actions:**
- Let the page fully load so all card images appear
- Slowly scroll down to show all 7 dish cards

**Narration:**
> "This is the Vietnamese Cuisine Listicle. The home page displays 7 iconic Vietnamese dishes as cards. Each card shows the dish name, origin, category badge, a short description, price range, and rating."

---

## Scene 2 — Show a Card Up Close (5 sec)

**On screen:** Home page, zoom in / hover over the **Pho Bo** card

**Actions:**
- Hover your mouse over the Pho Bo card to trigger the hover animation (card lifts up)

**Narration:**
> "Each card has a hover effect and is fully clickable."

---

## Scene 3 — Click Into a Detail Page (15 sec)

**On screen:** Click on **Pho Bo** card → navigates to `http://localhost:3000/dishes/pho`

**Actions:**
- Click the Pho Bo card
- Point out the detail sections one by one:
  - Category badge + title + origin + rating + price (top right)
  - "Description" section
  - "Key Ingredients" section (ingredient tags)
  - "Did You Know?" yellow fun-fact section

**Narration:**
> "Clicking a dish opens its detail page. Here we can see all the database fields: name, origin, category, rating, price, a full description, key ingredients, and a fun fact. The route is `/dishes/pho`."

---

## Scene 4 — Navigate to Another Dish (10 sec)

**On screen:** Click **← All Dishes** → back to home → click **Bun Cha**

**Actions:**
- Click "← All Dishes" back link
- On home page, click the **Bun Cha** card
- Point to the URL bar showing `localhost:3000/dishes/bun-cha`

**Narration:**
> "Each dish has its own unique route. Here's Bun Cha at `/dishes/bun-cha` — famous for the Obama–Bourdain meal in Hanoi."

---

## Scene 5 — Show the 404 Page (8 sec)

**On screen:** Manually type in the URL bar: `http://localhost:3000/dishes/tacos`

**Actions:**
- Click the browser URL bar
- Type `http://localhost:3000/dishes/tacos` and press Enter
- Let the 404 page appear

**Narration:**
> "If you visit a route that doesn't exist, the app serves a custom 404 page."

---

## Scene 6 — Return Home (3 sec)

**On screen:** Click **← Back to Home** button on the 404 page

**Actions:**
- Click the "← Back to Home" button

**Narration:**
> "The 404 page links back to the home page."

---

## Scene 7 — (Optional) Show the Code (10 sec)

**On screen:** Switch to VS Code, open `server.js`

**Actions:**
- Show the route handlers: `app.get("/")`, `app.get("/dishes/:slug")`, `app.use(...)` 404 handler
- Briefly scroll through to show the structure

**Narration:**
> "The backend is built with Express. There are three routes: the home page, individual dish pages, and a catch-all 404 handler. No frontend framework — just vanilla HTML generated server-side."

---

## Stop Recording

- Stop LiceCap / ScreenToGif
- Save as `walkthrough.gif`
- Place `walkthrough.gif` in the project root folder (same level as `README.md`)
- The README already references it: `![walkthrough](walkthrough.gif)`

---

## Total Estimated Recording Time: ~60 seconds

| Scene | Duration |
|-------|----------|
| 1. Home page + scroll | 15 sec |
| 2. Card hover | 5 sec |
| 3. Detail page — Pho | 15 sec |
| 4. Detail page — Bun Cha | 10 sec |
| 5. 404 page | 8 sec |
| 6. Back to home | 3 sec |
| 7. Code (optional) | 10 sec |
