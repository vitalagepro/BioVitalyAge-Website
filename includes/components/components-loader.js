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
    $("#footer-placeholder").load("/BioVitalyAge-Website/includes/components/Footer/footer.html", function () {
        // ✅ Imposta l’anno dinamico
        const yearSpan = document.getElementById("current-year");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    
        // ✅ (facoltativo) effetto animazione sugli h3 del footer
        const footerH3 = document.querySelectorAll('#footer-placeholder h3');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fade-in 2s forwards';
                }
            });
        }, { threshold: 0.1 });
    
        footerH3.forEach(h3 => observer.observe(h3));
    });
});
