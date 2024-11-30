const toggleBoton = document.getElementById('toggle-boton');
const elemento = document.getElementById('elemento');

toggleBoton.addEventListener('click', () => {
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
});
