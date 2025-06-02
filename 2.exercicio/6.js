const readline = require('readline-sync')

const a = readline.questionInt('Digite o valor de A: ')
const b = readline.questionInt('Digite o valor de B: ')
const c = readline.questionInt('Digite o valor de C: ')

const soma = a + b 

if (soma < c) {
    console.log('A soma de A e B é menor que C')
} else {
    console.log('A soma de A + B é maior que C')
}

console.log(`A soma de A + B é: ${soma}`)
console.log(`O valor de C é: ${c}`)
console.log(`A soma de A + B é ${soma < c ? 'menor' : 'maior'} que C`)
   