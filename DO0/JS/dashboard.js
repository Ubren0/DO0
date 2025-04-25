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

// Chamada ao carregar
mostrarUsuarios();
mostrarClientes();

// Gráfico de Barras - Clientes x Usuários
const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Clientes', 'Usuários'],
        datasets: [{
            label: 'Quantidade',
            data: [12, 5],
            backgroundColor: ['#2C786C', '#3FA67A'],
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1 }
            }
        }
    }
});

// Gráfico de Pizza - Tipos de Serviço (simulação)
const pieCtx = document.getElementById('pieChart');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Desratização', 'Desinsetização', 'Descupinização'],
        datasets: [{
            data: [6, 3, 3],
            backgroundColor: ['#3FA67A', '#5DBB96', '#2C786C'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
