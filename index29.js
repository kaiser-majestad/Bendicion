var tiempoRestante = 60;
var intervalo;

function iniciarTemporizador() {
    clearInterval(intervalo);//aqui si me ayude con san google
    intervalo = setInterval(function() {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            document.getElementById('temporizador').textContent = tiempoRestante;
        } else {
            clearInterval(intervalo);//aqui tambien
            alert('¡Tiempo terminado!');
        }
    }, 1000);
}

document.getElementById('iniciar-temporizador').onclick = iniciarTemporizador;
//el resto ya a conciencia