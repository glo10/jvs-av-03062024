import SignIn from "./classes/authentification/sign-in.js"
import SignUp from "./classes/authentification/sign-up.js"

window.addEventListener('load', () => {
  let auth = null
  const {href} = location
  if(href.endsWith('index.html') || href.endsWith('/')) {
    auth = new SignIn()
  } else if(location.href.endsWith('sign-up.html') || location.href.endsWith('/')) {
    auth = new SignUp()
  } else {
    throw new Error('404 not found')
  }
  auth.events()
})
