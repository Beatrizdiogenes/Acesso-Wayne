const login_employees = "employees";
const senha_employees = "Ilovemywork";

const login_manager = "manager";
const senha_manager = "password123";

const login_adm_security = "security";
const senha_adm_security = "howasacat";

const loginForm = document.getElementById('loginForm');



function verificarLogin(login, senha) {
    
    if (login.toLowerCase() === login_employees && senha === senha_employees) {
        
        alert("Welcome, have a good job today");
        window.location.href = 'employeer.html';
        
    } else if (login.toLowerCase() === login_manager && senha === senha_manager) {
        
        alert("Welcome Manager, do the difference every day");
        window.location.href = 'manager.html'; 

    } else if (login.toLowerCase() === login_adm_security && senha === senha_adm_security) {
        
        alert("Welcome, remember eagle eyes");
        window.location.href = 'security.html';

    } else {
        alert("Username or password incorrect");
    }
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    verificarLogin(login, senha); 
});