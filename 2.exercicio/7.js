const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número: ', (numero) => {
    const num = parseInt(numero, 10);

    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
    } else if (num % 2 === 0) {
        console.log('O número é par.');
    } else {
        console.log('O número é ímpar.');
    }

    readline.close();
});