// Animación de títulos
const titles = document.querySelectorAll('.title-animation');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: entry.target,
                opacity: 1,
                translateY: 0,
                duration: 1000,
                easing: 'easeOutExpo',
                delay: entry.target.tagName === 'H3' ? 300 : 0, // Pequeño retraso para los H3
            });
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

titles.forEach(title => {
    observer.observe(title);
});

// ---  Código para el efecto de la barra de navegación ---
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Cambia 50 por la cantidad de píxeles que quieres que se desplace antes de aplicar el efecto
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Código para la validación del formulario ---
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    let isValid = true;

    // Validación del campo Nombre
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, introduce tu nombre.';
        isValid = false;
        nameInput.classList.add('border-red-500'); // Tailwind: borde rojo
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('border-red-500');
    }

    // Validación del campo Correo Electrónico
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Por favor, introduce tu correo electrónico.';
        isValid = false;
        emailInput.classList.add('border-red-500');
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        isValid = false;
        emailInput.classList.add('border-red-500');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('border-red-500');
    }

    // Validación del campo Mensaje
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Por favor, introduce tu mensaje.';
        isValid = false;
        messageInput.classList.add('border-red-500');
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('border-red-500');
    }

    // Si el formulario es válido, se puede enviar (aquí iría el código para enviar el formulario)
    if (isValid) {
        //  Aquí, en lugar de este alert, normalmente enviarías el formulario a un servidor
        //  usando AJAX (fetch o XMLHttpRequest) o dejarías que el formulario se envíe
        //  de forma tradicional (si tienes un backend configurado para manejarlo).
        alert('¡Formulario enviado con éxito!');
        contactForm.reset(); // Limpia el formulario después del envío (opcional).
    }
});
