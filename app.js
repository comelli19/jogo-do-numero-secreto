alert('Bem vindo ao adivinhador de numero');

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroMaximo = 5000;
console.log (numeroSecreto );
let chute 
let tentativas = 1;

while(chute != numeroSecreto){

    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`)

//se o chute for igual ao numero secreto

if (numeroSecreto == chute ) {
    break;
 }
 else{
     alert('ERRADO')
     if( chute > numeroSecreto){
         alert(`o numero secreto é menor que ${chute}`);
     }else{
         alert(`o numero secreto é maior que ${chute}`);
     }
 tentativas ++;
   }

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



//if(tentativas > 1) 
    //{
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else{
    //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}