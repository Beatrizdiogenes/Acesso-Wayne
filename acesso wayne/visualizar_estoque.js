
document.addEventListener('DOMContentLoaded', function() {
    const tabelaBody = document.querySelector('#tabelaProdutos tbody');

    function obterProdutosDoLocalStorage() {
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse(produtos) : [];
    }

    
    function adicionarLinhaTabela(produto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.qtde}</td>
            <td>${produto.fabricante}</td>
            <td>${produto.valor}</td>
            <td>${produto.especificacao}</td>
            
        `;
        tabelaBody.appendChild(row);
    }

    
    const produtos = obterProdutosDoLocalStorage();
    produtos.forEach(produto => adicionarLinhaTabela(produto));
   
});