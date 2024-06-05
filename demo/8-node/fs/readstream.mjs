import { createReadStream } from 'node:fs'
import { createServer } from 'node:http'
const PORT = 4000
createServer((req, res) => {
  const reader = createReadStream('files/sign-in.html', {
    flag: 'a+',
    encoding: 'UTF-8'
  })

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  reader.pipe(res)

  reader.on('error', (err) => {
    console.error('error', err)
    res.end('Internal Server Error')
  })

  reader.on('end', () => {
    console.log('Fin')
  })
}).listen(PORT, () => {
  console.log(`App on http://localhost:${PORT}`)
})
