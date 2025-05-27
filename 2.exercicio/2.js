const readline = require('readline-sync')
do {
    let nota = readline.questionFloat('Digite uma nota: ')
    } while(nota >=0 || nota > 10)

    console.log('fim')