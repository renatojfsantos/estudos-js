class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela

        // caminho do arquivo, sempre relativo ao index.html!
        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/ciclope.png', nome: 'ciclope' },
            { img: './arquivos/homemformiga.png', nome: 'homemformiga' },
            { img: './arquivos/wolverine.png', nome: 'wolverine' }
        ]

        this.iconePadrao = './arquivos/padrao.png'
        
        this.heroisEscondidos = []

        this.heroisSelecionados = []
    }

    // para usar o this, não podemos usar o static!
    inicializar() {
        // vai pegar todas as funções da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // força a tela a usar o THIS de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))

        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatório
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        // ordernar aleatorio
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes pelo icone padrao
        // como fizemos no construtor, vamos extrair somente o necessário
        // usando a sintaxe ({ chave: 1}) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quado usamos: (exemplo do id), o JS entende que o nome é o mesmo valor.
        // Ex. id: id, vira id,
        const heroisOcultos = herois.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))

        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)

        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
        
    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela proxima clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa que o usuário
                // só pode escolher mais um, vamos obter o primeiro item da lista
                const [opcao1] = this.heroisSelecionados
                // zerar itens para não selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem conforme o esperado
                if(opcao1.nome === item.nome &&
                    // aqui verificamos se são ids diferentes para o usuario não clicar duas vezes no mesmo
                    opcao1.id !== item.id
                ) {
                    alert('Combinação correta!' + item.nome)
                    // para a execução
                    return;
                }

                alert('Combinação incorreta!')
                // fim do case!
                break;
        }
    }

    jogar() {
        this.embaralhar()
    }
}