"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;
exports.comandosLiterals = void 0;

var _readline = _interopRequireDefault(require("readline"));

var carrinho = require('./fakeDb.json')["carrinho"];

var impremeCarrinho = function impremeCarrinho() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : carrinho;
  obj.forEach(function (item) {
    console.log("Nome: ".concat(item.nome, " | Preco: ").concat(item.preco));
  });
};

var descontoTodos = function descontoTodos() {
  rl.question('Defina desconto: ', function (desconto) {
    if (Number.isInteger(Number(desconto))) desconto = desconto / 100;
    carrinho.forEach(function (item) {
      item.preco = Number((item.preco - item.preco * desconto).toFixed(2));
    });
    impremeCarrinho();
    promptContinue();
  });
};

var calculaTotal = function calculaTotal() {
  console.log('Total: ', carrinho.map(function (item) {
    return item.preco;
  }).reduce(function (curr, next) {
    return curr + next;
  }));
};

var buscaNomeOuPreco = function buscaNomeOuPreco() {
  rl.question('Defina termo de busca: ', function (termo) {
    termo = termo.toLowerCase();
    var resultado = carrinho.filter(function (item) {
      return item.nome.toLowerCase().includes(termo) || item.preco == termo;
    });
    impremeCarrinho(resultado);
    promptContinue();
  });
};

var buscaItem = function buscaItem() {
  rl.question('Defina termo de busca: ', function (termo) {
    termo = termo.toLowerCase();
    var resultado = carrinho.find(function (item) {
      return item.nome.toLowerCase().includes(termo);
    });
    console.log(resultado);
    promptContinue();
  });
};

var descontoPorValorAcima = function descontoPorValorAcima() {
  rl.question('Defina valor de filtragem: ', function (termo) {
    var resultado = carrinho.filter(function (item) {
      return item.preco > termo;
    });
    rl.question('Defina desconto: ', function (desconto) {
      if (Number.isInteger(Number(desconto))) desconto = desconto / 100;
      resultado.forEach(function (item) {
        item.preco = Number((item.preco - item.preco * desconto).toFixed(2));
      });
      impremeCarrinho(resultado);
      promptContinue();
    });
    promptContinue();
  });
};

var comandosLiterals = [descontoTodos, //0
calculaTotal, //1
buscaNomeOuPreco, //2
buscaItem, //3
descontoPorValorAcima, //4
impremeCarrinho //5
];
exports.comandosLiterals = comandosLiterals;

var promptUser = function promptUser() {
  rl.question('Pick an option: ', function (option) {
    try {
      comandosLiterals[option]();
    } catch (e) {
      console.log('Option is not valid!');
    } finally {
      promptContinue();
    }
  });
};

var promptContinue = function promptContinue() {
  rl.question('Another one? (Y/n): ', function (option) {
    if (option == '' || option.toLowerCase() == 'y') promptUser(rl);else rl.close();
  });
};

var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.on("close", function () {
    console.log("\nExiting application...");
    process.exit(0);
  });
  promptUser();
}

main();
