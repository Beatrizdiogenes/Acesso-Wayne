document.addEventListener('DOMContentLoaded', function() {
    const formulario_funcionario = document.querySelector('#tabelaFuncionarios tbody');

    function obterfuncionariosDoLocalStorage() {
        const funcionarios = localStorage.getItem('funcionarios');
        return funcionarios ? JSON.parse(funcionarios) : [];
    }

    
    function adicionarLinhaTabela(funcionarios) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionarios.nome}</td>
            <td>${funcionarios.cpf}</td>
            <td>${funcionarios.nasc}</td>
            <td>${funcionarios.cel}</td>
            <td>${funcionarios.email}</td>
            
        `;
        formulario_funcionario.appendChild(row);
    }

    
    const funcionarios = obterfuncionariosDoLocalStorage();
    funcionarios.forEach(funcionarios => adicionarLinhaTabela(funcionarios));
    
});