let data = fazGet("https://br.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-3e314484-98db-4bff-8722-1f3b6ccf2c5b");
var usuario = JSON.parse(data);
const localizedNamesSuport = [
    "ar-AE",
    "de-DE",
    "en-US",
    "es-ES",
    "es-MX",
    "fr-FR",
    "id-ID",
    "it-IT",
    "ja-JP",
    "ko-KR",
    "pl-PL",
    "pt-BR",
    "ru-RU",
    "th-TH",
    "tr-TR",
    "vi-VN",
    "zh-CN",
    "zh-TW"
]

function fazGet(url){
   let req = new XMLHttpRequest();
    req.open("GEt", url, false);
    req.send();
    return req.responseText;
}


/*function test(usuario){
    let x = 0;
    let y=0;
    while(x < usuario.length){
        console.log("test "+ usuario[x].localizedNames["pt-BR"]);
        while(y<localizedNamesSuport.length){
            console.log("test: "+ localizedNamesSuport[y] +": "+ usuario[x].localizedNames[localizedNamesSuport[y]]);
            y++
        }
        y=0;
        x++;
    }
}*/


function criaLinha(api){
  
    let linha = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdLInhaLocalized = document.createElement("td");

    tdName.innerHTML = `<a href="${api.name}"> Name: ${api.name} </a>`;
    tdLInhaLocalized.innerHTML = `<table id="${api.assetName}" class="tabelagerada">`;

    linha.appendChild(tdName);
    linha.appendChild(tdLInhaLocalized);        

    return linha;
}

function GerarLocalizedNames(api){    
    Array.from(api).forEach(element => {
        if(element.name == "Null UI Data!"){}
        else{
            let id = element.assetName
            let tabela = document.getElementById(`${id}`);
            let t=0
            while(t<localizedNamesSuport.length){                
                let linha = criaTabelaLocalized(element.localizedNames[localizedNamesSuport[t]],t);
                tabela.appendChild(linha); 
                t++
            }
        }
    });
}

function criaTabelaLocalized(api,x){

    let linha = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdLInhaLocalized = document.createElement("td");

    tdName.innerHTML = localizedNamesSuport[x]
    tdLInhaLocalized.innerHTML = api;
    linha.appendChild(tdName);
    linha.appendChild(tdLInhaLocalized);

    return linha;
}
function gerarTabela(api, tabela){
    Array.from(api).forEach(element => {
        if(element.name == "Null UI Data!"){}
        else{
            let linha = criaLinha(element);
            tabela.appendChild(linha);      
        }
    });
    GerarLocalizedNames(api)
}

function carregaChar(){
    
    document.getElementById("tabelamaps").style.visibility = "hidden";
    document.getElementById("tabelachar").style.visibility = "visible";
}

function carregaMaps(){

    document.getElementById("tabelachar").style.visibility = "hidden";
    document.getElementById("tabelamaps").style.visibility = "visible";
}


function main(){
    console.log(usuario)
    let tabelamaps = document.getElementById("tabelamaps");
    let tabelachar = document.getElementById("tabelachar");
    gerarTabela(usuario.maps, tabelamaps);
    gerarTabela(usuario.characters, tabelachar);
    
    
}
main()