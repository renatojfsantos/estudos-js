const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHTML(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
    }

    static alterarConteudoHTML(codigoHTML) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHTML
    }

    static gerarStringHTMLPelaImagem(itens) {
        // para cada item da lista, vai executar a função obterCodigoHTML
        // ao final, vai concatenar tudo eu uma unica string
        // muda de Array para String
        return itens.map(Tela.obterCodigoHTML).join('')
    }

    static atualizarImagens(itens) {
        const codigoHTML = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHTML)
    }
}