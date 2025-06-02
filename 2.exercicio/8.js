const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
    const num = parseInt(numero, 10);

    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
    } else if (num > 0) {
        console.log('Positivo.');
    } else if (num < 0) {
        console.log('Negativo.');
    } else {
        console.log('Zero.');
    }
    rl.close();
});
