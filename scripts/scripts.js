$(document).ready(function () {
    // Ellenőrzés, hogy már elfogadták/elutasították-e a cookie-kat
    let cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent !== "accepted" && cookieConsent !== "rejected") {
        $(".modal").show(); 
    } else {
        $(".modal").hide(); 
    }

    // Cookie modal gombok eseménykezelése
    $(".btn").on("click", function () {
        if ($(this).hasClass("accept")) {
            localStorage.setItem("cookieConsent", "accepted");  // Elfogadás mentése
        } else if ($(this).hasClass("reject")) {
            localStorage.setItem("cookieConsent", "rejected"); // Elutasítás mentése
        }
        $(".modal").fadeOut(500); 
    });

    // Scroll-to-top gomb kattintás eseménykezelő
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            $(".to-top").fadeIn(300).css("visibility", "visible");
        } else {
            $(".to-top").fadeOut(300).css("visibility", "hidden");
        }
    });

    $(".to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // Hamburger menü nyitása/zárása
    $(".hamburger-menu").on("click", function () {
        $(".hamburger-main-menu").slideToggle(); // Menü megjelenítése vagy elrejtése
        $(this).toggleClass("open"); // Hamburger ikon állapota
        const icon = $(".hamburger-menu i");
        icon.toggleClass("fa-bars fa-times"); // Ikon váltása
    });

    // Almenü toggle kezelés mobil nézetben
    $(".hamburger-main-menu > li:has(.hamburger-submenu) > a").on("click", function (event) {
        event.preventDefault(); 
        const $submenu = $(this).siblings(".hamburger-submenu"); 
        $(".hamburger-submenu").not($submenu).slideUp(); 
        $submenu.slideToggle(); 
    });

    // Ablakméret változás kezelése (desktop nézethez)
    $(window).on("resize", function () {
        if ($(window).width() > 1200) { 
            $(".hamburger-main-menu, .hamburger-submenu").removeAttr("style"); 
            $(".hamburger-menu").removeClass("open"); // Hamburger ikon alaphelyzet
            $(".hamburger-menu i").removeClass("fa-times").addClass("fa-bars"); // Ikon visszaállítása
        }
    });

    // Animáció a képeken hover esetén
    $(document).on("mouseenter", ".special-treatments", function () {
        $(this).css({ transform: "scale(1.1)", transition: "transform 0.3s" });
    }).on("mouseleave", ".special-treatments", function () {
        $(this).css({ transform: "scale(1)" });
    });

    const sessionTimeout = 900 * 1000; // 15 perc (900s)
    const warningTime = sessionTimeout - 120 * 1000; // 2 perccel előtte

    // Figyelmeztetés a session lejáratáról
    setTimeout(function () {
        alert("A munkamenet 2 percen belül lejár. Kattintson bárhová az oldalon a hosszabbításhoz.");
    }, warningTime);

    // Bárhová kattint, frissíti a session-t
    $(document).on("click", function () {
        $.get("../config/refresh_session.php"); 
    });
});