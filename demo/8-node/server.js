import { createServer } from 'node:http'

const PORT = 4000
const app = createServer((req, res) => {
  // Traitement de la réquête et réponse du serveur ici
  // infos d'en-têtes HTTP
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  })
  res.end('<h1>Hello</h1>' + req.url)
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
