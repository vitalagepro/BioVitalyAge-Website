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




import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();