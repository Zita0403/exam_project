// $(document).ready(function () {
//     // Ellenőrzés, hogy már elfogadták/elutasították-e a cookie-kat
//     let cookieConsent = localStorage.getItem("cookieConsent");
//     if (cookieConsent !== "accepted" && cookieConsent !== "rejected") {
//         $(".modal").show(); 
//     } else {
//         $(".modal").hide(); 
//     }

//     // Cookie modal gombok eseménykezelése
//     $(".btn").on("click", function () {
//         if ($(this).hasClass("accept")) {
//             localStorage.setItem("cookieConsent", "accepted");  // Elfogadás mentése
//         } else if ($(this).hasClass("reject")) {
//             localStorage.setItem("cookieConsent", "rejected"); // Elutasítás mentése
//         }
//         $(".modal").fadeOut(500); 
//     });

//     // Scroll-to-top gomb kattintás eseménykezelő
//     $(window).scroll(function () {
//         if ($(this).scrollTop() >= 800) {
//             $(".to-top").fadeIn(300).css("visibility", "visible");
//         } else {
//             $(".to-top").fadeOut(300).css("visibility", "hidden");
//         }
//     });

//     $(".to-top").click(function () {
//         $("html, body").animate({ scrollTop: 0 }, "slow");
//     });

//     // Hamburger menü nyitása/zárása
//     $(".hamburger-menu").on("click", function () {
//         $(".hamburger-main-menu").slideToggle(); // Menü megjelenítése vagy elrejtése
//         $(this).toggleClass("open"); // Hamburger ikon állapota
//         const icon = $(".hamburger-menu i");
//         icon.toggleClass("fa-bars fa-times"); // Ikon váltása
//     });

//     // Almenü toggle kezelés mobil nézetben
//     $(".hamburger-main-menu > li:has(.hamburger-submenu) > a").on("click", function (event) {
//         event.preventDefault(); 
//         const $submenu = $(this).siblings(".hamburger-submenu"); 
//         $(".hamburger-submenu").not($submenu).slideUp(); 
//         $submenu.slideToggle(); 
//     });

//     // Ablakméret változás kezelése (desktop nézethez)
//     $(window).on("resize", function () {
//         if ($(window).width() > 1200) { 
//             $(".hamburger-main-menu, .hamburger-submenu").removeAttr("style"); 
//             $(".hamburger-menu").removeClass("open"); // Hamburger ikon alaphelyzet
//             $(".hamburger-menu i").removeClass("fa-times").addClass("fa-bars"); // Ikon visszaállítása
//         }
//     });

//     // Animáció a képeken hover esetén
//     $(document).on("mouseenter", ".special-treatments", function () {
//         $(this).css({ transform: "scale(1.1)", transition: "transform 0.3s" });
//     }).on("mouseleave", ".special-treatments", function () {
//         $(this).css({ transform: "scale(1)" });
//     });

//     const sessionTimeout = 900 * 1000; // 15 perc (900s)
//     const warningTime = sessionTimeout - 120 * 1000; // 2 perccel előtte

//     // Figyelmeztetés a session lejáratáról
//     setTimeout(function () {
//         alert("A munkamenet 2 percen belül lejár. Kattintson bárhová az oldalon a hosszabbításhoz.");
//     }, warningTime);

//     // Bárhová kattint, frissíti a session-t
//     $(document).on("click", function () {
//         $.get("../config/refresh_session.php"); 
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Cookie elfogadás ellenőrzése
    const cookieConsent = localStorage.getItem("cookieConsent");
    const modal = document.querySelector(".modal");

    if (cookieConsent !== "accepted" && cookieConsent !== "rejected") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }

    // Cookie modal gombok
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            if (button.classList.contains("accept")) {
                localStorage.setItem("cookieConsent", "accepted");
            } else if (button.classList.contains("reject")) {
                localStorage.setItem("cookieConsent", "rejected");
            }
            modal.style.transition = "opacity 0.5s";
            modal.style.opacity = "0";
            setTimeout(() => modal.style.display = "none", 500);
        });
    });

    // Scroll-to-top gomb
    const toTop = document.querySelector(".to-top");

    if (toTop) {
        // Alap stílus beállítása
        toTop.style.opacity = "0";
        toTop.style.visibility = "hidden";
        toTop.style.transition = "opacity 0.3s ease, visibility 0.3s ease";

        // Görgetés figyelése
        window.addEventListener("scroll", function () {
            if (window.scrollY >= 800) {
                toTop.style.opacity = "1";
                toTop.style.visibility = "visible";
            } else {
                toTop.style.opacity = "0";
                toTop.style.visibility = "hidden";
            }
        });

        // Kattintás: lap tetejére
        toTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Hamburger menü
    const hamburger = document.querySelector(".hamburger-menu");
    const mainMenu = document.querySelector(".hamburger-main-menu");
    const hamburgerIcon = hamburger.querySelector("i");

    hamburger.addEventListener("click", function () {
        if (mainMenu.style.display === "block") {
            mainMenu.style.display = "none";
        } else {
            mainMenu.style.display = "block";
        }
        hamburger.classList.toggle("open");
        hamburgerIcon.classList.toggle("fa-bars");
        hamburgerIcon.classList.toggle("fa-times");
    });

    // Almenü toggle
    document.querySelectorAll(".hamburger-main-menu > li").forEach(li => {
        const submenu = li.querySelector(".hamburger-submenu");
        const link = li.querySelector("a");
        if (submenu && link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelectorAll(".hamburger-submenu").forEach(s => {
                    if (s !== submenu) s.style.display = "none";
                });
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });
        }
    });

    // Resize - reset menu
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1200) {
            mainMenu.removeAttribute("style");
            document.querySelectorAll(".hamburger-submenu").forEach(sub => sub.removeAttribute("style"));
            hamburger.classList.remove("open");
            hamburgerIcon.classList.remove("fa-times");
            hamburgerIcon.classList.add("fa-bars");
        }
    });

    // Hover animáció
    document.querySelectorAll(".special-treatments").forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Session warning
    const sessionTimeout = 900000;
    const warningTime = sessionTimeout - 120000;

    setTimeout(() => {
        alert("A munkamenet 2 percen belül lejár. Kattintson bárhová az oldalon a hosszabbításhoz.");
    }, warningTime);

    // Session frissítés
    document.addEventListener("click", function () {
        fetch("../config/refresh_session.php");
    });
});