const contadorBoton = document.getElementById('contador-boton');
let contador = 0;

contadorBoton.addEventListener('click', () => {
    contador++;
    document.getElementById('contador').textContent = contador;
});
