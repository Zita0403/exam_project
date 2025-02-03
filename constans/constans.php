<?php
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
$host = $_SERVER['HTTP_HOST'];
$basePath = $protocol . "://" . $host . '/exam_project/';
define('BASE_URL', $basePath);
// Projekt gyökérkönyvtárának meghatározása
define('ROOT_PATH', realpath(__DIR__ . '/../') . '/'); // Egy szinttel feljebb lépés a constans mappából