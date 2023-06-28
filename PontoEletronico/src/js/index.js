import { modal } from "../components/modal.js";
let btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", () => {
    let fieldLogin = document.querySelector("#fieldLogin");
    const login = fieldLogin.value;
    const storageLogin = localStorage.getItem('login');

    let fieldPass = document.querySelector("#fieldPassword");
    const pass = fieldPass.value;
    const storagePass = localStorage.getItem('pass');


    if (login == storageLogin && pass == storagePass) {
        modal('Sucesso', 'Em breve você será redirecionado para o painel principal');
        setTimeout(() => {
            window.location.href = './dashboard/adminDashboard.html';
        }, 2000);
    } else {
        if (login.length == 0 || pass.length == 0) {
            modal('Dados incompletos', 'Preencha os dados de login')
        } else {
            modal('Dados incorretos', 'Login ou senha incorretos')

        }
    }

})
setTimeout(() => {
    localStorage.setItem('login', 'admin');
    localStorage.setItem('pass', '123');
}, 1000);

