document.addEventListener('DOMContentLoaded', function () {
    const formularioFuncionario = document.getElementById('formulario_funcionario');

    
    function obterfuncionariosDoLocalStorage() {
        const funcionarios = localStorage.getItem('funcionarios');
        return funcionarios ? JSON.parse(funcionarios) : [];
    }

    function salvarfuncionariosNoLocalStorage(funcionarios) {
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    }

    
    formularioFuncionario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.querySelector("#nome");
        const cpf = document.querySelector("#cpf");
        const nasc = document.querySelector("#nasc");
        const cel = document.querySelector("#cel");
        const email = document.querySelector("#email");;

        
        const novoFuncionario = {
            nome: nome.value,
            cpf: cpf.value,
            nasc: nasc.value,
            cel: cel.value,
            email: email.value,
        };

        const funcionarios = obterfuncionariosDoLocalStorage();
        funcionarios.push(novoFuncionario);
        salvarfuncionariosNoLocalStorage(funcionarios);

        alert("Funcionário cadastrado com sucesso!");
        formularioFuncionario.reset();
    });
});