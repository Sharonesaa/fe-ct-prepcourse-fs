function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (var i = 0; i < numeros.length; i++) {
    if (numeros.slice(i + 1).includes(numeros[i])) {
      return numeros[i];
    }
  }
return undefined;
}



module.exports = encontrarElementoRepetido;