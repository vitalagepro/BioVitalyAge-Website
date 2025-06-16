function myFunction(x) {
    x.classList.toggle("change");

    const backdrop = document.querySelector('.MobileNavBar-backdrop');
    const navBarMobile = document.getElementById('navBarMobile');

    backdrop.classList.toggle('active');
    navBarMobile.classList.toggle('active');
}




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
            scalator.unobserve(entry.target); 
        }  
    });
}, {
    threshold: 0.1 
});

ImgToScale.forEach(img => {
    scalator.observe(img); 
});

