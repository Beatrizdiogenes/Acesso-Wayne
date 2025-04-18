document.addEventListener('DOMContentLoaded', function () {
    const formCadastro = document.getElementById('formulario');

    
    function obterProdutosDoLocalStorage() {
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse(produtos) : [];
    }

   
    function salvarProdutosNoLocalStorage(produtos) {
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }

    
    formCadastro.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.querySelector("#nome");
        const qtde = document.querySelector("#qtde");
        const fabricante = document.querySelector("#fabricante");
        const valor = document.querySelector("#valor");
        const especificacao = document.querySelector("#especificacao");;

        
        const novoProduto = {
            nome: nome.value,
            qtde: qtde.value,
            fabricante: fabricante.value,
            valor: valor.value,
            especificacao: especificacao.value,
        };

        const produtos = obterProdutosDoLocalStorage();
        produtos.push(novoProduto);
        salvarProdutosNoLocalStorage(produtos);

        
        formCadastro.reset();
    });
});
