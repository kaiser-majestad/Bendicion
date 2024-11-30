document.getElementById('añadir-elemento').onclick = function() {
    var nuevoElemento = document.getElementById('elemento').value;
    if (nuevoElemento) {
      document.getElementById('mi-lista').innerHTML += '<li>' + nuevoElemento + '</li>';
      document.getElementById('elemento').value = ''; 
    }
  };
  