let numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
  let numero = (i * 7 + 3) % 100 + 1; 
  numerosAleatorios.push(numero);
}

console.log("Array de números pseudoaleatorios:", numerosAleatorios);
