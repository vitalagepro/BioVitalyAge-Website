$(function () {
    // Carica la navbar
    $("#navbar-placeholder").load("/BioVitalyAge-Website/includes/components/NavBar/navbar.html", function () {
        const navbar = document.getElementById('navbar');
        const navbarMobile = document.getElementById('navBarMobile');

        window.onscroll = function () {
            let HomeContainer;

            if (document.getElementById('Home_Section')) {
                HomeContainer = document.getElementById('Home_Section');
            } else {
                HomeContainer = document.getElementById('Home_Section_secondary');
            }

            if (HomeContainer) {
                let check = HomeContainer.getAttribute('id');
                let halfPageHeight = 0;

                const pageHeight = HomeContainer.offsetHeight;
                const scrollPosition = window.scrollY || document.documentElement.scrollTop;
                if (String(check) == 'Home_Section'){
                    halfPageHeight = parseInt((pageHeight * 25) / 100);
                } else {
                    halfPageHeight = parseInt((pageHeight * 1) / 100);
                }

                if (scrollPosition > halfPageHeight) {
                    navbar.classList.add('scrolled');
                    navbarMobile.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                    navbarMobile.classList.remove('scrolled');
                }
            }
        };
    });

    // Se hai un footer, lo puoi caricare così:
    $("#footer-placeholder").load("footer.html");
});
