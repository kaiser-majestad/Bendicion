function mayoresQue(array, numero) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > numero) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
  
  console.log(mayoresQue([5, 10, 15, 20], 12)); 
  