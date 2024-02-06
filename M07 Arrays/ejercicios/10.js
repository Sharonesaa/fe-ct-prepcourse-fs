function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  numMayor = array [0];
  indiceMayor = 0;

  for( var i = 0; i <= array.length ; i++){
    if (array[i] > numMayor){
      numMayor = array[i];
      indiceMayor = i;
    }
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
