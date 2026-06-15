const express = require("express");
const dishes = require("./data/dishes");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Helper: render star rating
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

// Helper: shared HTML head
function htmlHead(title) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
  <link rel="stylesheet" href="/style.css" />
</head>
<body>`;
}

// Helper: nav bar
function navbar() {
  return `<nav class="container-fluid site-nav">
  <a href="/" class="nav-brand">🍜 Vietnamese Cuisine</a>
  <span class="nav-sub">Explore the flavors of Vietnam</span>
</nav>`;
}

// Helper: footer
function footer() {
  return `<footer class="container-fluid site-footer">
  <p>© 2026 Vietnamese Cuisine · WEB103 Project 1</p>
</footer>
</body>
</html>`;
}

// ─── GET / ────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  const cards = dishes
    .map(
      (d) => `
    <a href="/dishes/${d.slug}" class="card-link">
      <article class="dish-card">
        <div class="card-img-wrap">
          <img src="${d.image}" alt="${d.name}" loading="lazy" />
          <span class="badge">${d.category}</span>
        </div>
        <div class="card-body">
          <h3>${d.name}</h3>
          <p class="origin">📍 ${d.origin}</p>
          <p class="desc">${d.description.slice(0, 110)}…</p>
          <div class="card-footer-row">
            <span class="price">💰 ${d.price}</span>
            <span class="stars" title="${d.rating}/5">${renderStars(d.rating)} ${d.rating}</span>
          </div>
        </div>
      </article>
    </a>`
    )
    .join("");

  res.send(`${htmlHead("Vietnamese Cuisine - Home")}
${navbar()}

<header class="hero container-fluid">
  <div class="hero-content">
    <h1>🍜 Vietnamese Cuisine</h1>
    <p>Discover the most iconic dishes of Vietnamese food culture — from North to South</p>
  </div>
</header>

<main class="container">
  <h2 class="section-title">All Dishes <span class="count">${dishes.length} dishes</span></h2>
  <div class="card-grid">
    ${cards}
  </div>
</main>

${footer()}`);
});

// ─── GET /dishes/:slug ────────────────────────────────────────────────────────
app.get("/dishes/:slug", (req, res) => {
  const dish = dishes.find((d) => d.slug === req.params.slug);

  if (!dish) {
    return res.status(404).send(`${htmlHead("404 - Not Found")}
${navbar()}
<main class="container not-found">
  <div class="not-found-box">
    <h1>404</h1>
    <p>🍽️ The dish you're looking for doesn't exist.</p>
    <a href="/" role="button">← Back to Home</a>
  </div>
</main>
${footer()}`);
  }

  const ingredientList = dish.ingredients.map((i) => `<li>${i}</li>`).join("");

  res.send(`${htmlHead(`${dish.name} - Vietnamese Cuisine`)}
${navbar()}

<main class="container detail-page">
  <a href="/" class="back-link">← All Dishes</a>

  <div class="detail-hero">
    <img src="${dish.image}" alt="${dish.name}" class="detail-img" />
    <div class="detail-info">
      <span class="badge big">${dish.category}</span>
      <h1>${dish.name}</h1>
      <p class="origin big">📍 ${dish.origin}</p>
      <div class="stars big">${renderStars(dish.rating)} <strong>${dish.rating}</strong> / 5</div>
      <p class="price big">💰 ${dish.price}</p>
    </div>
  </div>

  <div class="detail-body">
    <section>
      <h2>Description</h2>
      <p>${dish.description}</p>
    </section>

    <section>
      <h2>Key Ingredients</h2>
      <ul class="ingredient-list">${ingredientList}</ul>
    </section>

    <section class="fun-fact">
      <h2>💡 Did You Know?</h2>
      <p>${dish.funFact}</p>
    </section>
  </div>
</main>

${footer()}`);
});

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send(`${htmlHead("404 - Not Found")}
${navbar()}
<main class="container not-found">
  <div class="not-found-box">
    <h1>404</h1>
    <p>🍽️ The page you're looking for doesn't exist.</p>
    <a href="/" role="button">← Back to Home</a>
  </div>
</main>
${footer()}`);
});

// ─── Start server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
