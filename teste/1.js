const escolha = [
    {Roupa: 'Camisa Basica', Preço: 120.00},
    {Roupa: 'Chapéu', Preço: 95.00},
    {Roupa: 'Camisa UV', Preço: 185.00},
    {Roupa: 'Bermuda', Preço: 155.00},
];
console.log('Exibindo todas as roupas disponíveis');
escolha.forEach(item => {
    console.log(`${item.Roupa}, R$ ${item.Preço.toFixed(2)}`);
});

console.log('\nFiltrando roupas abaixo de R$ 150,00');
const abaixoDeCentoEQuinhentos = escolha.filter(item => item.Preço < 150);      
abaixoDeCentoEQuinhentos.forEach(item => {
    console.log(`${item.Roupa}, R$ ${item.Preço.toFixed(2)}`);
}); 