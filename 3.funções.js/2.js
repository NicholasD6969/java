const frutas = ['banana', 'maçã', 'laranja', 'uva'];

console.log('Exibindo todos elementos dentro do vetor. ')
console.log(frutas);

console.log('Exibindo o primeiro elemento do vetor. ')
console.log(frutas[0]);
console.log(frutas[2]);

console.log('\nAdicionnando um novo elemento ao vetor. ')
frutas.push('abacaxi')
console.log(frutas)

console.log('\nRemovendo o último elemento do vetor. ')
frutas.pop()
console.log(frutas)

console.log('\nRemovendo o primeiro elemento do vetor. ')
frutas.shift()
console.log(frutas);  

console.log('\nPecorrendo o vetor. ')
frutas.forEach((fruta, index) => {
    console.log(`${++index}: ${fruta}`);
});