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
    siteWeb: "http://www.lechappeebellesutton.ca"
  },
   {
    nom: "L'Art des Possibles",
    ville: "Sutton",
    adresse: "4 Rue du Dépôt, Sutton, QC J0E 2K0",
    telephone: "+1(450)538-2002",
    siteWeb: "http://www.lartdespossibles.ca"
  },
  {
    nom: "Vrac et Compagnie",
    ville: "Sutton",
    adresse: "1057 Chem. de la Vallée, Sutton, QC J0E 2K0",
    telephone: "+1(450)525-5380",
    siteWeb: "http://www.vracetcompagnie.ca/"
  },
  {
    nom: "Verveine & Cie",
    ville: "Cowansville",
    adresse: "101 Rue Albert, Cowansville, QC J2K 2W4",
    telephone: "+1(450)266-4242",
    siteWeb: "http://www.verveineetcie.com/"
  },
  {
    nom: "L'Épicerie Futée",
    ville: "Bromont",
    adresse: "35 Rue John-Savage Local 105, Bromont, Quebec J2L 0A5",
    telephone: "+1(450)534-3197",
    siteWeb: "https://www.epiceriefutee.com/"
  }
  // ,
 // {
 //   nom: "Brûlerie Virgin Hill Coffee",
 //   ville: "Foster (Lac-Brome)",
 //   adresse: "770 Chem. Lakeside, Foster, QC J0E 1R0",
 //   telephone: "+1(800)516-8422",
 //   siteWeb: "https://www.virginhillcoffee.com"
 // }
];
