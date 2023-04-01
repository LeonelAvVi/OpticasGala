<?php
session_start();
if (!isset($_SESSION['email'])) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html>
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
<body class="bg-light m-4 sm:m-4">

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" id="Modal-content">
            
        </div>
    </div>

    <div class="page-header bg-white p-2 shadow-sm p-3 mb-4 bg-white rounded d-flex justify-content-between align-items-center">
        <div>
            <p>Bienvenido, <?php echo $_SESSION['email']; ?><i class="text-danger fas fa-sign-out-alt fa-x mx-2"  data-toggle="tooltip" data-placement="top" title="Cerrar Sesión"></i></p>
            <h2 class="text-primary m-0">Opticas <span class="text-secondary">Gala </span> </h2>
        </div>
        <div class="d-inline ">
           
            <button class="btn btn-success mx-2" onclick="modalCreate()" data-toggle="modal" data-target="#exampleModal">Nuevo Producto</button>

        </div>
        </div>
    </div>
    <div class="page-header bg-white p-2 shadow-sm p-3 mb-5 bg-white rounded d-flex flex-column justify-content-between align-items-center">

        <div class="input-group mb-4">
            <input id="search" type="text" class="form-control p-4" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
            <div class="input-group-append">
                <button class="btn btn-primary" onclick="search()">Buscar</button>
            </div>
        </div>

        <table class="table mt-4">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio Bs.</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody id="productos">
                
            </tbody>
        </table>

        
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    <script src="js/admin.js"></script>

    <!-- Contact Javascript File -->
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
</body>
</html>
