# Un Monde à croquer — guide du site

Ce dossier contient tout le nécessaire pour mettre ton site en ligne sur
GitHub Pages. Tu n'as besoin d'aucun logiciel : tout se fait depuis le
site github.com, dans ton navigateur.

## 1. Mettre le site en ligne

1. Va sur ton dépôt GitHub existant (celui déjà connecté à
   `www.unmondeacroquer.com`).
2. Supprime les anciens fichiers du dépôt (s'il y en a), puis clique sur
   **"Add file" → "Upload files"**.
3. Glisse-dépose **tout le contenu de ce dossier** (pas le dossier
   lui-même — son contenu : `index.html`, les dossiers `css/`, `js/`,
   `images/`, et le fichier `CNAME`).
4. Clique sur **"Commit changes"** en bas de page.
5. Dans **Settings → Pages**, vérifie que le domaine personnalisé est
   toujours `www.unmondeacroquer.com` et que "Enforce HTTPS" est coché.
   S'il affiche une erreur de certificat, décoche puis recoche la case
   (le certificat peut prendre jusqu'à une heure à être émis).

Ton site sera visible à https://www.unmondeacroquer.com/ une fois le
tout propagé.

## 2. Ajouter tes vraies photos de biscuits

1. Prépare tes photos : **carrées**, environ **800 x 800 pixels**,
   format `.jpg`, poids idéal sous 300 Ko.
2. Nomme chaque fichier sans espace ni accent, avec des tirets — par
   exemple `triple-chocolat.jpg`.
3. Dans GitHub, ouvre le dossier `images/cookies/`, clique sur
   **"Add file" → "Upload files"**, dépose tes photos, puis
   **"Commit changes"**.
4. Ouvre le fichier `js/cookies-data.js` (bouton crayon ✏️ pour
   modifier) et vérifie que le champ `image` de chaque biscuit
   correspond exactement au nom de fichier que tu viens d'ajouter.
5. Le mode d'emploi complet (comment ajouter, modifier ou retirer un
   biscuit, activer les logos "sans gluten" / "végan" / "sans produits
   laitiers") est écrit en commentaire tout en haut de ce fichier.

Tant qu'une photo n'est pas encore ajoutée, un visuel "Photo à venir"
s'affiche automatiquement — le site ne casse jamais.

## 3. Ajouter les photos du bandeau défilant

1. Prépare tes photos : **format paysage**, environ **1200 x 800
   pixels**, `.jpg`, poids idéal sous 400 Ko.
2. Dépose-les dans le dossier `images/bandeau-defilant/` (même méthode
   que ci-dessus).
3. Ouvre `js/bandeau-data.js` et ajoute le nom de chaque fichier dans
   la liste, comme montré en exemple dans le fichier. Une seule photo
   fonctionne très bien aussi — elle restera fixe au lieu de défiler.

## 4. Compléter les adresses des points de vente

Le fichier `js/points-de-vente-data.js` contient les 5 commerces
partenaires. J'ai laissé "À compléter" pour les adresses et téléphones
que je n'avais pas — remplace ces valeurs par les vraies coordonnées.
Le mode d'emploi est en commentaire en haut du fichier.

## 5. Modifier les liens Facebook / Instagram

Dans `index.html`, cherche la section `<div class="social-links">`
tout en bas du fichier, et remplace les deux `href="https://facebook.com/"`
et `href="https://instagram.com/"` par les vraies adresses de vos pages.

## Structure des fichiers

```
index.html                       → la page (contenu et structure)
CNAME                            → ton domaine personnalisé (ne pas supprimer)
css/style.css                    → toutes les couleurs, polices, mises en page
js/main.js                       → fait fonctionner le site (ne pas modifier)
js/cookies-data.js               → LISTE DES BISCUITS — à modifier
js/points-de-vente-data.js       → LISTE DES POINTS DE VENTE — à modifier
js/bandeau-data.js               → LISTE DES PHOTOS DU BANDEAU — à modifier
images/logo.jpg                  → ton logo
images/carte-points-de-vente.jpg → la carte de l'Estrie
images/cookies/                  → dépose ici tes photos de biscuits
images/bandeau-defilant/         → dépose ici tes photos du bandeau
```

## Prochaine étape : passage en site marchand

Dans 6 à 12 mois, quand tu voudras vendre en ligne, ce site statique
migrera facilement vers une plateforme comme Shopify — le contenu
(textes, photos, palette) sera réutilisable tel quel.
