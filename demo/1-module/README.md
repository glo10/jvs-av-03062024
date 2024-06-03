# Module

- module = un fichier JS qu'on peut partager (installer, exporter et importer)
- Pour installer les modules on a besoin de npm (installé lors de l'installation de NODE)
- npm est le gestionnaire de package par defaut de Node
- Il existe un autre gestionnaire de package, Yarn développé par Facebook

PS : ne pas mélanger npm et yarn dans un projet, soit l'un soit l'autre

## Initialisation du projet

- `npm init`, ensuite il faut répondre aux questions
- `npm init -y`, sans répondre aux questions
Après l'initialisation, il y a la création du dossier node_modules, package.json et package-lock.json.

## Dossier Node modules

- Contient les dépendances de nos packages (installés)
- A ne pas versionner avec git par exemple car c'est un dossier très lourd et surtout il est regénéré à partir de la commande `npm install` et des fichiers package.json et package-lock.json

## Installation package

- `npm install nomDuPackage` : automatiquement dépendance pour tous les environnements (dev, prod et test)
- `npm install --save-dev nomDuPackage` : uniquement pour l'environnement des développement par exemples les packages typescript, vitest, jest etc. qui servent uniquement durant la phase de développement et qui ne seront pas utiliser en production. (typescript n'est pas compris par le navigateur, vous devez le compiler en js)

## Désinstallation package

- `npm uninstall nomDuPackage` : il va supprimer la ligne dédiée au package dans package.json et également dans package-lock.json, ainsi que les dossiers et fichiers associées dans le dossier node_modules
