/* =========================================================================
   COOKIES-DATA.JS — Liste des biscuits "Un Monde à croquer"
   =========================================================================

   MODE D'EMPLOI — comment ajouter, modifier ou retirer un biscuit
   -------------------------------------------------------------------------
   1. Chaque biscuit est un objet { ... } dans le tableau COOKIES ci-dessous.
      Copie un bloc existant, colle-le, et modifie les valeurs.

   2. Champs disponibles :
        nom          → texte, le nom du biscuit (ex: "Triple chocolat")
        description  → texte, une phrase courte qui donne envie
        image        → chemin vers la photo, toujours dans le dossier
                       images/cookies/  (ex: "images/cookies/triple-chocolat.jpg")
        sansGluten   → true ou false (sans les guillemets)
        vegan        → true ou false
        sansLactose  → true ou false

   3. PHOTOS — format et taille recommandés :
        - Format carré, idéalement 800 x 800 pixels (minimum 500 x 500)
        - Fichier .jpg ou .png, poids idéal sous 300 Ko
        - Nomme le fichier sans espace ni accent, avec des tirets :
          ex: "coeur-tendre.jpg", "choco-grenoble.jpg"
        - Dépose le fichier directement dans le dossier images/cookies/
          (dans GitHub : ouvrir le dossier images/cookies puis
          "Add file" → "Upload files")
        - Tant qu'aucune photo n'est ajoutée, un visuel "Photo à venir"
          s'affiche automatiquement à sa place — le site ne casse jamais.

   4. Pour retirer un biscuit : supprime son bloc { ... } au complet
      (n'oublie pas la virgule entre les blocs restants).

   5. L'ordre du tableau = l'ordre d'affichage sur le site, de gauche à
      droite dans le carrousel.
   ========================================================================= */

const COOKIES = [
  {
    nom: "Traditionnel",
    description: "Le classique aux brisures de chocolat, comme à la maison.",
    image: "images/cookies/traditionnel.jpg",
    sansGluten: true,
    vegan: true,
    sansLactose: true
  },
  {
    nom: "Triple chocolat",
    description: "Pour les vrais gourmands de chocolat, sans compromis.",
    image: "images/cookies/triple-chocolat.jpg",
    sansGluten: true,
    vegan: true,
    sansLactose: true
  },
  {
    nom: "Cœur tendre",
    description: "Un cœur fondant à la confiture, glacé au sucre.",
    image: "images/cookies/coeur-tendre.jpg",
    sansGluten: true,
    vegan: false,
    sansLactose: false
  },
  {
    nom: "Cœur Sapin",
    description: "Édition des fêtes, glaçage vert et une pointe de vanille.",
    image: "images/cookies/coeur-sapin.jpg",
    sansGluten: true,
    vegan: false,
    sansLactose: false
  },
  {
    nom: "Choco grenoble",
    description: "Chocolat, noix de Grenoble et une touche de sel de mer.",
    image: "images/cookies/choco-grenoble.jpg",
    sansGluten: true,
    vegan: true,
    sansLactose: true
  },
  {
    nom: "Matcha",
    description: "Thé vert matcha et pépites de chocolat blanc.",
    image: "images/cookies/matcha.jpg",
    sansGluten: true,
    vegan: false,
    sansLactose: false
  }
];
