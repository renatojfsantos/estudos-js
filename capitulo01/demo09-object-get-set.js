const pessoa = {
    _nome: '',
    _idade: 20,
    get nome() {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },
    set idade(valor) {
        this._idade = valor
    }
}

pessoa.nome = "Maria do céu"
console.log(pessoa.nome)

pessoa.idade = 16
console.log(pessoa.podeDirigir)
console.log('Valor do set', pessoa.idade)
console.log('Valor do number', pessoa._idade)

// teste

// const animal = {
//     _id: '123',
    
//     get id() {
//         return this._id
//     }
// }


// const animals = {
//     _idade: '123',
    
//     set idade(valor) {
//         this._idade = valor
//     }
// }

// animals.idade = 10

// console.log(animal.id)
// console.log(animals.idade)