import { writeFile } from 'node:fs'
/**
 * Attention au chémin, il dépend d'ou le programme est exécuté
 * Ici le programme sont lancés depuis le dossier 8-node via la commande node 4-fs/writefile.js
 * Donc la racine est le dossier 8-node
 * nous verrons plus tard la résolution des paths avec le package url
*/
console.log('start')
writeFile('4-fs/files/test.md', '## README', (error) => {
  if (!error) console.log('created')
  else console.error('error', error)
})
console.log('end')
