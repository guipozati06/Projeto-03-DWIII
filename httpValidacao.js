import fetch from "node-fetch";

function checaStatus(arrayURL){
    const arrayStatus = Promise.all(arrayURL.map (async url =>{
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}

function geraArrayURL(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURL(arrayLinks){
    const links = geraArrayURL(arrayLinks)
    const statusLinks = await checaStatus(links)
    return statusLinks
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

export default validaURL;