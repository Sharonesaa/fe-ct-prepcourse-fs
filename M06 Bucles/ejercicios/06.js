function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var numCadena = num.toString();

  if (numCadena.length === 3){
    return true;
  }
  return false;
}

module.exports = tieneTresDigitos;
