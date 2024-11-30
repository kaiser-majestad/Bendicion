let claves = ["nombre", "edad", "profesion"];
let valores = ["Nelson David", 18, "Patrullo las Calles soy Batman"];
let objeto = {};

for (let i = 0; i < claves.length; i++) {
  objeto[claves[i]] = valores[i];
}

console.log("Objeto creado:", objeto);
