//pessoa.cor = 'negra' // adiciono um novo atributo ao objeto
/*pessoa.andar = function () {
    return 'pessoa andando' 
} */

// Métodos com objeto
/*pessoa.aniversario = function() {
    pessoa.idade++;
}
*/





/*
Tipos primitivos
 -number
 -string
 -boolean
 -null e undefined

OBJETOS
*/

// Declarar uma variável qualquer, que receba um objeto vazio.
var objeto = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
    var pessoa = {
        nome: 'Lucas', 
        sobrenome: 'Boaventura',
        idade: 20, 
        altura: 1.68,
        sexo:'Masculino', 
        idade: 22, 
        altura: 1.80, 
        peso: 55, 
        andando: false,
        camninhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function(){
    pessoa.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(qntdAndada) {
    pessoa.camninhouQuantosMetros += qntdAndada
    pessoa.andando = true 
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function () {
     pessoa.andando = false
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function () {
    return 'Olá! Meu nome é ' +pessoa.nome+' '+ pessoa.sobrenome + '!'
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function() {
    return 'Olá, eu tenho '+pessoa.idade+' anos!';
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function () {
    return 'Eu peso'+pessoa.peso;
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function () {
    return 'Minha altura é '+pessoa.altura+'m' 
}


/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto())


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade())


/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarPeso())


/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura())


/*
Faça a `pessoa` fazer 3 aniversários.
*/
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())


/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoa.mostrarIdade())

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar()

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando()


/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()


/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/


/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

/* MINHA SOLUÇÃO
pessoa.apresentacao = function () {


    if (pessoa.sexo === 'feminino'){
        
        return 'Olá, eu sou a'+pessoa.nome+ ' tenho '+pessoa.idade+' anos, '+pessoa.altura+'m , meu peso é '+pessoa.peso+ ' e, só hoje, eu já caminhei '+pessoa.qntdAndada()+ ' metros!'
    }
    if(pessoa.idade === 1){
        
        return 'Olá, eu sou o '+pessoa.nome+ ' tenho '+pessoa.idade+' ano, '+pessoa.altura+'m , meu peso é '+pessoa.peso+ ' e, só hoje, eu já caminhei '+pessoa.qntdAndada()+ ' metros!'

    }
    if(pessoa.qntdAndada() === 1){
        
        return 'Olá, eu sou o '+pessoa.nome+ ' tenho '+pessoa.idade+' anos, '+pessoa.altura+'m , meu peso é '+pessoa.peso+ ' e, só hoje, eu já caminhei '+pessoa.qntdAndada()+ ' metro!'

    }
    else {

        return 'Olá, eu sou o '+pessoa.nome+ ' tenho '+pessoa.idade+' anos, '+pessoa.altura+'m , meu peso é '+pessoa.peso+ ' e, só hoje, eu já caminhei '+pessoa.qntdAndada()+ ' metros!'
    }
}

*/

pessoa.apresentacao = function() {
    var sexo = 'o'
    var idadeAnos = 'anos'
    var metrosAndados = 'metros'

    if (sexo === 'feminino'){
        sexo = 'a'
    }

    if (pessoa.idade() === 1){
        idadeAnos = 'ano'
    }

    if (qntdAndada() === 1){
        metrosAndados = 'metro'
    }

    return 'Olá, eu sou'+sexo+ ' '+pessoa.nome+' e tenho'+pessoa.idade()+' '+idadeAnos+', meço '+pessoa.altura+'m e, só hoje, eu já caminhei '+pessoa.qntdAndada()+' '+metrosAndados



    return 


}