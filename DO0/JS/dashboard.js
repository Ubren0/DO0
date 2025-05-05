function mostrarUsuarios() {
    document.getElementById("usuariosCount").textContent = "5";
}

function mostrarClientes() {
    document.getElementById("clientesCount").textContent = "12";
}

function logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "login.html";
}

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
window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('graficoServicos');
    if (!canvas) {
        console.warn("Canvas do gráfico não encontrado!");
        return;
    }

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Serviços Realizados',
                data: [10, 20, 15, 25, 18, 22],
                backgroundColor: 'rgba(34, 139, 34, 0.5)',
                borderColor: 'rgba(34, 139, 34, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Serviços por Mês'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
