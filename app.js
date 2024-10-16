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
const HomeContainer = document.getElementById('Home_Section');
console.log(HomeContainer)


window.onscroll = function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        const pageHeight = HomeContainer.offsetHeight;
        const halfPageHeight = parseInt((pageHeight * 25) / 100)

    
        if (scrollPosition > halfPageHeight ) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
};




