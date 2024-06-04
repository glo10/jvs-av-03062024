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
})

function loader (app) {
  // créer une div avec la class loader
  const div = document.createElement('div')
  div.classList.add('loader')
  // ajouter la div dans mon HTML à l'intérieur de la div qui a l'ID app
  app.append(div)
}

function renderH1 (app, divLoader, content) { // async avec setTimeout
  // Créer un H1 et l'ajouter dans la div avec l'ID app
  const h1 = document.createElement('h1')
  h1.textContent = content
  setTimeout(() => { // asynchrone même si on ne renseigne pas la durée en 2eme paramètre
    app.append(h1)
    divLoader.remove()
  })
}

function promiseCheckTagHtmlExist (tagHTML) {
  return new Promise((resolve, reject) => {
    let { id, className, tagName } = tagHTML
    tagName = tagName !== '' ? tagName : 'NC'
    id = id !== '' ? id : 'NC'
    className = className !== '' ? className : 'NC'
    if (tagHTML) { // si l'élément existe dans le DOM
      resolve(`HTML : ${tagName}/ID : ${id}/class : ${className}`)
    } else {
      reject(new Error('l\'élément HTML n\'existe pas'))
    }
  })
}
