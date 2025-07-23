function ola() {
  console.log("Olá Mundo em JavaScript.");

  let nome = prompt("Qual é o seu nome?");
  if (nome) {
    alert(`Olá, ${nome}! Bem-vindo ao JavaScript.`);
  } else {
    alert("Olá, visitante! Bem-vindo ao JavaScript.");
  }
}

//janelas: prompt, alert, confirm 


function entrou(){
    document.body.style.background = "red";
    //alert("TIRA QUE EU VOU CAGAR");
}

function saiu(){
    document.body.style.background = ""; // volta ao padrão
    //alert("ain, obrigado!");
}

window.onload = () => { 
    bt.addEventListener("click", ola);
        const btOutro = document.getElementById("bt");

    btOutro.addEventListener("mouseenter", () => {
        document.body.style.background = "#222"; // escurece fundo
        btOutro.style.boxShadow = "0 0 32px 8px #4fc3f7";
        btOutro.style.zIndex = "10";
    });

    btOutro.addEventListener("mouseleave", () => {
        document.body.style.background = ""; // volta ao normal
        btOutro.style.boxShadow = "";
        btOutro.style.zIndex = "";
    });

    let cliqueVar = document.getElementById("clique");
    cliqueVar.innerHTML = "Clique aqui para ver o alerta";
}