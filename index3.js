let numeros = [10, 5, 8, 20, 15];
let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}

console.log("El número más grande es:", maximo);
