import Auth from '../base/auth.js'

export default class SignIn extends Auth {
  constructor () {
    super()
    this.inputs = [
      {
        el: 'input[type=email]',
        msg: 'Saisissez votre adresse e-mail !'
      },
      {
        el: 'input[type=password]',
        msg: 'Saisissez votre mot de passe !'
      }
    ]
  }
}
