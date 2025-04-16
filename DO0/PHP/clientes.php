<?php
header('Content-Type: application/json');
include 'conexao.php';

$sql = "SELECT * FROM clientes";
$resultado = $conexao->query($sql);

$clientes = [];

if ($resultado->num_rows > 0) {
    while ($linha = $resultado->fetch_assoc()) {
        $clientes[] = $linha;
    }
}

echo json_encode($clientes);
?>
