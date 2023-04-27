import { modal } from "../components/modal.js";
$("#btnLogin").on({
    click: () => {
        const login = $("#fieldLogin").val();
        const storageLogin = localStorage.getItem('login');

        const pass = $("#fieldPassword").val();
        const storagePass = localStorage.getItem('pass');


        if (login == storageLogin && pass == storagePass) {
            modal('Sucesso','Em breve você será redirecionado para o painel principal');
            setTimeout(()=>{
                window.location.href='./dashboard/adminDashboard.html';
            },1000)
        }
    }
})

setTimeout(() => {
    localStorage.setItem('login', 'admin');
    localStorage.setItem('pass', '123');
}, 1000);

