let numeros = [5, 3, 8, 1, 4];

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] > numeros[j]) {
      let temp = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = temp;
    }
  }
}

console.log("Array ordenado:", numeros);
