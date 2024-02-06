function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  return fecha instanceof Date && !isNaN(fecha);
}

console.log (esFechaValida(25/5/2003))
module.exports = esFechaValida;