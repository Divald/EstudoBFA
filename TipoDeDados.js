var dados = 5;
var numero = 10;


var comparar = (dados == 10); 
// retornar false 0 
var comp = (dados == dados);
//  retornar true 1 

console.log(comparar,comp);

var cv = (comparar+1); 
// retornar 1
var cvv = (comp+1);
// retornar 2 

console.log(typeof comp, typeof comparar);
console.log(cv,cvv);
console.log(typeof cv);

// 4.13 variavel indefinida ou seja ingles undefined 
// uma variável é indefinida quando ela foi declarada de alguma forma mas não
// possui nenhum valor concreto armazenado. Quando tentamos acessar uma
// variável que não teve nenhum valor associado a ela teremos como retorno "undefined" (indefinid

var casa;
// retornar um undefined 
console.log(casa);

// 4.1.4 O null é a ausência de valor;
//  quando atribuimos null a um objeto ou variável
// significa que essa variável ou objeto não possui valor válido.

var ff = null; 
// typeof (object)  aqui ele retorna null
var india;
// retornar um undefined 

console.log(typeof ff);
var cp = (ff == india);
// retornar true 1  
console.log(cp);

var vt = (ff === india );
// retornar false 0 
console.log(vt)
console.log(ff);

// 4.1 5  Strings são sequências de caractéres.
// Em JavaScript a string pode ser tanto
// um tipo primitivo de dado como um objeto; no entanto, ao manipulá-la temos a
// impressão de que sejam objetos pois as strings em JavaScript possuem métodos
// que podemos invocar para realizar determinadas operações sobre elas. 

var ti = "divaldo miguel"
// retorna divaldo miguel typeof string
var tr = new String(ti);

// 4.1.6 Arrays
// Os Arrays são pares do tipo inteiro-valor para se mapear valores a partir de um
// índice numérico.
// Em JavaScript os Arrays são objetos com métodos próprios.
// Um objeto do tipo Array serve para se guardar uma coleção de ítens em uma
// única variável.

var Array = new Array(4);
console.log(Array)

// var numeroArray = [1,2,3,4,5];

// Os arrays são estruturas que servem para guardar dados, e organizá-los. 
// Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. 
// Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice. 
// Você pode guardar seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3,
//  e sempre que precisar de calças, chapéus ou meias, vai saber em que gaveta buscar.

// O que é um array?
// Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice. Você pode guardar seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3, e sempre que precisar de calças, chapéus ou meias, vai saber em que gaveta buscar.

// Para que serve um array?
// De forma mais robusta, um array é uma estrutura de dados que serve para guardar elementos em um espaço da memória. Estes espaços da memória são chamados de variáveis. No curso de JavaScript você aprende tudo sobre os arrays, as variáveis, os tipos e muito mais.

// Como funciona um Array em Javascript?
// Para entender melhor o que é Array JavaScript e como ele funciona, acompanhe o exemplo a seguir. Imagine que você precisa comprar frutas no supermercado. Você logo pega uma folha de papel e uma caneta e anota cada item, um abaixo do outro, da seguinte forma:

// Lista de Frutas:

// Maçãs;
// Uvas;
// Bananas;
// Abacaxi;
// Morangos;
// Se alguém perguntar qual a terceira coisa que você precisa comprar, logo você irá olhar sua lista e responder “Bananas”.

// Em Javascript os arrays se comportam de forma parecida ao buscar o item na lista, a diferença é que ele começa a contar do zero, assim:

// Array JavaScript - Exemplo: Lista de Frutas

// Número	Frutas

// 0	    Maçãs
// 1	    Uvas
// 2	    Bananas
// 3	    Abacaxi
// 4	    Morangos

// Cada item é um elemento, e cada elemento é acessado por um índice que começa do zero. Além disso, podemos trocar os elementos, acrescentar e remover como bem entendermos.

// Como declarar um Array em JavaScript?
// Existem duas formas de declarar um array em Javascript, mas a mais comum delas é criando uma variável da seguinte forma:

// var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
// Em que cada item da lista é separado por vírgulas e ocupa uma posição do array listaDeFrutas iniciando no índice zero. Essa forma é chamada de método literal de array.

var listadetarefa = ["limpar","ropa","calção","casa"];
console.log(listadetarefa[0]);
// retornar limpar Tipo de objecto String 
listadetarefa.push("laranja");

listadetarefa.forEach(function (item) {
    console.log(item);
});

// ---------------------------------------------------------------------------------------------
// variavel do tipo Array 
    let fitUno =["ano:2025" ,"modelo:Toyota23","cor:Amarela,vermelha"]
  console.log(fitUno[0]);
// variavel do tipo Objecto
  let pessoa = {nome:"Divaldo", idade:26, altura:1.78, bi:"8912LA772834"};

  let fituno = {ano:1998, modelo:"Fituno34", Estado:true, cores:["vermelho", "branco", "preto"]}


