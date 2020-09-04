let carrinho = require('./fakeDb.json')["carrinho"];
import readline from 'readline';

const descontoTodos = () => {

}

const calculaTotal = () => {

}

const buscaNomeOuPreco = () => {

}

const buscaItem = () => {

}

const descontoPorValorAcima = () => {

}

const comandosLiterals = [
    descontoTodos, //0
    calculaTotal, //1
    buscaNomeOuPreco, //2
    buscaItem, //3
    descontoPorValorAcima //4
]

export function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("close", function() {
        console.log("\nExiting application...");
        process.exit(0);
    });

    let opt = -1

    while(opt != 0) {
        rl.question('Pick an option: ', (option) => {
            opt = option;
            console.log('OPT: ', opt);
            rl.close();
        })
    }
}

main()