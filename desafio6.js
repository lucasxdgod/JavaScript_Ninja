// function myFunc(x) {
//     switch (x) {
//         case 1:
//             console.log('x é 1')
//             break;
//         case 2:
//             console.log('x é 2')
//             break;
//         case 3:
//             console.log('x é 3')
//                 //break;
//         default:
//             console.log('x não é nem 1 nem 2 nem 3')
//     }
// }

// Contador ascendente
// let counter = 0
// while (counter > 0) {
//     console.log(counter--)
// }

/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?
let championship = "Brasileirao";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
let teams = ["Flamengo", "Corinthias", "Gremio", "Palmeiras", "Bangu"];
let counter = 0;
console.log("Times que estão parñticipando do campeonato:");
while (counter < teams.length) {
    console.log(teams[counter]);
    counter++;
}

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
//
function showTimePosition(position) {
    if (position < 1 || position > teams.length + 1)
        return "Não temos a informação do time que está nessa posiçào";
    else
        return (
            "O time que está em " + position + " lugar é o " + teams[position - 1]
        );
}
console.log(showTimePosition(1));

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?
let counter2 = 20;
while (counter2 < 31) {
    console.log(counter2);
    counter2++;
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?
function convertToHex(color) {
    switch (color) {
        case "white":
            hexa = "#FFFFFFF";
            break;
        case "blue":
            hexa = "#FFFFFF";
            break;
        case "red":
            hexa = "#FF000";

            break;
        case "gray":
            hexa = "#00FF00";
            break;
        default:
            return "Não temos um equivalente para essa " + color;
    }
    return "O hexadecimal para a cor" + color + " é " + hexa;
}

convertToHex("white");

/*
 Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
 */
// ?