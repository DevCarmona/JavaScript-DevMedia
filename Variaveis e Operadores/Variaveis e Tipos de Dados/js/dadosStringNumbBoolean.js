    // dadosStringNumbBoolean - Operadores com o seu tipo de Dados

// number - Somar, subtrair e dividir
// boolean - Comparar (===, !==)
// string - concatenar (+)

// number - função nativa
var valor = 20;
valor.toFixed(2);
document.getElementById('texto').innerHTML = valor.toFixed(2);
// boolean - função nativa
var ativo = true;
ativo.toString();
document.getElementById('texto1').innerHTML = ativo.toString();
// string - função nativa
var nome = "Hello World";
nome.toLowerCase()
document.getElementById('texto2').innerHTML = nome.toLowerCase();

// Para descobrir o tipo de uma variavel sem ser pelo valor "typeof"
var valor = 4;
console.log(typeof valor); // vai imprimir - number

var sobrenome = "Silva";
console.log(typeof sobrenome); // vai imprimir - string

var ligado = true;
console.log(typeof ligado); // vai imprimir - boolean