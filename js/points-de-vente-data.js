/* =========================================================================
   POINTS-DE-VENTE-DATA.JS — Liste des détaillants partenaires
   =========================================================================

   MODE D'EMPLOI
   -------------------------------------------------------------------------
   Chaque point de vente est un objet { ... } dans le tableau ci-dessous.

     nom      → nom du commerce
     ville    → ville affichée sous le nom
     adresse  → adresse complète (rue, ville, code postal) — affichée
                telle quelle, mets une chaîne vide "" si tu ne veux rien
                afficher
     telephone→ numéro de téléphone, chaîne vide "" si non disponible
     siteWeb  → lien vers leur site ou leur page Facebook, chaîne vide ""
                si non disponible

   ⚠️ IMPORTANT : les adresses et numéros ci-dessous sont des champs à
   COMPLÉTER — je n'avais pas cette information. Remplace "À compléter"
   par les vraies coordonnées de chaque commerce avant la mise en ligne.
   ========================================================================= */

const POINTS_DE_VENTE = [
  {
    nom: "L'Échappée Belle",
    ville: "Sutton",
    adresse: "8 Rue Principale S, Sutton, QC J0E 2K0",
    telephone: "+1(450)538-0139",
    siteWeb: "lechappeebellesutton.ca"
  },
   {
    nom: "L'Art des Possibles",
    ville: "Sutton",
    adresse: "4 Rue du Dépôt, Sutton, QC J0E 2K0",
    telephone: "+1(450)538-2002",
    siteWeb: "lartdespossibles.ca"
  },
  {
    nom: "Vrac et Compagnie",
    ville: "Sutton",
    adresse: "À compléter",
    telephone: "",
    siteWeb: ""
  },
  {
    nom: "Verveine",
    ville: "Cowansville",
    adresse: "À compléter",
    telephone: "",
    siteWeb: ""
  },
  {
    nom: "L'Épicerie Futée",
    ville: "Bromont",
    adresse: "À compléter",
    telephone: "",
    siteWeb: ""
  },
  {
    nom: "Virgin Hill Café",
    ville: "Foster (Lac-Brome)",
    adresse: "À compléter",
    telephone: "",
    siteWeb: ""
  }
];
