<?php
// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "opticasg_opticasg";
$password = "F8m*ZbD#9XcE";
$dbname = "opticasg_Catalogo";

// Crea una conexión a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica que la conexión se haya establecido correctamente
if (!$conn) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Crea una consulta SQL
$sql = "SELECT * FROM productos";

// Ejecuta la consulta SQL
$resultado = mysqli_query($conn, $sql);

// Procesa los resultados de la consulta
while ($fila = mysqli_fetch_assoc($resultado)) {
    echo "Nombre: " . $fila["name"] . "<br>";
}

// Cierra la conexión a la base de datos
mysqli_close($conn);
?>
