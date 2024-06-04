import Auth from "./auth.js"

export default class SignUp extends Auth {
  constructor () {
    super()
    this.inputs = [
      {
        selector: '[name=lastname]',
        msg: 'Saisissez votre nom !'
      },
      {
        selector: '[name=firstname]',
        msg: 'Saisissez votre prénom !'
      },
      {
        selector: 'input[type=email]',
        msg: 'Saisissez votre adresse e-mail !'
      },
      {
        selector: '[name=password]',
        msg: 'Saisissez votre mot de passe !'
      },
      {
        selector: '[name=confirm]',
        msg: 'Confirmez votre mot de passe !'
      },
      {
        selector: '[name=age]',
        msg: 'Saisissez votre age !'
      },
      {
        selector: '[name=country]',
        msg: 'Choisissez un pays !'
      },
      {
        selector: '[name=city]',
        msg: 'Choisissez une ville !'
      }
    ]
  }
}
