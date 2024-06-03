// sélectionner l'input de mon formulaire HTML
// Pour manipuler du DOM, on va utiliser l'objet document et ses méthodes associées
// avec le querySelector() on utilise les sélecteurs CSS et il récupère qu'UN SEUL élément (le premier qui match)
const inputText = document.querySelector('input[type="text"]') // avec JQuery $('input[type="text"]')
console.log('input de type text', inputText)
// avec querySelectorAll() avec un sélecteur CSS, on recup un tableau d'éléments qui match avec le sélecteur
const inputs = document.querySelectorAll('input')
console.log('tous les inputs', inputs)

// Greffer un écouteur d'événement (ou se mettre à l'écoute d'un événement) avec la méthode addEventListener sur l'élement
inputText.addEventListener('keypress', function (event) {
  // recup element p avec id paragraph
  // attention avec arrow function (event) => {} this contient l'objet global window
  // avec la notation classique d'une fonction function(event) {} this contient l'élément qui a déclenché l'événement
  console.log('this', this, 'event', event)
  const p = document.querySelector('#paragraph')
  const letter = event.key
  // écrir les caractères tapés dans le paragraphe
  p.innerHTML += letter // += prendre ce qui avait avant et ajouter le contenu après le =
  // changer la couleur de la bordure de mon input par l'intermédiaire de la propriété style puis d'une propriété CSS
  this.style.background = 'red'
})
