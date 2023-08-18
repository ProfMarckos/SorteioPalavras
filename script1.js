let palavras=[
    "Variavel",
    "Constante",
    "Switch",
    "Function",
    "Array",
    "Getelementbyid",
    "Onclick",
    "Objeto",
    "Console",
    "Script",
    "If",
    "Else",
    "Math.random",
    "String",
    "Number",
    "Boolean",
    "Null",
    "Exponenciação",
    "Incremento",
    "True",
    "False",
    "Undefined",
    "for",
    "while",
    "case",
    "Math",
    "length",
    "Decremento",
    "Função",
    "document",
    "value",
    "Arrow",
    "QuerySelector",
    "Concatenação"
]

let res1=document.getElementById('palavra1');
let res2=document.getElementById('palavra2');
let res3=document.getElementById('palavra3');
let act1=document.getElementById('rnd1');
let act2=document.getElementById('rnd2');
let act3=document.getElementById('rnd3');

act1.addEventListener("click",()=>{
    let indice=Math.floor(Math.random() *  palavras.length);
    res1.innerHTML=palavras[indice]
})
act2.addEventListener("click",()=>{
    let indice=Math.floor(Math.random() *  palavras.length);
    res2.innerHTML=palavras[indice]
})
act3.addEventListener("click",()=>{
    let indice=Math.floor(Math.random() *  palavras.length);
    res3.innerHTML=palavras[indice]
})