function soma(numero1, numero2){
   return numero1 + numero2;
}

function subtracao(numero1, numero2){
   return numero1 - numero2;
}

function multiplicao(numero1, numero2){
   return numero1 * numero2;
}

function divisao(numero1, numero2){
    return numero1 / numero2;
}

let parametro1 = parseFloat(prompt("Digite o primeiro numero"));
let parametro2 = parseFloat(prompt("Digite o Segundo numero"));
let operacao = prompt("Digite 1 para somar | Digite 2 para subtrair | Digite 3 para multiplicao | Digite 4 para dividir ");

(operacao ==1 ? alert(soma(parametro1, parametro2)) : 
operacao == 2 ? alert(subtracao(parametro1, parametro2)) :
operacao == 3 ? alert(multiplicao(parametro1, parametro2)):
operacao == 4 ? alert(divisao(parametro1, parametro2)) : 
                alert("operacao Errda Tenta Novamente!"));




    // if(operacao === 1){
//     alert(soma(parametro1, parametro2))
// }else if(operacao === 2){
//     alert(subtracao(parametro1, parametro2));
// }else if(operacao === 3){ 
//     alert(multiplicao(parametro1, parametro2));
// }else if(operacao === 4){
//     alert(divisao(parametro1, parametro2))
// }else{
//     alert("operacao errada!")
// }