var dia_semana = 5;
if (dia_semana == 0 || dia_semana == 6){
    console.log("Funcionamos apensa de segunda a sexta")
}else {
    console.log("Loja aberta");
}
    // Operador de igualdade
var x = " "; // String vazia é considerada 0 (false)
var y = 0; // 0 (false)
if (x == y) { 
    console.log("x e y são iguais");
}else {
    console.log("x e y são diferentes");
}
    // Operador de igualdade
var a = 1; // Number 1 (true)
var b = true;
if (a == b) {
    console.log("a e b são iguais");
} else{
    console.log("a e b não sao iguais");
}
    // Operador de igualdade estrita
var c = 1; // number 1 (true)
var d = true;
if (c === d) { 
    console.log("c e d são iguais");
}else {
    console.log("c e d não são iguais");
}
    // if ternario
var nota = 8;
var aluno = nota > 7 ? "Aprovado" : "Reprovado";
console.log(aluno);
    // if ternario com multiplas condições
var mes = 8;
var mensagem = (mes == 11 || mes == 12 ) ? "Promoção" : "Preço Normal";
console.log(mensagem);
    // if ternario com multiplas condições
var dia_semana = 5;
var status_loja= (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja Aberta"
console.log(status_loja);
    // Curto-cicuito
var aprovado = true;
aprovado && console.log("Parabens");
    // Curto-cicuito
const nome = 'Andre';
// Aqui é verificado se o nome possui ao menos um caractere
// Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0;
nomeValido && console.log(nome); // Imprime o nome no console se for diferente de vazio
    // Switch
var produto = "Smartphone";
switch(produto) // Expressão a ser validada
{   // Múltiplas cláusulas case
    case "Smartphone": // compara o valor com a expressão
    case "Celular":
    case "Telefone":
        console.log("Produto: SmartPhone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}
var mes = new Date();
var mes_mes = mes.getMonth();
switch(mes_mes)
{
    case 0:
    case 1:
    case 2:
        console.log("Verão");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Inverno");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}
    // if / else if / else
let meteoros_trimestre_um = "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e terminaem 29/03";
let meteoros_trimestre_dois = "Líridas começa em 23/05 etermina em 26/05\nEta Aquáridas começa em 31/05 e terminaem 02/06\nBootídeos de Junho começa em 16/06 e termina em20/06";
let meteoros_trimestre_tres = "Eta Líridas começa em 1908 e termina em 22/08\nAlfa Capricornídeos começa em 1309 e termina em 17/09";
let meteoros_trimestre_quatro = "Delta Aquáridas do Sulcomeça em 11/10 e termina em 15/10\nPiscis Austrinídeoscomeça em 04/12 e termina em 08/12\nPerseidas começa em27/12 e termina em 31/12";

let date_atual = new Date();// Objeto Date
let mes_atual = date_atual.getMonth(); // utilizando do objeto Date para retornar o mês atual, que vai de 0 a 11

if (mes_atual == 0 || mes_atual == 1 || mes_atual == 2) {
    console.log("As chuvas de meteoros do primeiro trimestre são: \n" + meteoros_trimestre_um);
}
else if (mes_atual == 3 || mes_atual == 4 || mes_atual == 5) {
    console.log("As chuvas de meteoros do primeiro trimestre são: \n" + meteoros_trimestre_dois);
}
else if (mes_atual == 6 || mes_atual == 7 || mes_atual == 8) {
    console.log("As chuvas de meteoros do primeiro trimestre são: \n" + meteoros_trimestre_tres)
}
else if (mes_atual == 9 || mes_atual == 10 || mes_atual == 11) {
    console.log("As chuvas de meteoros do primeiro trimestre são: \n" + meteoros_trimestre_quatro);
}
else {
    console.log("Mês não existente!");
}