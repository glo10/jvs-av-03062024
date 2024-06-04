import SignIn from './classes/sign-in.js'
import SignUp from './classes/sign-up.js'

window.addEventListener('load', () => {
  let auth = null
  // Destructuration de l'objet location pour recup uniquement l'URL
  const { href } = location
  if (href.endsWith('index.html') || href.endsWith('/')) { // page d'accueil (contenu formulaire de connexion)
    auth = new SignIn()
  } else if (href.endsWith('sign-up.html') || href.endsWith('/')) { // page d'inscription
    auth = new SignUp()
  } else {
    throw new Error('404 not found')
  }
  auth.events()
})
