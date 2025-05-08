// cadastroCliente.js

// Função para lidar com o envio do formulário
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos
    const cnpjcpf = document.getElementById('cnpjcpf').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Validação simples
    if (!validateCNPJCPF(cnpjcpf)) {
        alert('CNPJ/CPF inválido. Por favor, verifique e tente novamente.');
        return;
    }

    if (nome.trim() === '') {
        alert('O nome é obrigatório.');
        return;
    }

    // Aqui você pode adicionar mais validações conforme necessário

    // Se tudo estiver correto, exibe uma mensagem de sucesso
    alert('Cliente cadastrado com sucesso!');

    // Limpa o formulário após o envio
    document.getElementById('formCadastro').reset();
});

// Função para validar CNPJ/CPF (exemplo simples)
function validateCNPJCPF(cnpjcpf) {
    // Aqui você pode implementar uma validação mais robusta
    // Para fins de exemplo, vamos considerar que o CNPJ/CPF deve ter entre 11 e 14 caracteres
    const regex = /^(?:\d{11}|\d{14})$/; // Aceita apenas números com 11 ou 14 dígitos
    return regex.test(cnpjcpf);
}

// Função para logout (exemplo)
function logout() {
    // Aqui você pode implementar a lógica de logout
    alert('Você foi desconectado.');
    // Redirecionar para a página de login ou outra página
    window.location.href = 'login.html'; // Altere para a URL correta
}

// Função para alternar o submenu
function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
