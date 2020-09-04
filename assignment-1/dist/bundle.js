"use strict";

var carrinho = require('./fakeDb.json')["carrinho"];

var descontoTodos = function descontoTodos() {};

var calculaTotal = function calculaTotal() {};

var buscaNomeOuPreco = function buscaNomeOuPreco() {};

var buscaItem = function buscaItem() {};

var descontoPorValorAcima = function descontoPorValorAcima() {};

var comandosLiterals = [descontoTodos, //0
calculaTotal, //1
buscaNomeOuPreco, //2
buscaItem, //3
descontoPorValorAcima //4
];

function main() {
  console.log('TEST: ', comandosLiterals);
}

main();
