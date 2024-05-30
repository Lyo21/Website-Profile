/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav_menu a');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    this.classList.add('active-link');
}

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab_active');
        });

        target.classList.add('tab_active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab_active');
        });
        
        tab.classList.add('tab_active');
    });
});
/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactTelepon = document.getElementById('contact-telepon'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // chech if the field has a value
        if(
            contactName.value === '' || 
            contactEmail.value === '' ||
            contactTelepon.value === '' || 
            contactSubject.value === '' || 
            contactMessage.value === '' 
        ) {
            // show message
            errorMessage.textContent = 'Harap isi semua kolom'
        }

        else {
            // serviceID - templateID - #form - publickey
            emailjs.sendForm(
                'service_j8or02k',
                'template_3li8y4h',
                '#contact-form',
                '4L5iNOIv1wcq5Bsbv'
            ).then(() => {
                // show message and add color, window + dot to open emoji
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message sent ✔';

                //remove message after 5 seconds
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPs! Halaman ini sedang ERROR...', error);
            }
        );

        //clear input fields
        contactName.value = '';
        contactEmail.value = '';
        contactTelepon.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
        }
    };

    contactForm.addEventListener('submit', sendEmail);

    /*=============== LIGHT MODE =============== */
    function toggleDarkMode() {
        const body = document.body;
        const logo = document.querySelector('.nav_logo img');
    
        // Toggle dark mode class
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    
        // Update logo based on mode
        if (body.classList.contains('light-mode')) {
            logo.src = 'assets/img/logo_Megumi_persegi_panjang-removebg-preview.png'; // Gambar untuk light mode
        } else {
            logo.src = 'assets/img/LOGO MEGUMI PANJANG.png'; // Gambar untuk dark mode
        }
    }