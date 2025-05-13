// Exibe o popup de sucesso
function agendarServico() {
    // Aqui você pode validar os campos se quiser

    // Exibe o popup
    document.getElementById("popupSucesso").style.display = "flex";
}

// Fecha o popup
function fecharPopup() {
    document.getElementById("popupSucesso").style.display = "none";
}

// Simulação de busca do cliente (pode ser integrada com backend futuramente)
function pesquisarCliente() {
    const termo = document.getElementById("pesquisaCliente").value.trim().toLowerCase();

    if (!termo) {
        alert("Digite o ID, nome ou CNPJ/CPF do cliente.");
        return;
    }

    // Simulação de base de clientes (pode substituir por fetch de banco depois)
    const clientes = [
        { id: 1, nome: "João da Silva", cnpjcpf: "12345678900", endereco: "Rua das Palmeiras, 123" },
        { id: 2, nome: "Maria Oliveira", cnpjcpf: "98765432100", endereco: "Avenida Central, 456" },
        { id: 3, nome: "Empresa ABC", cnpjcpf: "11223344556", endereco: "Travessa dos Lírios, 789" }
    ];

    const clienteEncontrado = clientes.find(cliente =>
        cliente.id.toString() === termo ||
        cliente.nome.toLowerCase().includes(termo) ||
        cliente.cnpjcpf.includes(termo)
    );

    if (clienteEncontrado) {
        document.getElementById("nomeCliente").value = clienteEncontrado.nome;
        document.getElementById("enderecoCliente").value = clienteEncontrado.endereco;
    } else {
        alert("Cliente não encontrado.");
        document.getElementById("nomeCliente").value = "";
        document.getElementById("enderecoCliente").value = "";
    }
}

// Função para alternar a exibição do submenu
function toggleSubmenu() {
    const submenu = document.getElementById("submenu");
    const seta = document.getElementById("seta");

    // Alterna a visibilidade do submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
        seta.innerHTML = "▲"; // Mudando seta para cima
    } else {
        submenu.style.display = "none";
        seta.innerHTML = "▼"; // Mudando seta para baixo
    }
}
