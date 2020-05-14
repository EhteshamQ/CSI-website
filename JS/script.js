/* =========================================
                Preloader
============================================ */
/*
$(window).on('load', function () { 
    $('#status').fadeOut();
    $('#preloader').delay(550).fadeOut('slow');
});
*/


/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });
    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/csi-black.png");

            // Show back to top button
            /*$("#back-to-top").fadeIn();*/

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/csi-black.png");

            // Hide back to top button
            /*$("#back-to-top").fadeOut();*/
        }
    }
});
