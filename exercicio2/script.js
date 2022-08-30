// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```

let firstNumber = Number(prompt('Digite seu primeiro numero'))
let secondNumber = Number(prompt('Digite seu segundo numero'))

console.log(`O primeiro numero é maior que o segundo? ${firstNumber>secondNumber}`)
console.log(`O primeiro numero é igual ao segundo? ${firstNumber==secondNumber}`)
console.log(`O primeiro numero é divisível pelo segundo? ${(firstNumber%secondNumber)==0}`)
console.log(` O segundo numero é divisível pelo primeiro? ${(secondNumber%firstNumber)==0}`)
