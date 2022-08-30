// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**
let userNumber = Number(prompt("Por favor digite um numero:"))
alert(`O numero escolhido foi ${userNumber}`)

// b) Imprima no console **o resto da divisão** desse número por 2.
console.log(`O resto da divisao de ${userNumber} é ${userNumber%2}`)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
let test = 2
let test1 = 4
let test2 = 6
let test3 = 8
console.log(`Isso é um teste com numeros pares. ${test%2, test1%2, test2%2, test3%2}`)
                // O resultado do resto da divisao sempre será zero. Em boolean,isso seria  igual a false




// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
let numeroImpar = 3
console.log(`Com numero impar, isso acontece com o resto da divisao ${numeroImpar%2}`)
              //Quando inserido numero impar,sempre retorna 1,ou seja, true

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número

// Script para validar se um numero é verdadeiro ou falso.
if (0 == false){
  console.log ('O numero é falso')
} else{
  console.log ('O numero é verdadeiro')
}