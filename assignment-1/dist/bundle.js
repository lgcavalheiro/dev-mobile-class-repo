"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;

var _readline = _interopRequireDefault(require("readline"));

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
  var rl = _readline["default"].createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("close", function () {
    console.log("\nExiting application...");
    process.exit(0);
  });
  var opt = -1;
  rl.question('Pick an option: ', function (option) {
    opt = option;
    console.log('OPT: ', opt);
    rl.close();
  });
}

main();
