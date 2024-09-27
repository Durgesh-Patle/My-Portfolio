document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    // Toggle Icon Navbar
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Scroll Sections
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const offsetTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
                // Active navbar link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(sectionId)) {
                        link.classList.add('active');
                    }
                });

                // Add animation class
                section.classList.add('show-animate');
            } else {
                section.classList.remove('show-animate');
            }
        });

        // Sticky header
        header.classList.toggle('sticky', scrollPosition > 100);

        // Remove toggle icon and collapse navbar when a link is clicked
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    // Collapse navbar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
});
