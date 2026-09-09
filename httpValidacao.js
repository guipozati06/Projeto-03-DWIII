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

export default validaURL;