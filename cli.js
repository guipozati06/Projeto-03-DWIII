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
        // Pega o endereço informado pelo usuário no terminal
        const site = process.argv[3];

        // Verifica se o usuário informou algum site
        if (!site) {
            console.log("Erro: Site não informado.");
            console.log("Exemplo de uso:");
            console.log("npm init teste https://www.google.com");
            return;
        }

        // Verifica se o endereço começa com http:// ou https://
        if (!site.startsWith("http://") && !site.startsWith("https://")) {
            console.log("Erro: Endereço inválido.");
            console.log("Informe o endereço começando com http:// ou https://");
            return;
        }

        // Mostra o site que será consultado
        console.log(`Site: ${site}`);

        // Chama a função responsável por verificar o status do site
        const statusSite = await checaStatus(site);

        // Mostra o Status Code retornado pelo servidor
        console.log(`Status Code: ${statusSite}`);

        // Retorna o status, caso outra parte do programa precise utilizá-lo
        return statusSite;

    } catch (erro) {

        // Trata qualquer erro que acontecer durante a consulta
        console.log("Erro ao consultar o site.");

        // Mostra uma mensagem mais específica sobre o erro
        console.log(`Detalhes: ${erro.message}`);
    }
}

//console.log(pegaArquivo(caminho[2]));
processaTexto(caminho)