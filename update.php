<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <title>Optica Gala</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="optica gala lentes sucre bolivia" name="keywords">
    <meta content="Innovación y vanguardia para servir mejor, más de 20 años de pasión por nuestro trabajo. Nuestra" name="description">

    <!-- Favicon -->
    <link href="img/icon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/home.css" rel="stylesheet">
</head>

<body class="body-login">
    <div class="login-container">
        <h2 class="text-primary">Admin</h2>

<?php

$type = $_POST['type'];

$local = true;
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
$conexion = mysqli_connect($servername, $username, $password, $dbname);

if ($type == 'create'){ 
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $cantidad = $_POST['cantidad'];

    $imagen = $_FILES['imagen']['tmp_name'];
    $imagenTipo = $_FILES['imagen']['type'];
    $imagenTamanio = $_FILES['imagen']['size'];

    $categoria = $_POST['categoria'];
    $marca = $_POST['mark'];
    $nuevo = $_POST['new'];
    $fecha = $_POST['fecha'];

    // Insertar los datos en la tabla
    $sql = "INSERT INTO productos (name,description, image, category, mark,new,amount,price,fecha,cantidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "ssbssiiisi", $nombre,$descripcion, $imagenBinario, $categoria, $marca, $nuevo, $cantidad, $precio, $fecha, $cantidad);
    $imagenBinario = file_get_contents($imagen);
    mysqli_stmt_send_long_data($stmt, 2, $imagenBinario);
    mysqli_stmt_execute($stmt);

    if (mysqli_stmt_affected_rows($stmt) > 0) {
        echo "<p>Datos guardados correctamente</p>
        <a href='admin.php' class='btn btn-primary'>Regresar</a>
        ";
    } else {
        echo "<p>Error al guardar los datos</p>
        <a href='admin.php' class='btn btn-primary'>Regresar</a>";
    }

    mysqli_stmt_close($stmt);
}

if($type == "update"){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $cantidad = $_POST['cantidad'];

    $imagen = $_FILES['imagen']['tmp_name'];
    $imagenTipo = $_FILES['imagen']['type'];
    $imagenTamanio = $_FILES['imagen']['size'];

    $categoria = $_POST['categoria'];
    $marca = $_POST['mark'];
    $nuevo = $_POST['new'];
    $fecha = $_POST['fecha'];

    // Insertar los datos en la tabla
    if(!empty($imagen)){
        $sql = "UPDATE productos SET name = ?, description = ?, image = ?, category = ?, mark = ?, new = ?, amount = ?, price = ?, fecha = ?, cantidad = ? WHERE id = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, "ssbssiiisii", $nombre,$descripcion, $imagenBinario, $categoria, $marca, $nuevo, $cantidad, $precio, $fecha, $cantidad, $id);
        $imagenBinario = file_get_contents($imagen);
        mysqli_stmt_send_long_data($stmt, 2, $imagenBinario);
        mysqli_stmt_execute($stmt);

        if (mysqli_stmt_affected_rows($stmt) > 0) {
            echo "<p>Datos guardados correctamente</p>
            <a href='admin.php' class='btn btn-primary'>Regresar</a>
            ";
        } else {
            echo "<p>Error al guardar los datos</p>
            <a href='admin.php' class='btn btn-primary'>Regresar</a>
            ";
        }
    }else{
        $sql = "UPDATE productos SET name = ?, description = ?, category = ?, mark = ?, new = ?, amount = ?, price = ?, fecha = ?, cantidad = ? WHERE id = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, "ssssiiisii", $nombre,$descripcion, $categoria, $marca, $nuevo, $cantidad, $precio, $fecha, $cantidad, $id);
        mysqli_stmt_execute($stmt);

        if (mysqli_stmt_affected_rows($stmt) > 0) {
            echo "<p>Datos guardados correctamente</p>
            <a href='admin.php' class='btn btn-primary'>Regresar</a>
            ";
        } else {
            echo "<p>Error al guardar los datos</p>
            <a href='admin.php' class='btn btn-primary'>Regresar</a>
            ";
        }
    }
    mysqli_stmt_close($stmt);
}

if($type == "delete"){
    $id = $_POST['id'];

    $sql = "DELETE FROM productos WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);

    if (mysqli_stmt_affected_rows($stmt) > 0) {
        echo "<p>Datos eliminados correctamente</p>
        <a href='admin.php' class='btn btn-primary'>Regresar</a>
        ";
    } else {
        echo "<p>Error al eliminar los datos</p>
        <a href='admin.php' class='btn btn-primary'>Regresar</a>
        ";
    }

    mysqli_stmt_close($stmt);
}

if($type == "shopping"){
    $id = $_POST['id'];
    $cantidad = (int)$_POST['cantidad'];
    $operacion = $_POST['operacion'];
    $newData = (int)$_POST['newData'];


    if($operacion == "add"){
        $cantidad = $cantidad + $newData;
    }else{
        $cantidad = $cantidad - $newData;
    }

    $sql = "UPDATE productos SET cantidad = ? WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "ii", $cantidad, $id);
    mysqli_stmt_execute($stmt);

    if (mysqli_stmt_affected_rows($stmt) > 0) {
        echo "<p>Datos guardados correctamente</p>
        <a href='admin.php' class='btn btn-primary'>Regresar</a>
        ";
    } else {
        echo "<p>Error al guardar los datos</p>
        <a href='admin.php' class='btn btn-primary'>Regresar</a>
        ";
    }

    mysqli_stmt_close($stmt);
}

mysqli_close($conexion);
?>
    </div>
</body>

</html>