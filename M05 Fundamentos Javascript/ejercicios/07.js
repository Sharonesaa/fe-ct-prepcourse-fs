function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
  
}

var resultado = esTipoDato();
console.log(resultado);

module.exports = esTipoDato;
