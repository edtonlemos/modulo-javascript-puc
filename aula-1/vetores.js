//vetor
let frutas = ['maçã', 'banana', 'laranja', 'uva'];

console.log(frutas);
console.log(frutas[0]); // Acessando o primeiro elemento do vetor
console.log(frutas[9]); // Acessando um índice que não existe, retornará undefined

frutas.length--; // Remove o último elemento do vetor
console.log(frutas);

let frutas2 = [];
let frutas3 = new Array(5); // Cria um vetor com 5 posições vazias

frutas.sort(); // Ordena o vetor em ordem alfabética
console.log(frutas);

frutas.push('abacaxi'); // Adiciona um elemento ao final do vetor
console.log(frutas);    

frutas.pop(); // Remove o último elemento do vetor
console.log(frutas);
frutas.unshift('kiwi'); // Adiciona um elemento no início do vetor
console.log(frutas);
frutas.shift(); // Remove o primeiro elemento do vetor
console.log(frutas);

console.log(frutas.join(' - ')); // Converte o vetor em uma string, separando os elementos por ' - '

console.log(typeof frutas); // Verifica o tipo da variável frutas

let matriz = [
    [1, 2, 3],
    [4, 5, 6],  
    [7, 8, 9]
];

console.log(matriz);
console.log(matriz[0][0]); // Acessando o primeiro elemento da primeira linha