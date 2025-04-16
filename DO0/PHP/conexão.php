<?php
$host = 'localhost';
$usuario = 'root';
$senha = 'usbw'; // ou a senha que você usa no MySQL
$banco = 'controlepragas';

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}
?>
