import Auth from '../base/auth.js'

export default class SignIn extends Auth {
  constructor (store) {
    super()
    this.store = store
  }

  events () {
    super.events()
  }

  onSubmit () {
    super.onSubmit()
    document.querySelector(this.submit).addEventListener('click', () => {
      this.store.save('email', document.querySelector('[name=email]').value)
    })
  }
}
