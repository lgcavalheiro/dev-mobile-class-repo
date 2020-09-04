let carrinho = require('./fakeDb.json')["carrinho"];
import readline from 'readline';

const impremeCarrinho = (obj=carrinho) => {
    obj.forEach(item => {
        console.log(`Nome: ${item.nome} | Preco: ${item.preco}`)
    })
}

const descontoTodos = () => {
    rl.question('Defina desconto: ', desconto => {
        if(Number.isInteger(Number(desconto))) desconto = desconto/100;    
        carrinho.forEach(item => {
            item.preco = Number((item.preco - (item.preco*desconto)).toFixed(2))
        });
        impremeCarrinho();
        promptContinue();
    })
}

const calculaTotal = () => {
    console.log('Total: ', carrinho.map(item => item.preco).reduce((curr, next) => { return curr + next }))
}

const buscaNomeOuPreco = () => {
    rl.question('Defina termo de busca: ', termo => {
        termo = termo.toLowerCase();
        let resultado = carrinho.filter(item => { return item.nome.toLowerCase().includes(termo) || item.preco == termo });
        impremeCarrinho(resultado);
        promptContinue();
    })
}

const buscaItem = () => {
    rl.question('Defina termo de busca: ', termo => {
        termo = termo.toLowerCase();
        let resultado = carrinho.find(item => { return item.nome.toLowerCase().includes(termo) });
        console.log(resultado);
        promptContinue();
    })
}

const descontoPorValorAcima = () => {
    rl.question('Defina valor de filtragem: ', termo => {
        let resultado = carrinho.filter(item => { return item.preco > termo });
        
        rl.question('Defina desconto: ', desconto => {
            if(Number.isInteger(Number(desconto))) desconto = desconto/100;    
            resultado.forEach(item => {
                item.preco = Number((item.preco - (item.preco*desconto)).toFixed(2))
            });
            impremeCarrinho(resultado);
            promptContinue();
        })

        promptContinue();
    })
}

export const comandosLiterals = [
    descontoTodos, //0
    calculaTotal, //1
    buscaNomeOuPreco, //2
    buscaItem, //3
    descontoPorValorAcima, //4
    impremeCarrinho //5
]

const promptUser = () => {
    rl.question('Pick an option: ', (option) => {
        try {
            comandosLiterals[option]();
        } catch (e) {
            console.log('Option is not valid!')
        } finally {
            promptContinue();
        }  
    })
}

const promptContinue = () => {
    rl.question('Another one? (Y/n): ', (option) => {
        if(option == '' || option.toLowerCase() == 'y') promptUser(rl);
        else rl.close()
    })
}

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

export function main() {
    rl.on("close", function() {
        console.log("\nExiting application...");
        process.exit(0);
    });

    promptUser();
}

main()