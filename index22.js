document.getElementById('mi-input').oninput = function() {
    document.getElementById('texto-en-tiempo-real').textContent = this.value;
  };
  