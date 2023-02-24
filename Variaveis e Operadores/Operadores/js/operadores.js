    // Operadores Aritméticos
// Operador módulo (%) - retorna o resto da divisao
var resto1 = 15 % 4; 
var resto2 = 3 % 1.2;
console.log(resto1);
console.log(resto2);
// Verificar se o numero é par
var verificarSePar = 20 % 2 == 0;
console.log(verificarSePar);

    // Operadores Aritméticos
    // + - / *

// Exemplos de conversão de tipos
console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

// Gerar valor e atribuir a msm variavel
var preco = 10;
preco = preco + 10;
console.log(preco);
// Outra forma de fazer
var valor = 5;
valor += 5;
console.log(valor);

    // Incremento e decremento
var contador = 5;
contador++;
console.log(contador);
contador--;
console.log(contador);

// operador sendo utilizado antes da variável, valor muda imediatamente
var numero = 9;
console.log(++numero);
// operador sendo utilizado depois da variável, valor muda após operação atual ser executada
var numero = 9;
console.log(numero++);
console.log("Valor da variavel: " + numero);

    // Operadores relacionais
// Operador || (ou)
/*
true || false = true
false || true = true
false || false = false
*/
// Operador && (e)
/*
true && true = true
true && false = false
false && false = false
*/
// Operador ! (nao)
/*
!false = true
!true = false
*/