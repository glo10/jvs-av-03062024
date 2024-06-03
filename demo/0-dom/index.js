// sélectionner l'input de mon formulaire HTML
// Pour manipuler du DOM, on va utiliser l'objet document et ses méthodes associées
// avec le querySelector() on utilise les sélecteurs CSS et il récupère qu'UN SEUL élément (le premier qui match)
const inputText = document.querySelector('input[type="text"]') // avec JQuery $('input[type="text"]')
console.log('input de type text', inputText)
// avec querySelectorAll() avec un sélecteur CSS, on recup un tableau d'éléments qui match avec le sélecteur
const inputs = document.querySelectorAll('input')
console.log('tous les inputs', inputs)
console.log('form', inputText.parentElement)
console.log('section', inputText.parentElement.parentElement)

// Greffer un écouteur d'événement (ou se mettre à l'écoute d'un événement) avec la méthode addEventListener sur l'élement
inputText.addEventListener('keypress', function (event) {
  // stopper la programmation
  event.stopPropagation()
  // recup element p avec id paragraph
  // attention avec arrow function (event) => {} this contient l'objet global window
  // avec la notation classique d'une fonction function(event) {} this contient l'élément qui a déclenché l'événement
  console.log('this', this, 'target', event.target)
  let p = document.querySelector('#paragraph')
  // Création du p s'il n'existe pas déjà dans le DOM
  if (p === null) {
    // il est crée mais pas encore ajouté au DOM
    p = document.createElement('p')
    p.id = 'paragraph'
    /**
    * pour rajouter un attribut de manière gen on passera par la méthode setAttribute
    * HTML p.setAttribute('id', 'paragraph')
    */
  }
  const letter = event.key
  // écrire les caractères tapés dans le paragraphe
  p.innerHTML += letter // += prendre ce qui avait avant et ajouter le contenu après le =
  // Ajouter le p au DOM
  inputText.parentElement.prepend(p)
  // changer la couleur de la bordure de mon input par l'intermédiaire de la propriété style puis d'une propriété CSS
  this.style.background = 'red'
})

// Soumission d'un formulaire
// Pour annuler le comportement par défaut d'un élément on va utiliser la fonction preventDefault()
document
  .querySelector('input[type=submit]')
  .addEventListener('click', notSubmit)

function notSubmit (event) {
  event.preventDefault() // annule le comportement par défaut d'un élément
  console.info('soumission du formulaire')
}
