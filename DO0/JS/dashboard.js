// Função simulada para mostrar número de usuários
function mostrarUsuarios() {
    document.getElementById("usuariosCount").textContent = "5"; // valor simulado
}

// Função simulada para mostrar número de clientes
function mostrarClientes() {
    document.getElementById("clientesCount").textContent = "12"; // valor simulado
}

// Limpa o localStorage e volta para login
function logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "login.html";
}

// Alterna entre modo claro e escuro
function alternarModo() {
    document.body.classList.toggle("dark-mode");
}

// Chamada automática ao carregar página
mostrarUsuarios();
mostrarClientes();
// Função para exibir o submenu
function toggleSubmenu() {
    const submenu = document.getElementById("submenu");
    const seta = document.getElementById("seta");

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        seta.innerHTML = "▼";
    } else {
        submenu.style.display = "block";
        seta.innerHTML = "▲";
    }
}

