const navbar = document.getElementById('navbar');

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
            
        }else{
            halfPageHeight = parseInt((pageHeight * 5) / 100);
        }
       

        if (scrollPosition > halfPageHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
};




document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function() {
        const isActive = this.classList.contains('active');

        // Remove 'active' class from all buttons
        document.querySelectorAll('.accordion-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // If the button was not active before, add 'active', otherwise leave it closed
        if (!isActive) {
            this.classList.add('active');
        }
    });
});




const allh3 = document.querySelectorAll('h3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in 2s forwards';
        }
    });
}, {
    threshold: 0.1 
});

allh3.forEach(h3 => {
    observer.observe(h3);
});


const allImgToTranslate = document.querySelectorAll('.translate-img');

const translator = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'translate 2s forwards';
            translator.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

allImgToTranslate.forEach(img => {
    translator.observe(img); 
});


const ImgToScale = document.querySelectorAll('.scale-img');

const scalator = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scale-animate');
            scalator.unobserve(entry.target); // Stop observing after it has scaled
        }  
    });
}, {
    threshold: 0.1 
});

ImgToScale.forEach(img => {
    scalator.observe(img); 
});
