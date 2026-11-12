"use strict";

window.onload = function () {

    /* --------------------------------------
       VALIDAÇÃO DO FORMULÁRIO
       --------------------------------------*/
    let btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", function () {
        // Captura os valores dos campos
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("msg").value;

        // Expressão para validar formato de e-mail
        let formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Condicional IF para validar os campos que não foram preenchidos
        // Condicional ELSE IF para verificar se foi digitado um email válido
        if (nome === "" || email === "" || mensagem === "") {
            window.alert("Por favor, preencha todos os campos do formulário.");
        } 
        else if (!formatoEmailValido.test(email)) {
            window.alert("Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).");
        } 
        else {
            window.alert(`Mensagem enviada com sucesso! Obrigado, ${nome}.`);

            // Limpa os campos
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("msg").value = "";
        }
    });

    /* --------------------------------------
       ESCOLHA DE TEMA (CLARO/ESCURO)
       --------------------------------------*/
    let btnTema = document.getElementById("btnTema");
    
    btnTema.addEventListener("click", function () {
        // Alterna (liga/desliga) a classe 'dark-mode' no elemento body
        document.body.classList.toggle("dark-mode");
        
        // Verifica se a classe está ativa para mudar o texto do botão
        if (document.body.classList.contains("dark-mode")) {
            btnTema.textContent = "Mudar para tema:☀️ Claro";
        } else {
            btnTema.textContent = "Mudar para tema:🌙 Escuro";
        }
    });

    /* --------------------------------------
       MENU DINÂMICO RESPONSIVO
       --------------------------------------*/
    let btnMenu = document.getElementById("btnMenu");
    let menuLinks = document.getElementById("menuLinks");

    btnMenu.addEventListener("click", function () {
        // Alterna a classe 'ativo' no <ul> do menu, fazendo ele aparecer ou sumir no CSS
        menuLinks.classList.toggle("ativo");
    });
};