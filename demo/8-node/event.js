import { EventEmitter } from 'events'

const evt = new EventEmitter()
const anotherEvt = new EventEmitter()

// Ecouter un événement
evt.on('app_event', (data) => {
  console.log('événement app_event : ', data)
  const name = 'Bonjour ' + data.name
  const randomNb = Math.ceil(Math.random() * 100)
  // emission avec 2 paramètres (pas de limite, séparation des données par des virgules)
  anotherEvt.emit('app_another_event', { name, randomNb, isOk: true, age: 30 })
})
anotherEvt.on('app_another_event', (name, number) => {
  console.log('event app_another_event : ', name, number)
})

// Emission
evt.emit('app_event', { name: 'Glodie' })
