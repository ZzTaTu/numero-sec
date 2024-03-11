let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'O Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 0 a 100.');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroEscolhido) [
        listaNumeroSorteado = []
    ]

    if (listaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        console.log((listaNumeroSorteado));
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Você acertou o Número Secreto!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor.');
            } else {
                exibirTextoNaTela('p', 'O número secreto é maior.');
            }
            tentativas++;
            limparCampo();
        }
}

