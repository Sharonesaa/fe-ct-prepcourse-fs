function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if ( numeros.length === 0){
    return null;
  }else {
    var expectLength = numeros[numeros.length-1]-numeros[0]+1;
    var realLen = numeros.length;
    if( realLen === expectLength){
      return null
    } else {
      var j = numeros[0];
      for ( var i = 0; i < numeros.length; i++){
        if (numeros[i] !== j ){
          return j; 
        }
        j += 1
      }  
    }
  }
}

module.exports = encontrarNumeroFaltante;