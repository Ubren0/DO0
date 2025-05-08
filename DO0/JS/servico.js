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
    const termo = document.getElementById("pesquisaCliente").value.toLowerCase();

    // Exemplo fixo - substitua com chamada ao backend depois
    if (termo === "joão" || termo === "12345678900") {
        document.getElementById("nomeCliente").value = "João da Silva";
        document.getElementById("enderecoCliente").value = "Rua das Palmeiras, 123";
    } else {
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
