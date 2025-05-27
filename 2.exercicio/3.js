const readline = require('readline-sync')

soma = 0
let nota = 0

for (let i = 0; i < 4; i++) {
    do {
        nota = readline.questionFloat('Digite uma nota: ')
    } while (nota < 0 || nota > 10)
    soma += nota
}    
media = soma/2


console.log(`A média é: ${media}`)
FileSystem.out.print("a média é: " + media)     