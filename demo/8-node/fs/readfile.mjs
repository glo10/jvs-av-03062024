import { readFileSync, readFile } from 'node:fs'
const PATH = '4-fs/files/sign-in.html'
const ENC = { encoding: 'utf8' }
console.log('start async')
readFile(PATH, ENC, (error, content) => {
  if (!error) {
    console.log('content async ', content)
  } else {
    console.log('error', error)
  }
})
console.log('end async')
console.log('start sync')
const data = readFileSync(PATH, ENC)
console.log('content sync : ', data)
console.log('end sync')
