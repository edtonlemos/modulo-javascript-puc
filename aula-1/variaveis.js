let nome = "Edton";
console.log(1, nome);
var nome3 = "Dentro";
const PI = 3.14159265358979323846;
console.log(1, PI);

{
  let nome2 = "Lemos";
  console.log(2, nome2);
  console.log(2, nome3);
}

//console.log(3, nome2);
console.log(3, nome3);
// ReferenceError: nome2 is not defined
//faça uma função em js que receba 3 valores e multiplique um pelo outro
{
  function multiplicar(a, b, c) {
    nome = a + b;
    return a * b * c;
  }
  console.log(multiplicar(2, 3, 4));
  console.log(nome);
}
