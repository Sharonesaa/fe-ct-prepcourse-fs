function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var getMayusculas = array.map(function(elementos) {
    return elementos .toUpperCase();
  })
  return getMayusculas;
    
  }


module.exports = convertirStringAMayusculas;
