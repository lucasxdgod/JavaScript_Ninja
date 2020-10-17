/* 
O operador módulo %
--> Imprimir os números pares de 0 a 100
O operador lenght
O método push (empurrar)
*/

// EXERCICIOS

/*
Crie um array com 5 items (tipos variados).
*/
// ?

let array = [{ nome: "lucas" }, "bola", null, true, 4, 1.2];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

function addItem(item) {
  return array.push(item);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?;
console.log(addItem(["a", "b", "c"]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

console.log("O segundo elemento do segundo array é: " + array[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log("O primeiro array tem " + array.length + " items");
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log("O segundo array tem " + array[6].length + "itens");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let counter = 10;
console.log("Os números pares entre 10 e 20 são: ");
while (counter < 20) {
  counter % 2 === 0 ? console.log(counter) : "";
  counter++;
}

console.log();
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
counter = 10;
console.log("Os números impares entre 10 e 20 são: ");
while (counter < 20) {
  counter % 2 === 1 ? console.log(counter) : "";
  counter++;
}

console.log();

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
// ?
console.log("Os números pares entre 100 e 120 sao: ");
for (counter = 100; counter < 120; counter++) {
  counter % 2 === 0 ? console.log(counter) : "";
}

console.log();

console.log("Os números impares entre 111 e 125 sao: ");
for (counter = 111; counter < 125; counter++) {
  counter % 2 === 1 ? console.log(counter) : "";
}

// ?
