# Correction exercice 5

## Modifications par rapport au code source de l'exercice 5

- Ajout de classe [Store](./src/js/classes/base/store.js), classe de base qui possèdent les méthodes à la manipulation du stockage local (insertion, suppression, récupération)
- Ajout des classes [CookieStore](./src/js/classes/storage/cookie-store.js) spécifique au traitement des cookies
- Ajout des classes [LocalStore](./src/js/classes/storage/local-store.js) spécifique au localStorage et sessionStorage
- Factorisation de la classe [Auth](./src/js/classes/base/auth.js), modification de la propriété inputs, remplacé par un sélecteur qui sélectionne tous les éléments d'un formulaire sauf le bouton de soumission
- Ajout des propriétés data-msg sur chaque élément HTML