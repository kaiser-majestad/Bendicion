function cambiarColor() {
    var colorSeleccionado = document.getElementById('color-select').value;
    document.body.style.backgroundColor = colorSeleccionado;
}

document.getElementById('color-select').onchange = cambiarColor;
