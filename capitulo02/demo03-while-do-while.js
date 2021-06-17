// enquanto não mudar, não para!
let termoDeParada = true
let contador = 0

while (termoDeParada) {
    termoDeParada = contador < 10
    if (contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    // contador = contador + 1
    contador += 1
}

// roda a primeira vez e testa a variavel depois!
do {
    console.log('Só uma vez! pois termoDeParada é', termoDeParada)    
} while (termoDeParada)

while (termoDeParada) {
    // não vai executar
    console.log('Nem vai executar!')
}

// testes
// let termoParada = true
// let contador = 0

// while (termoParada) {
//     console.log(contador)
//     if (contador++<3)
//     continue
//     else
//     termoParada = false
// }

// const listaDeTarefas = [
//     {tarefa: 'lavar o chão', id: 1},
//     {tarefa: 'lavar a louça', id: 2},
//     {tarefa: 'arrumar o quarto', id: 3},
// ]

// let indice = 0
// while (indice < listaDeTarefas.length) {
//     console.log(listaDeTarefas[indice].tarefa)
//     indice++
// }

// let indice = 0
// do {
//     console.log(listaDeTarefas[indice].tarefa)
//     indice++
// } while (indice < listaDeTarefas.length);

// let termoParada = true
// while (termoParada) {
//     console.log('Olá Mundo!')
//     break
// }