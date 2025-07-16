//chamada da função e pode ser chamada antes de ser declarada
mensagem(); //chama a função
mensagem2('Edton');
let total = soma('2', 3); //chama a função soma
console.log(total); //imprime o resultado da função soma
console.log(soma2(2)); //imprime o resultado da função soma2

function mensagem(){
    console.log("Olá, Mundo!");
}

//não existe tipo no parameetro
function mensagem2(nome){
    console.log('Olá ' + nome + '!');
    console.log(`Olá ${nome} com template script!`); //usa crase para template string
}

function soma(a, b){
    return +a + +b;
}

//função com valores padrão
//se não passar o valor, assume 0
function soma2(a = 0, b = 0){
    return +a + +b;
}

function soma3(){
    return arguments[0] + arguments[1]; // arguments é um objeto que contém os argumentos passados para a função
}

let nome = 'João';
function saudacao(nome = 'Visitante'){
    return `Olá, ${nome}!`;
}       

console.log(saudacao()); //a variavel mais interna é a que prevalece

//expressões de função
const anonima = function (){
    console.log('Função anônima'); //função anônima
};
anonima();

//função de callback
//uma função que é passada como parâmetro para outra função
let execute = function(funcao){
    funcao();
}

let somaFunc = function(){
    console.log('Função passada como parâmetro');
}

execute(somaFunc); //chama a função execute passando a função soma como parâmetro


//TIPOS DE FUNÇÃO
//FUNCAO NORMAL
function normal(){
    console.log('Função normal');
}
//EXPRESSAO DE FUNÇÃO
const expressao = function(){
    console.log('Expressão de função');
}
//ARROW FUNCTION FUNÇÃO DE SETA
const arrow = () => {
    console.log('Arrow function');
}
