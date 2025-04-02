//CONTROLE DE FLUXO DE EXECUÇÃO

let acessoPermitido;
let idade = 21;

if (idade >= 18) {
  acessoPermitido = true;
} else {
  acessoPermitido = false;
}
console.log(1, acessoPermitido); //true

//OUTRA MANEIRA
acessoPermitido = idade >= 18 ? true : false;
console.log(2, acessoPermitido); //true

//if-else
if (idade >= 18) {
  console.log(3, "Acesso permitido"); //Acesso permitido
} else if (idade >= 14) {
  console.log(4, "Acesso restrito"); //Acesso restrito
} else {
  console.log(5, "Acesso negado"); //Acesso negado
}

//switch-case e for
let cont = 0;

for (let i = 0; i < 10; i++) {
  cont++;
  switch (cont) {
    case 1:
      console.log(6, "Primeiro"); //Primeiro
      break;
    case 2:
      console.log(7, "Segundo"); //Segundo
      break;
    case 3:
      console.log(8, "Terceiro"); //Terceiro
      break;
    default:
      console.log(9, "Outro número"); //Outro número
  }
}

//while e do-while
let j = 0;
while (j < 5) {
  console.log(10, j); //0 1 2 3 4
  j++;
}
