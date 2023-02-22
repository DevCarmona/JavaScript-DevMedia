    //Undefined
var nome;
//console.log(nome.length); // error
// Nan
var idade;
console.log(idade + 1); // Nan resultado de uma operação mat q falhou

    // Null
//Iniciar com null - Significa que queremos adiar intencionalmente ou n atribuir um valor a ela
var nome = null;
console.log(nome); // Vai imprimir - null
//console.log(nome.length); // erro ao tentar acessar length
var preco = null;
//console.log(preco.toFixed(2)); // erro ao tentar acessar toFixed()
var idade = null;
console.log(idade + 1); // valor null considerado 0 pelo JS