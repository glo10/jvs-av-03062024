import Auth from '../base/auth.js'

export default class SignUp extends Auth {
  constructor (localization) {
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
    this.localization = localization
  }

  events () {
    super.events()
    this.onLoadCountries()
    this.onChangeCountry()
  }

  onLoadCountries () {
    const select = document.querySelector('[name=country]')
    if (select) {
      this.localization.getData()
        .then(items => {
          this.localization.fillOptions(select, items)
        })
    }
  }

  onChangeCountry () {
    const select = document.querySelector('[name=country]')
    if (select) {
      select.addEventListener('change', (e) => {
        const currentCountryName = e.target.options[e.target.selectedIndex].value
        this.localization.findCitiesFrom(currentCountryName)
          .then(items => {
            const newSelect = document.createElement('select')
            const selectCity = document.querySelector('[name=city]')
            newSelect.name = selectCity.name
            newSelect.append(selectCity.options[0])
            this.localization.fillOptions(newSelect, items)
            selectCity.replaceWith(newSelect)
          })
      })
    }
  }
}
