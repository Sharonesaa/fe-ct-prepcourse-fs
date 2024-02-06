function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  sumArray = 0;
  for ( var i= 0; i < arrayOfNums.length; i++){
    sumArray = sumArray + arrayOfNums[i] ;
  }
  return sumArray;
}

module.exports = agregarNumeros;
