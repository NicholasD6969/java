const readline = require('readline-sync');
const idade = parseInt(readline.question('Digite sua idade: '));

if (idade < 16) {
    console.log("Não vota.");
} else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log('Voto opcional.');  
} else {
    console.log('Voto obrigatorio');
}