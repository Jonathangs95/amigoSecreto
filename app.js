//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value.trim();

  if (nome === "") {
    alert("Digite um nome válido");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Nome em uso");
  } else {
    amigos.push(nome);
    limparCampo();
    atualizarLista(); // Atualiza a lista no HTML
  }
}

function limparCampo() {
  let nome = document.querySelector("input");
  nome.value = "";
  nome.focus();
}

adicionarAmigo();

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (!amigos || amigos.length === 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  let resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = ""; // Limpa antes de adicionar

  let item = document.createElement("li");
  item.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
  resultadoLista.appendChild(item);
}
