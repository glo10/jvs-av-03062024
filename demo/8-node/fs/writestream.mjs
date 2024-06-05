import { createWriteStream } from 'node:fs'
import { get } from 'node:https'

const writePhotoStream = createWriteStream('4-fs/files/photos.json')
const request = get('https://raw.githubusercontent.com/glo10/php-dam-va-02052024/main/data/franceinfo.json', (res) => {
  if (res.statusCode !== 200) {
    request.emit('error', 'not found')
  }
  res.pipe(writePhotoStream)
  res.on('data', (chunk) => {
    console.log('paquet reçu', chunk.toString())
  })

  res.on('close', () => {
    console.log('copied')
  })
})

request.on('error', (error) => {
  console.log('failed', error.message)
})
