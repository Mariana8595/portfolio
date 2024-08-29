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
