<?php
require_once __DIR__ . '/../constans/constans.php'; // Constansok betöltése 
// Navigáció
$navItems = [
    [
        'label' => 'Főoldal',
        'url' => BASE_URL . 'index'
    ],
    [
        'label' => 'Szolgáltatások',
        'url' => '#',
        'submenu' => [
            [
                'label' => 'Arckezelések',
                'url' => BASE_URL . 'pages/facial-treatment'
            ],
            [
                'label' => 'Testkezelések',
                'url' => BASE_URL . 'pages/body-treatment'
            ],
            [
                'label' => 'Szőreltávolítás',
                'url' => BASE_URL . 'pages/hair-removal'
            ],
            [
                'label' => 'Sminkelés',
                'url' => BASE_URL . 'pages/make-up'
            ]
        ]
    ],
    [
        'label' => 'Árlista',
        'url' => BASE_URL . 'pages/price-list'
    ],
    [
        'label' => 'Rólam',
        'url' => BASE_URL . 'index#about'
    ],
    [
        'label' => 'Kapcsolat',
        'url' => BASE_URL . '#contact'
    ],
    [
        'label' => 'Időpontfoglalás',
        'url' => BASE_URL . 'pages/booking'
    ],
    [
        'label' => 'Admin',
        'url' => BASE_URL . 'login_system/login'
    ]
];
// Aktuális oldal lekérése, ellenőrzés
function isActive($url) {
    $currentUrl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    return strpos($currentUrl, $url) !== false ? 'active' : '';
}