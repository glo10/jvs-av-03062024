export function loader (app) {
  // créer une div avec la class loader
  const div = document.createElement('div')
  div.classList.add('loader')
  // ajouter la div dans mon HTML à l'intérieur de la div qui a l'ID app
  app.append(div)
}

export function renderH1 (app, divLoader, content) { // async avec setTimeout
  // Créer un H1 et l'ajouter dans la div avec l'ID app
  const h1 = document.createElement('h1')
  h1.textContent = content
  setTimeout(() => { // asynchrone même si on ne renseigne pas la durée en 2eme paramètre
    app.append(h1)
    divLoader.remove()
  })
}

export function promiseCheckTagHtmlExist (tagHTML) {
  return new Promise((resolve, reject) => {
    let { id, className, tagName } = tagHTML
    tagName = tagName !== '' ? tagName : 'NC'
    id = id !== '' ? id : 'NC'
    className = className !== '' ? className : 'NC'
    if (tagHTML) { // si l'élément existe dans le DOM
      resolve({
        id, // ie id : id
        html: tagName,
        class: className
      })
    } else {
      reject(new Error('l\'élément HTML n\'existe pas'))
    }
  })
}

export function fetchJSON (url, app) {
  fetch(url)
    /**
     * on reçoit une chaine de caractère (texte) au format JSON
     * Qu'on ne peut pas manipuler via le JS
     * Il faut le transformer en objet JS grâce à la méthode .json() sur le résultat
     */
    .then(res => res.json())
    .then(photos => {
      for (let i = 0; i < 10; i++) {
        const img = document.createElement('img')
        img.src = photos[i].thumbnailUrl
        img.title = photos[i].title
        app.append(img)
      }
    })
    .catch(error => console.error('error fetch', error))
}

export function fetchText (url, app) {
  fetch(url)
    .then(res => res.text()) // transforme le résultat en texte pour pouvoir l'exploiter derrière
    .then(pageHTML => {
      app.innerHTML += pageHTML
    })
    .catch(error => console.error('error fetch', error))
}
