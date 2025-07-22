//não existe conceito de classe

let usuario = {
    nome: "João",
    idade: 30,
    email: "",
    ativo: true,
    exibirNome: function() {
        console.log(this.nome);
    }
};

let musica = {};
console.log(musica);
musica.titulo = "Bohemian Rhapsody";
musica.artista = "Queen";   
console.log(musica);
console.log(musica['titulo']); // Acessando propriedade usando colchetes
console.log(musica.titulo); // Acessando propriedade usando ponto

if ('titulo' in musica) { // Verifica se a propriedade 'titulo' existe
    console.log("A música tem título");
}   else {
    console.log("A música não tem título");
}

for (let propriedade in musica) { // Itera sobre as propriedades do objeto
    console.log(propriedade + ": " + musica[propriedade]);
}   

let mp3 = musica; //passagem por referência
mp3.titulo = "Another One Bites the Dust"; // Modifica o título     
console.log(musica.titulo); // Verifica a mudança no título
console.log(mp3.titulo); // Verifica a mudança no título

usuario.exibirNome(); // Chama o método do objeto usuario

function criarMusica(titulo, artista) { //funcao construtora
    // Retorna um objeto com as propriedades e métodos definidos
    return {
        titulo: titulo,
        artista: artista,
        exibirDetalhes: function() {
            console.log(`Título: ${this.titulo}, Artista: ${this.artista}`);
        }
    };
}

let minhaMusica = criarMusica("Imagine", "John Lennon");
minhaMusica.exibirDetalhes(); // Chama o método do objeto criado pela função


class User {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    exibirNome() {
        console.log(this.nome);
    }
}