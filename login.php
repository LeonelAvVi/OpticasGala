<?php
session_start();
$errorMsg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Conectar a la base de datos
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

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Verificar la conexión
  if ($conn->connect_error) {
    die("La conexión a la base de datos ha fallado: " . $conn->connect_error);
  }

  // Obtener los datos enviados desde el formulario de inicio de sesión
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Verificar si el usuario y contraseña son correctos
  $sql = "SELECT id, email FROM users WHERE email='$email' AND password='$password'";
  $result = $conn->query($sql);

  if ($result->num_rows == 1) {
    // Si el usuario y contraseña son correctos, iniciar sesión
    $row = $result->fetch_assoc();
    $_SESSION['id'] = $row['id'];
    $_SESSION['email'] = $row['email'];
    header("location: admin.php");
  } else {
    // Si el usuario y contraseña son incorrectos, mostrar un mensaje de error
    $errorMsg = "El usuario y/o la contraseña son incorrectos.";
  }

  $conn->close();
}
?>

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
        <img class="m-2 mb-4" src="img/bussines/logo-horizontal.png" alt="Optica Gala" style="max-width: 90%;">
        <h2 class="text-primary">Iniciar sesión</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="form-group">
                <label for="email" class="text-primary">Correo electrónico:</label>
                <input type="text" name="email" required>
            </div>
            <div class="form-group">
                <label for="password" class="text-primary">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Iniciar sesión</button>
            </div>

            <?php if ($errorMsg != "") { ?>
                <div class="error"><?php echo $errorMsg; ?></div>
            <?php } ?>
        </form>
    </div>
</body>

</html>