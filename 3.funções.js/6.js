const = readline = require('readline-sync');
const idade = parseint(readline.question('Digite sua idade: '));

if (idade < 16) {
    console.console("Não vota.")
} else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.console.log('Voto opcional.');  
} else {
    console.log('Voto obrigatorio')
}