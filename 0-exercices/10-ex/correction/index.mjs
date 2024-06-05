import { EventEmitter } from 'events'
import { sum, divide, minus, multiply } from './math.mjs'
const app = new EventEmitter()

app.on('app_computed', (data) => {
  const { nb1, nb2 } = data
  console.log(sum(nb1, nb2))
  console.log(minus(nb1, nb2))
  console.log(multiply(nb1, nb2))
  console.log(divide(nb1, nb2))
})
app.emit('app_computed', {
  nb1: Math.floor(Math.random() * 100),
  nb2: Math.floor(Math.random() * 1000)
})
