let numeros = [1, 2, 3, 2, 4, 5, 1];
let duplicados = [];

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] === numeros[j] && !duplicados.includes(numeros[i])) {
      duplicados.push(numeros[i]);
    }
  }
}

console.log("Duplicados:", duplicados);
