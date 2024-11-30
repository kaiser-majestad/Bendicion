let numeros = [2, 5, 8, 13, 10];
let sumaPares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    sumaPares += numeros[i];
  }
}

console.log("Suma de números pares:", sumaPares);
