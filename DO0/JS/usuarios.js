const form = document.getElementById("formUsuario");
const tabela = document.querySelector("#tabelaUsuarios tbody");

        // Função para mostrar/ocultar o submenu
        function toggleSubmenu() {
            var submenu = document.getElementById("submenu");
            var seta = document.getElementById("seta");

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
                seta.innerHTML = "▼";
            } else {
                submenu.style.display = "block";
                seta.innerHTML = "▲";
            }
        }

        // Função de logout (exemplo)
        function logout() {
            window.location.href = 'login.html';
        }
    
function carregarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    tabela.innerHTML = "";

    usuarios.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.nome}</td>
                <td>${user.login}</td>
                <td><button onclick="excluirUsuario(${index})">Excluir</button></td>
            </tr>
        `;
        tabela.innerHTML += row;
    });
}

function excluirUsuario(index) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    carregarUsuarios();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const novoUsuario = { nome, login, senha };
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    form.reset();
    carregarUsuarios();
});

window.onload = carregarUsuarios;
