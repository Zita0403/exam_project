<?php
session_start(); 
require_once __DIR__ . '/../config/db.php'; // Adatbázis kapcsolat
require_once __DIR__ . '/../config/helper_functions.php'; //HTML karakterek biztonságos formázása kimenet előtt
require_once __DIR__ . '/auth_functions.php'; //Bejelentkezés kezelése
require_once __DIR__ . '/../config/admin_functions.php';
require_once __DIR__ . '/../constans/constans.php'; 
startSessionWithTimeout(900); // 15 perc 
$error = handleLoginRequest() ?? ($_GET['error'] ?? null);
// Oldal neve és stílusa
$currentPage = 'Admin bejelentkezés';
$pageStylesheet = 'assets/styles/styles4.css';
require_once __DIR__ . '/../includes/header.php';  
?>
<!-- Admin Login -->
<header>
    <h1>Admin Bejelentkezés</h1>
</header>
<?php if ($error): ?>
    <p style="color: red;"><?= e($error); ?></p>
<?php endif; ?>
<form method="post" id="appointmentForm">
    <div class="form-group">
        <label for="email">Email cím:</label>
        <input type="email" id="email" name="email" placeholder="Email cím" required>
    </div>
    <div class="form-group">
        <label for="password">Jelszó:</label>
        <input type="password" id="password" name="password" placeholder="Jelszó" required>
    </div>
            
    <input type="submit" name="login" value="Belépés" class="btn click hover-effect">
</form>
<div class=" button hover-effect">
    <a href="<?= e(BASE_URL . 'index.php'); ?>">Vissza a főoldalra</a>
<?php require_once __DIR__ . '/../includes/footer.php';?>