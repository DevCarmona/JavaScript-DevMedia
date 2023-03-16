// Escrevendo a msm coisa de 2 formas diferentes

for (let cont = 0 ; cont < 10 ; cont++)
{
    console.log("O número é: " + cont);
}

let contador = 0;
while ( contador < 10)
{
    console.log("O número é: " + contador);
    contador++;
}
// Escrevendo a msm coisa de 2 formas diferentes
for (let cont = 0 ; cont < 5 ; cont++)
{
    console.log(cont + " é menor que 5");
}

let contador1 = 0;
while (contador1 < 5)
{
    console.log(contador1 + " é menor que 5");
    contador1++;
}

//Reaproveitando codigo com for
let valor_produto = 500
for (cont1 = 1 ; cont1 <= 5 ; cont1++)
{
    let valor_parcela = valor_produto / cont1;
    console.log("N° de parcelas: " + cont1 + "\nValor da parcela: R$" + valor_parcela.toFixed(2));
}
// Repetição com For - número de parcela informado
let v_produto = 3500;
let t_parcela = 3;
for (cont2 = 1 ; cont2 <= t_parcela ; cont2++)
{
    let v_parcela = v_produto / cont2;
    console.log("N° de parcelas: " + cont2 + "\nValor da parcela: R$" + v_parcela.toFixed(2));
}
// Repetição com While - número de parcela informada (contador sempre dentro do bloco)
let vproduto = 200;
let tparcela = 8;
let cont3 = 1;
while ( cont3 <= tparcela )
{
    let vparcela = vproduto / cont3;
    console.log("N° de parcelas: " + cont3 + "\nValor da parcela: R$" + vparcela.toFixed(2));
    cont3++; // Apesar do incremento n "fazer parte" da sintaxe do bloco ele é necessario para que a variável seja incrementada.
}

// Repetição com While - Tabuada (contador sempre dentro do bloco)
let numero = 3;
let tcont = 0;
console.log("N° da tabuada do " + numero);
while (tcont <= 10)
{
    let resultado = numero * tcont;
    console.log(numero + " x " + tcont + " = " + resultado);
    tcont++;
}
// Repetição com for - Tabuada
let tnumero = 5;
console.log("Tabuada do " + tnumero);
for (fcont = 0 ; fcont <= 10 ; fcont++)
{
    let fresultado = tnumero * fcont;
    console.log(tnumero + " x " + fcont + " = " + fresultado);
}
// Repetição com while - Juros Composto (contador sempre dentro do bloco)
let capitalEmprestado = 3000;
let taxaJuros = 0.02; // 2% de juros
let jCont = 1;
let parcelasTotais = 5;

while ( jCont <= parcelasTotais )
{
    let numeroParcela = jCont
    let jurosEmprestimo = capitalEmprestado * taxaJuros * numeroParcela;

    console.log("A taxa de juros no periodo de " + numeroParcela + " Mes(es) é de R$" + jurosEmprestimo + ",00");

    jCont++;
}
// Repetição com for - Juros Composto
let capEmprestado = 5000;
let taxJuros = 0.05; // 5% de juros
let parcelasTot = 5;

for ( fcont= 1 ; fcont <= parcelasTot ; fcont++ )
{
    let numParcela = fcont;
    let resJuros = capEmprestado * taxJuros * numParcela;

    console.log("A taxa de juros no periodo de " + numParcela + " Mes(es) é de R$" + resJuros.toFixed(2));
}

// Loop com while - Decremento (contador sempre dentro do bloco)
let lcont = 10;
while ( lcont >= 0 )
{
    console.log(lcont);
    lcont--;
}
// Loop com for - Decremento
for ( fcont = 10 ; fcont >= 0 ; fcont--)
{
    console.log(fcont);
}
// Estrutura repetição While - Percorrendo Array
let paises = ["\n", "Brasil", "Suiça", "Inglaterra", "China"];
let pcont = 0;
while ( pcont < paises.length){
    console.log(paises[pcont]);
    pcont++;
}
// Estrutura repetição for - Percorrendo Array
let country = ["\n", "Brasil","Argentina", "Croacia"];
for (ccont = 0 ; ccont < country.length ; ccont++)
{
    console.log(country[ccont]);
}
// Estrutura repetição while - par ou impar
let numeros = [10, 5, 7, 8, 9, 6, 12, 4];
let tot_impar = 0;
let tot_par = 0;
let cont = 0;
while (cont < numeros.length)
{
    if (numeros[cont] % 2 == 0)
    {
        tot_par++;
    }
    else
    {
        tot_impar++;
    }
    cont++;
}   
console.log("\nTotal de pares é: " + tot_par);
console.log("Total de impares é: " + tot_impar);
//Estrutura repetição while - Percorrendo Array total alunos
let alunos = ["\n", "Andre", "Joao", "Cezar", "Sergio"];
let conta = 0;
while (conta < alunos.length)
{
    let aluno_online = alunos[conta];
    console.log(aluno_online);
    conta++
}
//Estrutura repetição for - Percorrendo Array total alunos
let alun = ["\n", "Andre", "Jorge", "Jaum", "Pedro"];
for (contad = 0 ; contad < alun.length ; contad++)
{
    let alunos_online = alun[contad];
    console.log(alunos_online);
}