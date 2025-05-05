<?php
// Definindo os parâmetros de conexão
$host = 'localhost';     // Host do banco de dados
$user = 'root';          // Usuário
$password = 'usbw';      // Senha padrão do USBWebserver
$dbname = 'controlepragas';  // Nome do banco de dados
$port = 3307;            // Porta do USBWebserver (confirme que é essa)

// Criar conexão
$conn = new mysqli($host, $user, $password, $dbname, $port);

// Verificar se houve erro na conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
