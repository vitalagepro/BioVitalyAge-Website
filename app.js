const navBarLinkage = document.querySelectorAll('.linkage-container a');

navBarLinkage.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault(); 
        let refer = element.getAttribute('refer');
        let scrollSection = document.getElementById(refer);

        if (scrollSection) {
            scrollSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



const navbar = document.getElementById('navbar');
const containers = document.querySelectorAll('.container');

containers.forEach((el) => {
    window.onscroll = function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        const pageHeight = el.offsetHeight;
        const halfPageHeight = parseInt((pageHeight * 30) / 100)

    
        if (scrollPosition > halfPageHeight ) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
});




