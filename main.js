let data = fazGet("https://br.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-49971981-b081-41e6-a016-f60750363b6f");
let usuario = JSON.parse(data);

function fazGet(url){
    let req = new XMLHttpRequest();
    req.open("GEt", url, false);
    req.send();
    return req.responseText;
}

function criaLinha(usuario){
    console.log(usuario.name)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdMapName = document.createElement("td");    
    tdId.innerHTML = usuario.id;
    tdMapName.innerHTML = usuario.name;
    linha.appendChild(tdId)
    linha.appendChild(tdMapName);
    return linha;
}
function gerarTabela(usuario){
    Array.from(usuario).forEach(element => {
        let linha = criaLinha(element);
        console.log(linha);
        tabela.appendChild(linha);
    })
}

function carregaChar(){
    
    gerarTabela(usuario.characters);
}

function carregaMaps(){

    gerarTabela(usuario.maps);
}

function main(){
    
    let tabela = document.getElementById("tabela");
    console.log(usuario)
    
    
}
main()