let peso
let altura
let idade 
let i=0
let menorIdade
let alturaPessoaMaisJovem
let maiorIdade
let pesoPessoaMaisVelha
let valores
let media=0
let divisao

  

while(true){

     
    peso= Number (prompt("Digite seu peso"))

    if(peso==''){

        break;     
    }

    altura = Number (prompt("Digite sua altura"))

    idade= Number (prompt("Digite sua idade "))




    if(i==1){
         menorIdade= idade
     alturaPessoaMaisJovem= altura

    }

    else if(idade<menorIdade){

        menorIdade= idade
        alturaPessoaMaisJovem=altura
    }

  
if(i==1){
    maiorIdade=idade

    pesoPessoaMaisVelha= peso

}

else if (idade>maiorIdade){
    maiorIdade=idade

    pesoPessoaMaisVelha=peso
}

 media= media+idade

i++

}

divisao= media/i


console.log(alturaPessoaMaisJovem)
console.log(pesoPessoaMaisVelha)
console.log(divisao)