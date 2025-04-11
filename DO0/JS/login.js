// Carrega usuário salvo (se houver) ao abrir a página
window.onload = function () {
    let usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
        document.getElementById("usuario").value = usuarioSalvo;
        document.getElementById("lembrarMe").checked = true;
    }
};

// Função que executa ao clicar no botão "Entrar"
function fazerLogin() {
    var usuario = document.getElementById("usuario").value;
    var lembrarMe = document.getElementById("lembrarMe").checked;

    if (lembrarMe) {
        localStorage.setItem("usuario", usuario);
    } else {
        localStorage.removeItem("usuario");
    }

    // Redireciona direto para a página do dashboard
    window.location.href = "dashboard.html";
}

// Alterna visibilidade da senha (mostrar/ocultar)
function toggleSenha() {
    var senha = document.getElementById("senha");
    senha.type = senha.type === "password" ? "text" : "password";
}
