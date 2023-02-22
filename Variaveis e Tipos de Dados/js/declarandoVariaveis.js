    // Criando variaveis com var - é possivel redecalarar uma variavel
var programador = "Eduardo";
var pontuacao = 10;

document.getElementById('texto').innerHTML = programador + " tem " + pontuacao + " anos de idade.";
document.getElementById('texto1').innerHTML = pontuacao;

var valor = 25;
var desconto = 5;
var precoFinal = (valor - desconto);

document.getElementById('texto2').innerHTML = "O valor final de: " + valor + " - " + desconto + " = " + precoFinal;

    // Criando variaveis com let - n é possivel redeclarar uma variavel
let tecnologia = "JavaScript";
let anoAtual = 2023;