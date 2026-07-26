/* =========================================================================
   SITE-CONFIG.JS — réglages rapides du site
   =========================================================================

   MODE D'EMPLOI
   -------------------------------------------------------------------------
   Ce fichier regroupe les petits choix que tu pourrais vouloir changer
   toi-même sans avoir à comprendre tout le reste du code.


   PHOTO DE FOND DE LA PAGE D'ACCUEIL (remplit tout l'écran)
   -------------------------------------------------------------------------
   Le logo (transparent) et les 4 icônes rondes s'affichent PAR-DESSUS
   cette photo. Choisis quelle photo utiliser en changeant la valeur de
   "heroBackground" plus bas :

     "aucune"    → pas de photo, fond crème uni (comme avant)
     "cookies"   → la photo de biscuits fournie

   Pour ajouter une NOUVELLE photo de fond :
     1. Prépare une photo bien large (1600px de large minimum si possible,
        format .jpg, poids idéal sous 400 Ko) — elle sera automatiquement
        recadrée pour remplir tout l'écran, quelle que soit sa taille.
        Évite les photos où l'élément important est tout en haut ou tout
        en bas : privilégie un sujet plutôt centré, car les bords peuvent
        être rognés selon la forme de l'écran (téléphone, ordinateur...).
     2. Dépose le fichier dans le dossier images/
     3. Ajoute une nouvelle ligne dans HERO_BACKGROUNDS ci-dessous, avec
        un nom de ton choix, ex: "atelier": "images/hero-bg-atelier.jpg"
     4. Change heroBackground pour ce nom, ex: heroBackground: "atelier"

   Si le fichier choisi est introuvable, le site revient automatiquement
   au fond crème uni — impossible de "casser" la page d'accueil avec ce
   réglage.


   IMAGE DU LOGO AFFICHÉ (par-dessus la photo de fond)
   -------------------------------------------------------------------------
   "heroLogo" choisit quel fichier logo (transparent) est affiché :

     "logo-seul"  → le logo actuel (ourson + texte + slogan), transparent
   ========================================================================= */

const SITE_CONFIG = {
  heroBackground: "cookies",
  heroLogo: "logo-seul",
};

const HERO_BACKGROUNDS = {
  "aucune": null,
  "cookies": "images/cookieprincipal.jpg",
};

const HERO_LOGOS = {
  "logo-seul": "images/logo-hero.png",
};
