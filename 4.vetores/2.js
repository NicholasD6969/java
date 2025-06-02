const usuarios = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 }
];

console.log('Exibindo todos elementos dentro do vetor. ');
usuarios.forEach(usuario => {
    console.log(`${usuario.nome}, ${usuario.idade} anos`);
});


console.log('Filtrando usuarios.')
console.log('Apenas usuarios até 30 anos de idade.');
const menorQueTrintaAnos = usuarios.filter(usuario => usuario.idade < 30);
menorQueTrintaAnos.forEach(usuario => console.log(`${usuario.nome}, tem ${usuario.idade} anos`));

console.log('\nExibindo apenas o nome de usuários. ')
const nomes = usuarios.map(usuario => usuario.nome);
nomes.forEach( nome => {
    console.log('Nome: ', nome);
})

console.log('\nExibindo o nome dos usuários com numeração')
nomes.forEach((nome, index) => {
    console.log(`${++index}: ${nome}`);
})

console.log('Encontar um usuário. ')
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Maria');
console.log(`Nome: ${usuarioEncontrado.nome} idade: ${usuarioEncontrado.idade}`);

console.log('\nMostra a soma de todas as idade. ')
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0);
console.log(`Soma das idades: ${somaIdades}`);