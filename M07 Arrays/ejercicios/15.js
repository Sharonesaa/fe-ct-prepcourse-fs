function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var j = array[1];
  for(var i= 0; i < array.length; i++){
    if (j === array[i]){
      return true;
    }
    return false;
  }
}

module.exports = todosIguales;
