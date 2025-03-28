console.log('Tipos de Dados em JavaScript');
let v;
v = 'Edton';
console.log(typeof v, v);
v = 23; 
console.log(typeof v, v);
v = 3.564521;
console.log(typeof v, v);
v = 3 * '3';
console.log(typeof v, v);
v = Infinity;
console.log(typeof v, v);
v = 9081278183717389612876387126378612n; //bigint
console.log(typeof v, v);
let eu = 'Edton Lemos';
let mensagem = `Olá, 
                ${eu}, tudo bem?`; //template string
console.log(mensagem, typeof mensagem);
v = true;
console.log(typeof v, v);
v = null;
console.log(typeof v, v); //object
v = undefined;
console.log(typeof v, v);   //undefined