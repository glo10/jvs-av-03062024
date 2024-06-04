# Correction exercice 3

## Modifications par rapport au code source de l'exercice 2

- Création d'une classe "abstraite" [Auth](./src/js/classes/auth.js) regroupant des méthodes et propriétés communes aux classes dérivés [SignIn](./src/js/classes/sign-in.js) et [SignUp](./src/js/classes/sign-up.js). PS : il n'y a pas vraiment de notion de classe abstraite en VanillaJS, c'est possible de s'en rapprocher en déclenchant une exception dans le constructeur plus quelques manipulations supplémentaires, idéalement, utilisez TypeScript pour pouvoir implémenter les classes abstraites
- Externalisation du traitement de la soumission dans une fonction spécifique *checkValue* dans Auth
- Renommage fonction onSubmit en onSubmitCheckEmptyInputs
- index.js gère les événements sur le formulaire de connexion et d'inscription