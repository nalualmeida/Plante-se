var boxProdutos = document.getElementById('produtos')
var produto = document.querySelectorAll('#produtos .produto')

var slide = document.getElementById('boxes')
var caixa = document.querySelectorAll('.box')
var esquerdo = document.getElementById('botaoEsquerdo')
var direito = document.getElementById('botaoDireito')

var produtoAtual = 0
var caixaAtual = 0

esquerdo.addEventListener('click', () => {
    caixaAtual --

    if(caixaAtual < 0){
        caixaAtual = caixa.length -1
    }

    atualizarCaixa()
})

direito.addEventListener('click', () => {
    caixaAtual ++

    if(caixaAtual > caixa.length - 1){
        caixaAtual = 0
    }

    atualizarCaixa()
})

function atualizarCaixa(){
    slide.style.transform = `translateX(${-caixaAtual * 500}px)`
}

function carrosselAutomatico(){
    produtoAtual ++

    if(produtoAtual > produto.length - 1){
        produtoAtual = 0
    }

    boxProdutos.style.transform = `translateX(${-produtoAtual * boxProdutos.offsetWidth}px)`
}

setInterval(carrosselAutomatico, 4000)