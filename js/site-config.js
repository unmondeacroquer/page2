/* =========================================================================
   SITE-CONFIG.JS — réglages rapides du site
   =========================================================================

   MODE D'EMPLOI
   -------------------------------------------------------------------------
   Ce fichier regroupe les petits choix que tu pourrais vouloir changer
   toi-même sans avoir à comprendre tout le reste du code.

   IMAGE D'ACCUEIL (grande image du haut de la page)
   -------------------------------------------------------------------------
   Choisis laquelle des options ci-dessous doit s'afficher en changeant
   la valeur de "heroImage" plus bas. Écris exactement l'un de ces mots,
   entre guillemets :

     "logo-seul"          → le logo actuel (ourson + texte + slogan)
     "logo-avec-cookies"  → une version alternative avec une photo de
                             biscuits (à ajouter toi-même, voir note
                             ci-dessous)

   Pour ajouter la version "logo-avec-cookies" :
     1. Dépose ton image dans le dossier images/ (ex: images/logo-hero-alt.jpg)
     2. Remplace la ligne "logo-avec-cookies": "images/logo-hero.png"
        juste en dessous par le nom de ton fichier
     3. Change heroImage à "logo-avec-cookies"

   Si le fichier choisi est introuvable, le site affiche automatiquement
   le logo habituel à la place — impossible de "casser" la page d'accueil
   avec ce réglage.
   ========================================================================= */

const SITE_CONFIG = {
  heroImage: "logo-seul",
};

const HERO_IMAGES = {
  "logo-seul": "images/logo-hero.png",

  // ⚠️ Cette clé pointe pour l'instant vers la même image que "logo-seul"
  // car je n'ai pas encore reçu la photo alternative avec les biscuits.
  // Remplace la ligne du dessous par le chemin de ta nouvelle image dès
  // que tu l'ajoutes dans le dossier images/.
  "logo-avec-cookies": "images/logo-hero.png",
};
