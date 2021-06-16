// class Heroi {
//     atacar() {
//         console.log(`atacou!!`)
//     }
//     defender() {
//         console.log(`defendeu`)
//     }
// }

// const heroi = new Heroi()
// heroi.atacar()
// heroi.defender()

// usando construtor!

// class Heroi2 {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     atacar() {
//         console.log(
//             `O ${this.nome} atacou!!`
//         )
//     }
// }

// const heroi2 = new Heroi2(
//     `Flash`,80
// )

// heroi2.atacar()

// class Heroi3 {
//     static obterAnoNascimento(idade) {
//         return 2020 - idade
//     }
// }

// const anoNascimento = Heroi3.obterAnoNascimento(19)
// console.log(
//     `O ano de nascimento do Heroi é ${anoNascimento}`
// )

// class Test {
//     constructor() {
//         console.log('Olá mundo!')
//     }
// }

// new Test()

// class Test {
//     constructor(nome) {
//         this.nome = nome,
//         this.idade = 18
//     }
// }

// class Test {
//     static hello() {
//         console.log('Olá')
//     }
// }

// Test.hello()
// Test['hello']()

class Test {
    hello() {
        console.log('Olá')
    }
}

// new Test().hello()
new Test()['hello']()