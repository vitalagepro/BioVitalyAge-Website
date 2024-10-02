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
