// Função para toggle do submenu
function toggleSubmenu() {
    const submenu = document.getElementById("submenu");
    const seta = document.getElementById("seta");

    submenu.classList.toggle('show'); // Alterna a classe show
    seta.textContent = submenu.classList.contains('show') ? "▲" : "▼";
}

// Função de logout (simulada aqui)
function logout() {
    // Simulação do logout (isso pode ser ajustado conforme necessário)
    alert('Logout realizado!');
    window.location.href = 'login.html'; // Redireciona para a página de login
}
