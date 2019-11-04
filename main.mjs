import pb from './problem12'

const before = new Date()
pb()
const after = new Date()
console.log(`Le programme s'est exécuté en ${after - before} ms`)