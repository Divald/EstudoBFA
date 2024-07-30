// 1- A imobiliária Imóbilis vende apenas terrenos retangulares. 
// Faça um algoritmo para ler as 
// dimensões de um terreno e depois exibir a área do terreno.

// let largura = parseFloat(prompt("Escreve o tamanho do terreno"));
// let comprimento = parseFloat(prompt("Escreve Altura Do terreno"));


// // exibir a área do terreno
// let area = (largura * comprimento);
// alert(area);
// console.log(area);

// 2. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os 
// cavalos comprados para um haras. 

// Input Numero de cavalo 
// let numeroDeCavalos = Number(prompt("Escreva o Numero De Cavalo"));
// // Saida de dados numero de numero de ferradura
// let numeroDeFerradura = (numeroDeCavalos*4);
// // mensagem a ser exibida 
// alert(numeroDeFerradura);


// A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a 
// cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber 
// quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de 
// poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com 
// base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular 
// os dados solicitados. 

// Declara as variaves quantidadePaes e quantidadeBroas
// quandidade de paes e Broas Vendidas
let quantidadePaes = parseFloat(prompt("Escreva quantidade de Paes vendidos"));
let quantidadeBroas = parseFloat(prompt("Ecreva quantidade de Broas vendidas"));

// Calcular Total de paes e Broas 
let totalpaes = (quantidadePaes * 0.12 );
let totalBroas = (quantidadeBroas * 1.50);

// calculo da total arrecadado 
let totalArrecadado = (totalpaes + totalBroas);

// Calculo da Paupanca 
let poupança =(totalArrecadado * 0.10);

// mostrar o valores 
alert(` 
       Quatidade Paes:  ${quantidadePaes}
       Quatidade Broas: ${quantidadeBroas}

       Total de Paes:  ${totalpaes}
       Total de Broas: ${totalBroas}
       
       Total Arrecadado: ${totalArrecadado}

       Poupanca: ${poupança}     
 ` )


