let palabras = ["hola", "mundo", "hola", "javascript", "hola"];
let palabraABuscar = "hola";
let contador = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i] === palabraABuscar) {
    contador++;
  }
}

console.log(`La palabra "${palabraABuscar}" aparece ${contador} veces.`);
