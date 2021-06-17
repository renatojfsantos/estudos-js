// let frutaExistenteNoMercado = false
// let temCPUSuficiente = true

// obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
// console.log('args', args)
// console.log('saldo', saldo)

if (isNaN(saldo)) {
    console.log('valor invalido!!')
    return;
}

let tipoCliente = "premium"
if (saldo < 9) {
    tipoCliente = "basic"
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = "gold"
}
else {
    tipoCliente = null
}

// null, undefined, vazio, 0 === false
if (!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log('tipoDoCliente', tipoCliente)

const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1 == 1)

const idade = 1
const resultado = idade >= 18 ?
    "pode dirigir" :
    "não pode dirigir!!"
console.log('resultado', resultado)

/**
 * TESTE
 */
// const item = "abc"
// console.log(isNaN(item) ? "Hey jude" : "Hey Julia")

// const item = "0"
// console.log(!!item)

// const item = (!0 ? "2a" : "3b")
// console.log('saída é:', item)

// const valor = 5

// if (valor < 2 || valor > 4) {
//     console.log('if')
// } else if (valor < 5) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// const resultado = 1 ? (null || ((1 != '1') ? "Hello world" : "Hackerzao")): "não zero"
// console.log(resultado)