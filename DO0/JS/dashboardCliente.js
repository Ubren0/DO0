document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const idCliente = urlParams.get("id");

    if (idCliente) {
        // Simulação de dados para demonstração
        const cliente = {
            idCliente: 1,
            nome: "Cliente Exemplo",
            cnpjcpf: "123.456.789/0001-00",
            tipoContrato: "Fixo",
            dataInicio: "2025-01-01",
            rua: "Rua Exemplo",
            bairro: "Bairro Exemplo",
            cidade: "Cidade Exemplo",
            estado: "Estado Exemplo",
            cep: "12345-678",
            administradoraNome: "Nome Administradora",
            administradoraContato: "1234-5678",
            supervisorNome: "Nome Supervisor",
            supervisorContato: "9876-5432",
            faturamento: "1000.00",
            formaPagamento: "Boleto"
        };

        // Preenchendo os campos com os dados simulados
        document.getElementById("clienteId").value = cliente.idCliente;
        document.getElementById("clienteNome").value = cliente.nome;
        document.getElementById("clienteCnpjCpf").value = cliente.cnpjcpf;
        document.getElementById("clienteTipoContrato").value = cliente.tipoContrato;
        document.getElementById("clienteDataInicio").value = cliente.dataInicio;
        document.getElementById("clienteRua").value = cliente.rua;
        document.getElementById("clienteBairro").value = cliente.bairro;
        document.getElementById("clienteCidade").value = cliente.cidade;
        document.getElementById("clienteEstado").value = cliente.estado;
        document.getElementById("clienteCep").value = cliente.cep;
        document.getElementById("administradoraNome").value = cliente.administradoraNome;
        document.getElementById("administradoraContato").value = cliente.administradoraContato;
        document.getElementById("supervisorNome").value = cliente.supervisorNome;
        document.getElementById("supervisorContato").value = cliente.supervisorContato;
        document.getElementById("clienteFaturamento").value = cliente.faturamento;
        document.getElementById("clienteFormaPagamento").value = cliente.formaPagamento;
    }
});

// Função para alternar entre as abas
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Habilitar edição
function habilitarEdicao() {
    document.querySelectorAll("input, select").forEach(input => {
        if (input.id !== 'clienteId') {
            input.disabled = false;
        }
    });
    document.getElementById("btnSalvar").style.display = "inline-block";
    document.getElementById("btnCancelar").style.display = "inline-block";
}

// Cancelar edição e recarregar a página
function cancelarEdicao() {
    location.reload();
}

// Função de logout
function logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "login.html";
}
