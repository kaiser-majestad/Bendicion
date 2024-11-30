let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinado = [];

for (let i = 0; i < array1.length; i++) {
  combinado.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
  combinado.push(array2[i]);
}

console.log("Array combinado:", combinado);
