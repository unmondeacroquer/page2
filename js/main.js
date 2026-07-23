/* =========================================================================
   MAIN.JS — logique du site (aucune modification requise pour ajouter du
   contenu : ça se fait dans cookies-data.js, points-de-vente-data.js et
   bandeau-data.js)
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderCookies();
  renderPointsDeVente();
  renderBandeau();
  setupCookiesArrows();
  setupMobileNav();
  setupRevealOnScroll();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------------------- Nos biscuits ---------------------------- */

function renderCookies() {
  const track = document.getElementById("cookiesTrack");
  if (!track || typeof COOKIES === "undefined") return;

  track.innerHTML = COOKIES.map(cookie => `
    <article class="cookie-card">
      <div class="cookie-photo">
        <img src="${cookie.image}" alt="Biscuit ${cookie.nom}"
             onerror="this.onerror=null;this.src='images/cookies/placeholder.svg';">
      </div>
      <h3>${cookie.nom}</h3>
      <p class="desc">${cookie.description}</p>
      <div class="cookie-tags">
        ${cookie.sansGluten ? '<span class="tag gluten">Sans gluten</span>' : ""}
        ${cookie.vegan ? '<span class="tag">Végan</span>' : ""}
        ${cookie.sansLactose ? '<span class="tag">Sans produits laitiers</span>' : ""}
      </div>
    </article>
  `).join("");
}

function setupCookiesArrows() {
  const track = document.getElementById("cookiesTrack");
  const prev = document.getElementById("cookiesPrev");
  const next = document.getElementById("cookiesNext");
  if (!track || !prev || !next) return;

  const scrollByCard = (direction) => {
    const card = track.querySelector(".cookie-card");
    const gap = 22;
    const distance = card ? card.offsetWidth + gap : 260;
    track.scrollBy({ left: direction * distance * 2, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
}

/* ------------------------------ Où nous trouver ------------------------------ */

function renderPointsDeVente() {
  const list = document.getElementById("pdvList");
  if (!list || typeof POINTS_DE_VENTE === "undefined") return;

  list.innerHTML = POINTS_DE_VENTE.map(pdv => `
    <li>
      <span class="pdv-pin">📍</span>
      <div class="pdv-info">
        <span class="pdv-ville">${pdv.ville}</span>
        <strong>${pdv.nom}</strong>
        ${pdv.adresse ? `<div class="pdv-adresse">${pdv.adresse}</div>` : ""}
        ${pdv.telephone ? `<div class="pdv-tel">${pdv.telephone}</div>` : ""}
        ${pdv.siteWeb ? `<a class="pdv-site" href="${pdv.siteWeb}" target="_blank" rel="noopener">Voir la page ›</a>` : ""}
      </div>
    </li>
  `).join("");
}

/* ------------------------------ Bandeau défilant ------------------------------ */

function renderBandeau() {
  const track = document.getElementById("bandeauTrack");
  if (!track || typeof BANDEAU === "undefined") return;

  let photos = BANDEAU;
  if (!photos || photos.length === 0) {
    // Aucune photo ajoutée : on affiche un visuel générique le temps
    // que tu déposes tes vraies photos dans images/bandeau-defilant/
    photos = ["images/bandeau-defilant/placeholder.svg"];
  }

  // On duplique la liste pour créer une boucle infinie fluide.
  const loopPhotos = photos.length > 1 ? photos.concat(photos) : photos;

  track.innerHTML = loopPhotos.map(src => `
    <div class="bandeau-item">
      <img src="${src}" alt="" loading="lazy"
           onerror="this.onerror=null;this.src='images/bandeau-defilant/placeholder.svg';">
    </div>
  `).join("");

  if (photos.length <= 1) {
    track.classList.add("is-static");
  }
}

/* ------------------------------ Menu mobile ------------------------------ */

function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ------------------------------ Reveal on scroll ------------------------------ */

function setupRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}
