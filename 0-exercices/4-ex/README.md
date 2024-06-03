# Exercice 4 : switch entre les pages connexion et inscription

1. Depuis la page d'inscription (sign-up.html), chargez les pays dans la partie du formulaire dédiée (champ de type select) en faisant un appel asynchrone vers le fichier data/countries.json et ajoutez les pays récupérées dans l'élément HTML select dédié.
2. Toujours depuis la page d'inscription, lorsqu'un pays est séléctionné, récupérez les villes de ce pays depuis le fichier data/cities en faisant un appel asynchrone et ajoutez les villes récupérées dans le select associé.
PS: certains pays ne possèdent pas de villes, exemple Andore.

<!-- 
3. Au clique sur les boutons connexion et inscription présentes dans les pages dédiées à la connexion et à l'inscription, le contenu d'une page doit être chargé à la place de l'autre. Exemple, je suis sur la page de connexion avec le formulaire dédié à la connexion, lorsque je clique sur le bouton inscription, alors je devrais avoir le formulaire d'inscription à la place du formulaire de connexion et vis-versa cf. scenarios ci-dessous.

## Scénario 1

En tant qu'utilisateur ;
Lorsque je suis sur la page d'accueil (connexion) ;
Et que je demande à m'inscrire ;
Alors, je devrais voir les champs suivants à la place du formulaire de connexion ;
- Nom
- Prénom
- Email
- Mot de passe
- Confirmer le mot de passe
- Age
- Pays
- Ville

---

## Scénario 2

En tant qu'utilisateur ;
Lorsque je suis sur la page d'inscription ;
Et que je demande à me connecter ;
Alors, je devrais voir les champs suivants à la place du formulaire d'inscription ;
- Email
- Mot de passe

-->

---

### Spécifications techniques pour les pays et les villes

- Vous pouvez récupérez les pays depuis le fichier ***src/data/countries.json*** ou depuis l'API *Country State City API* [https://countrystatecity.in/docs/api/all-countries/](https://countrystatecity.in/docs/api/all-countries/) en vous appuyant sur sa [documentation](https://countrystatecity.in/docs/).
- Idem pour les villes, fichier ***src/data/cities.json*** ou depuis l'API *Country State City* [https://countrystatecity.in/docs/api/cities-by-country/](https://countrystatecity.in/docs/api/cities-by-country/).
- Le choix du pays déclenche la récupération de toutes les villes de ce pays.
- Chaque pays et villes présentent dans les sélections doivent avoir les attributs HTML suivants correspondants aux informations récupérées :
 - value = nom du pays ou de la ville ;
 - data-latitude = coordonnée de la latitude du pays ou de la ville;
 - data-longitude = coordonnée de la longitude du pays ou de la ville;