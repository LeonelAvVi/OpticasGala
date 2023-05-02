<?php
// Configuración de la conexión a la base de datos
$local = false;

if ($local ==  true) {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "Catalogo";
} else {
    $servername = "localhost:3306";
    $username = "opticasg_opticasg";
    $password = "F8m*ZbD#9XcE";
    $dbname = "opticasg_Catalogo";
}

// Crea una conexión a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica que la conexión se haya establecido correctamente
if (!$conn) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

$resultados = array();
// Crea una consulta SQL
$sql = "SELECT * FROM productos";
//$resultado = array();
// Ejecuta la consulta SQL
$resultado = mysqli_query($conn, $sql);

//echo "<script>console.log('PHP: " . json_encode($resultado) . "');</script>";
// Procesa los resultados de la consulta
while ($fila = mysqli_fetch_assoc($resultado)) {

    $imagen_binaria = $fila['image'];
    $imagen_base64 = base64_encode($imagen_binaria);

    $resultadoData = array(
        'name' => $fila['name'],
        'description' => $fila['description'],
        'image' => $imagen_base64,
        'price' => $fila['price'],
        'category' => $fila['category'],
        'id' => $fila['id'],
        'mark' => $fila['mark'],
        'new' => $fila['new'],
        'fecha' => $fila['fecha'],
        'amount' => $fila['amount'],
        'cantidad' => $fila['cantidad']
    
    );
    // hacer push de cada fila en el array
    array_push($resultados, $resultadoData);
}
//imprimir en consola

$json = json_encode($resultados);
// Cierra la conexión a la base de datos
//echo "<script>console.log('PHP: " . $json . "');</script>";
mysqli_close($conn);
echo $json;

?>
