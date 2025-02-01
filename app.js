function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);  /*Pegando o valor do input*/
    let de = parseInt(document.getElementById("de").value);  /*Pegando o valor do input*/
    let ate = parseInt(document.getElementById("ate").value);  /*Pegando o valor do input*/

    let sorteados = [];  /*Criando um array*/
    let numeros ; 

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);  /*Chamando a funcao*/ 
        sorteados.push(numero);  /*Adicionando o numero ao array*/
    }

    if (quantidade <= 0 || de <= 0 || ate <= 0) {  /*Validando se os valores sao maiores que zero*/
        alert("Os valores devem ser maiores que zero");  /*Mostrando mensagem de erro*/
        return;  /*Retornando para a funcao*/
    }

    if (de > ate) {
        alert("O valor de 'de' deve ser menor ou igual a 'ate'");  /*Mostrando mensagem de erro*/
        return;  /*Retornando para a funcao*/
    }   

  let numero = obterNumeroAleatorio(de, ate);  /*Chamando a funcao*/
  let resultado = document.getElementById("resultado");  /*Pegando o elemento do DOM*/
  resultado.innerHTML = `<p>Números sorteados: ${sorteados}</p>`;  /*Alterando o conteudo do elemento*/
  alterarStatusBotao();
  document.getElementById("btn-sortear").disabled = true;  /*Desabilitando o botao*/
  document.getElementById("btn-reiniciar").disabled = false;  /*Habilitando o botao*/

}

function obterNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
    return numero;
}

function reiniciar() {
    document.getElementById("btn-sortear").disabled = false;  /*Habilitando o botao*/
    document.getElementById("btn-reiniciar").disabled = true;  /*Desabilitando o botao*/
    document.getElementById("resultado").innerHTML = `<p>Números sorteados: nenhum até agora</p>`;
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}   

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar"); /*Pegando o botao*/
    if (botao.classList.contains("container__botao-desabilitado")) { /*Verificando se o botao esta desabilitado*/
        botao.classList.remove("container__botao-desabilitado"); /*Removendo a classe*/
        botao.classList.add("container__botao"); /*Adicionando a classe*/
    } else {
        botao.classList.remove("container__botao");     /*Removendo a classe*/
        botao.classList.add("container__botao-desabilitado"); /*Adicionando a classe*/
    }
}



