let palabra = "hola";
let invertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
  invertida += palabra[i];
}

console.log("La palabra invertida es:", invertida);
