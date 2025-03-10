//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value;
  console.log(nome);
  if (nome == "") {
    alert("Nome em branco, favor preencher um nome valido");
  } else {
    limparCampo();
  }
}

function limparCampo() {
  nome = document.querySelector("input");
  nome.value = "";
}

adicionarAmigo();
