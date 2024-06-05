export default class SignIn extends HTMLElement {
  constructor () {
    super()
    this.inputs = 'form input:not([type="submit"]), form select'
    this.submit = '[type=submit]'
    this.innerHTML = `
    <h1>Connexion</h1>
    <form autocomplete="off">
      <div class="my-3">
        <p class="form-help"></p>
        <input type="email" class="form-control" name="email" placeholder="email" value="john3@doe.com">
      </div>
      <div class="my-3">
        <p class="form-help"></p>
        <input type="password" class="form-control" name="password" placeholder="mot de passe" value="johndoe">
      </div>
      <div class="my-3 align-right">
        <input type="submit" value="Valider" class="btn btn-success me-5" data-endpoint="signin">
        <a class="btn btn-info" href="sign-up.html">Inscription</a>
      </div>
    </form>
    `
  }

  connectedCallback () {
    console.log('dom')
    this.onToggleHelpMessage()
    this.onSubmit()
  }

  onToggleHelpMessage () {
    const inputs = document.querySelectorAll(this.inputs)
    for (let i = 0; i < inputs.length; i++) {
      const inputEl = inputs[i]
      if (inputEl) {
        ['focus', 'blur'].forEach(event => {
          inputEl.addEventListener(event, (e) => {
            const msg = event === 'focus' ? inputEl.getAttribute('data-message') : ''
            e.target.parentElement.firstElementChild.innerHTML = msg
          })
        })
      }
    }
  }

  onSubmit () {
    const el = document.querySelector(this.submit)
    el.addEventListener('click', (e) => this.checkValues(e))
  }

  checkValues (e) {
    e.preventDefault()
    const inputs = document.querySelectorAll(this.inputs)
    for (let i = 0; i < inputs.length; i++) {
      var alertUser = e.target.parentElement.querySelector('.alert.alert-danger')
      var isEmpty = false
      const inputEl = inputs[i]
      const msg = inputs[i].getAttribute('data-message')
      if (alertUser === null) {
        const p = document.createElement('p')
        p.classList.add('alert', 'alert-danger', 'my-3', 'text-center')
        p.textContent = msg
        e.target.insertAdjacentHTML('beforebegin', p.outerHTML)
      } else {
        e.target.parentElement.querySelector('p.alert-danger').innerHTML = msg
      }
      if (inputEl.value.length === 0 || inputEl.value === '-1') {
        isEmpty = true
        break
      }
    }
    if (!isEmpty && alertUser) {
      alertUser.remove()
    }
  }
}

customElements.define('sign-in', SignIn)
