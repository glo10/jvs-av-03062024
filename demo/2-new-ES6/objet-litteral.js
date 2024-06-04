const glodie = {
  name: 'Glodie',
  age: 32,
  // () => {} ie function() {} arrow function contexte globale avec this, et function() contexte avec l'objet en cours
  show: () => {
    console.log('informations', this.name, this.age)
  }
}
