import SignIn from './classes/authentification/sign-in.js'
import SignUp from './classes/authentification/sign-up.js'
import Localization from './classes/localization/localization.js'

window.addEventListener('load', () => {
  let auth = null
  const { href } = location
  if (href.endsWith('index.html') || href.endsWith('/')) {
    auth = new SignIn()
  } else if (href.endsWith('sign-up.html') || href.endsWith('/')) {
    const localization = new Localization('../data/location.json')
    auth = new SignUp(localization)
  } else {
    throw new Error('404 not found')
  }
  auth.events()
})
