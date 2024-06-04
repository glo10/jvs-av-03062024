import {
  loader,
  promiseCheckTagHtmlExist,
  renderH1,
  fetchText,
  fetchJSON
} from './functions.js'

window.addEventListener('load', () => { // async avec callback anonyme (c'est à l'événement du chargement de la page)
  const app = document.querySelector('#app')
  // const divLoader = document.querySelector('.loader') // null ici n'existe pas encore
  loader(app)
  const divLoader = document.querySelector('.loader') // existe ici parce qu'il est crée depuis la fonction loader()
  const promiseDivApp = promiseCheckTagHtmlExist(app) // contient une promesse
  const promiseDivLoader = promiseCheckTagHtmlExist(divLoader) // contient une promesse

  Promise.all([promiseDivApp, promiseDivLoader]) // Exécute les 2 promesses
    .then(values => console.log('res promise all', values)) // uniquement si les 2 promesses sont résolues
    .catch(error => console.error('error promise all', error)) // si au moins l'un des 2 echouent (même si l'autre retourne le bon résultat)
  renderH1(app, divLoader, 'Asynchrone') // ajout du H1 de manière asynchrone avec setTimeout
  fetchText('./sign-in.html', app)
  fetchJSON('https://jsonplaceholder.typicode.com/photos', app, 100, 120)
})
