//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Lista para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        const buttonRemover = document.createElement('button');
        buttonRemover.textContent = "Remover";
        buttonRemover.className = "button-remove";
        buttonRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(buttonRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para sortear.");
        return;
    }

    const sorteio = [...amigos];
    const resultado = [];

    amigos.forEach(amigo => {
        let sorteado;
        do {
            sorteado = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        } while (sorteado === amigo);

        resultado.push(`${amigo} tirou ${sorteado}`);
    });

    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio na tela
function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = "";

    resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaResultado.appendChild(li);
    });
}


// Função para limpar os campos de entrada e os resultados
function limparCampos() {
    document.getElementById('amigo').value = "";
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    amigos.length = 0;
}