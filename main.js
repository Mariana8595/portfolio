/*boton*/
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleSwitch');
    
    toggleSwitch.addEventListener('click', () => {
        if (toggleSwitch.classList.contains('off')) {
            toggleSwitch.classList.remove('off');
            toggleSwitch.classList.add('on');
        } else {
            toggleSwitch.classList.remove('on');
            toggleSwitch.classList.add('off');
        }
    });

    // Inicializar el estado
    toggleSwitch.classList.add('off');
})
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

