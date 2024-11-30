let numeros = [5, 12, 8, 20, 15];
let mayores = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    mayores.push(numeros[i]);
  }
}

console.log("Números mayores a 10:", mayores);
