const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['nome']

console.log(nome, profissao)

console.log(`O nome do indivíduo é ${nome} e a profissão do mesmo é ${profissao}`)