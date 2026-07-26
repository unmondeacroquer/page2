/* =========================================================================
   MAIN.JS — logique du site (aucune modification requise pour ajouter du
   contenu : ça se fait dans site-config.js, cookies-data.js,
   points-de-vente-data.js et bandeau-data.js)
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Chaque fonctionnalité est isolée dans son propre "essai" (try/catch) :
  // si l'une d'elles rencontre un problème sur un appareil ou navigateur
  // particulier, elle échoue silencieusement SANS empêcher les autres de
  // fonctionner. Avant ce changement, un problème sur une seule fonction
  // pouvait bloquer tout le reste du script sur certains appareils.
  runSafely(setHeroImage);
  runSafely(renderCookies);
  runSafely(renderPointsDeVente);
  runSafely(renderBandeau);
  runSafely(setupCookiesArrows);
  runSafely(setupMobileNav);
  runSafely(setupRevealOnScroll);
  runSafely(setupLightbox);
  runSafely(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  });
});

function runSafely(fn) {
  try {
    fn();
  } catch (error) {
    console.error("Un Monde à croquer — une section du site a rencontré un problème :", error);
  }
}

/* ---------------------------- Image d'accueil ---------------------------- */

function setHeroImage() {
  const img = document.getElementById("heroImage");
  if (!img || typeof SITE_CONFIG === "undefined" || typeof HERO_IMAGES === "undefined") return;

  const chosen = HERO_IMAGES[SITE_CONFIG.heroImage];
  if (chosen) {
    img.onerror = () => { img.onerror = null; img.src = "images/logo-hero.png"; };
    img.src = chosen;
  }
}

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

  // Grise et désactive la flèche quand on est déjà tout au début ou tout
  // à la fin du carrousel — plus clair pour la personne qui visite le site.
  const updateArrowState = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 0;
    next.disabled = track.scrollLeft >= maxScroll;
  };

  track.addEventListener("scroll", updateArrowState);
  window.addEventListener("resize", updateArrowState);
  updateArrowState();
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

/* ------------------------------ Bandeau défilant ------------------------------
   Le défilement est piloté directement en JavaScript (plutôt que par une
   animation CSS) : c'est plus long à écrire, mais BEAUCOUP plus fiable
   d'un appareil à l'autre. Certains navigateurs mobiles (surtout sur
   iPad/Safari) gèrent mal les animations CSS qui dépendent d'une mesure
   calculée dynamiquement, ce qui pouvait faire planter le défilement sur
   ces appareils tout en fonctionnant très bien sur ordinateur. */

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
    return; // une seule photo : rien à faire défiler
  }

  startBandeauAnimation(track, photos.length);
}

function startBandeauAnimation(track, singleSetCount) {
  const PIXELS_PER_SECOND = 40; // ← CHANGE CE CHIFFRE pour accélérer/ralentir le défilement
  let position = 0;
  let paused = false;
  let loopWidth = 0;
  let lastTimestamp = null;

  // Mesure la largeur exacte d'un seul jeu de photos (sans la copie).
  // Recalculée à l'ouverture ET à chaque redimensionnement de fenêtre,
  // puisque la taille des photos change selon la largeur de l'écran.
  const measureLoopWidth = () => {
    const secondSetStart = track.children[singleSetCount];
    loopWidth = secondSetStart ? secondSetStart.offsetLeft : track.scrollWidth / 2;
  };
  measureLoopWidth();
  window.addEventListener("resize", measureLoopWidth);

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return; // respecte le réglage d'accessibilité du visiteur

  // Pause au survol de la souris (ordinateur) et au toucher (mobile/tablette).
  const bandeau = track.closest(".bandeau");
  if (bandeau) {
    bandeau.addEventListener("mouseenter", () => { paused = true; });
    bandeau.addEventListener("mouseleave", () => { paused = false; });
    bandeau.addEventListener("touchstart", () => { paused = true; }, { passive: true });
    bandeau.addEventListener("touchend", () => { paused = false; });
  }

  function step(timestamp) {
    if (lastTimestamp === null) lastTimestamp = timestamp;
    const delta = (timestamp - lastTimestamp) / 1000; // secondes écoulées depuis la dernière image
    lastTimestamp = timestamp;

    if (!paused && loopWidth > 0) {
      position -= PIXELS_PER_SECOND * delta;
      if (position <= -loopWidth) position += loopWidth; // boucle exacte, sans saut
      track.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
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

  // Filet de sécurité : si, pour une raison propre à un appareil ou un
  // navigateur, l'apparition en fondu ne se déclenche jamais (ce qui
  // laisserait le contenu invisible), on force son affichage après 2
  // secondes. Mieux vaut un contenu visible sans effet qu'un contenu
  // invisible.
  setTimeout(() => {
    items.forEach(el => el.classList.add("is-visible"));
  }, 2000);
}

/* ------------------------------ Visionneuse plein écran (lightbox) ------------------------------
   Rend cliquables toutes les photos de biscuits et du bandeau défilant.
   Se ferme au clavier (touche Échap), au clic de souris, ou au tap sur
   mobile — n'importe où sur la photo agrandie ou le fond sombre. */

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  if (!lightbox || !lightboxImg || !closeBtn) return;

  let lastFocused = null;

  function openLightbox(src, alt) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open"); // empêche le défilement de la page derrière
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    document.body.classList.remove("lightbox-open");
    if (lastFocused) lastFocused.focus();
  }

  // Clic sur une photo de biscuit ou une photo du bandeau → ouvre la lightbox.
  // "Délégation d'événements" : on écoute sur toute la page plutôt que sur
  // chaque photo individuellement, ce qui fonctionne même si les photos
  // sont ajoutées dynamiquement (cookies-data.js, bandeau-data.js).
  document.addEventListener("click", (event) => {
    const img = event.target.closest(".cookie-photo img, .bandeau-item img");
    if (img) openLightbox(img.src, img.alt);
  });

  // Clic n'importe où dans la lightbox (photo agrandie ou fond sombre) → ferme.
  lightbox.addEventListener("click", closeLightbox);

  // Touche Échap → ferme.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}
