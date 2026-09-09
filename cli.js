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

async function validaSite() {
    try {

        const site = process.argv[3];

        if (!site) {
            console.log("Erro: Site não informado.");
            console.log("Exemplo de uso:");
            console.log("npm init teste https://www.google.com");
            return;
        }

        if (!site.startsWith("http://") && !site.startsWith("https://")) {
            console.log("Erro: Endereço inválido.");
            console.log("Informe o endereço começando com http:// ou https://");
            return;
        }


        console.log(`Site: ${site}`);

        const statusSite = await checaStatus(site);

        console.log(`Status Code: ${statusSite}`);

        return statusSite;

    } catch (erro) {

        console.log("Erro ao consultar o site.");

        console.log(`Detalhes: ${erro.message}`);
    }
}


processaTexto(caminho)