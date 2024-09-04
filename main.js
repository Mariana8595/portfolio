document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Cargar el tema preferido del localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    } else {
        body.classList.add('light-theme');
    }

    // Cambiar el tema cuando se haga clic en el interruptor
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});

//mail js

const btn = document.getElementById('button');
const form = document.getElementById('form');
const envelopeFront = document.querySelector('.envelope.front');
const envelopeBack = document.querySelector('.envelope.back');
const resultMessage = document.querySelector('.result-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ioyg4kp';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');

            // Añadir clase 'sent' para activar animaciones
            form.classList.add('sent');

            // Opcional: Hacer visible el mensaje de resultado
            resultMessage.style.opacity = 1;
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});

