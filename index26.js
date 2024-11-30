const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const error = document.getElementById('error');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = email.value;

    if (!emailValue || !emailValue.includes('@')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        alert('Email enviado correctamente');
    }
});
