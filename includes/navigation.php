<?php
require_once __DIR__ . '/../constans/constans.php'; // Constansok betöltése 
// Navigáció
$navItems = [
    [
        'label' => 'Főoldal',
        'url' => BASE_URL . 'index.php'
    ],
    [
        'label' => 'Szolgáltatások',
        'url' => '#',
        'submenu' => [
            [
                'label' => 'Arckezelések',
                'url' => BASE_URL . 'pages/facial-treatment.php'
            ],
            [
                'label' => 'Testkezelések',
                'url' => BASE_URL . 'pages/body-treatment.php'
            ],
            [
                'label' => 'Szőreltávolítás',
                'url' => BASE_URL . 'pages/hair-removal.php'
            ],
            [
                'label' => 'Sminkelés',
                'url' => BASE_URL . 'pages/make-up.php'
            ]
        ]
    ],
    [
        'label' => 'Árlista',
        'url' => BASE_URL . 'pages/price-list.php'
    ],
    [
        'label' => 'Rólam',
        'url' => BASE_URL . 'index.php#about'
    ],
    [
        'label' => 'Kapcsolat',
        'url' => BASE_URL . '#contact'
    ],
    [
        'label' => 'Időpontfoglalás',
        'url' => BASE_URL . 'pages/booking.php'
    ],
    [
        'label' => 'Admin',
        'url' => BASE_URL . 'login_system/login.php'
    ]
];
// Aktuális oldal lekérése, ellenőrzés
function isActive($url) {
    $currentUrl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    return strpos($currentUrl, $url) !== false ? 'active' : '';
}