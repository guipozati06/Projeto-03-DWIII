import pegaArquivo from "./app.js";
import chalk from "chalk";
import validaURL from "./httpValidacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2])

    if(caminho[3] == 'validar'){
        console.log(chalk.yellow("links validados"), await validaURL(resultado))
    }
    else{
        console.log(chalk.yellow("lista de links"), resultado)
    }
}

//console.log(pegaArquivo(caminho[2]));
processaTexto(caminho)