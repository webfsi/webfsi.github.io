<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <?php include('_header.php') ?>
</head>
<body class="page-home">
    
    <div class="cursor"></div>
    <?php include('_preloader.php') ?>
    <!-- <?php include('_cookies.php') ?> -->
    <?php include('_header-nav.php') ?>
    <div class="wrapper wrapper_load" data-scroll-container>
        <main>
            <?php include('_hero.php') ?>
            <?php include('_logotypes.php') ?>
            <?php include('_team.php') ?>
            <?php include('_service.php') ?>
            <?php include('_markers.php') ?>
            <?php include('_manifesto.php') ?>
            <?php include('_collage.php') ?>
            <?php include('_awards.php') ?>
            <?php include('_value.php') ?>
            <?php include('_accordion.php') ?>
        </main>
        <?php include('_footer.php') ?>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <!-- from contacts -->
    <script src="assets/libs/validate.js"></script>
    <script src="assets/libs/aksFileUpload.min.js"></script>
    <!-- end from contacts -->
    <script src="assets/libs/locomotive-scroll.min.js"></script>
    <!-- <script src="assets/libs/TweenMax.min.js"></script> -->
    <script src="assets/libs/gsap.min.js"></script>
    <script src="assets/libs/ScrollTrigger.min.js"></script>
    <script src="assets/js/app.min.js"></script>
</body>
</html>