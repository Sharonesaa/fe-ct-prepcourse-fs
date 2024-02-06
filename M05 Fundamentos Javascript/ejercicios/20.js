function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  const letraMin = letra.toLowerCase();
  if (typeof letra === 'string' && letra.length == 1){
    if( ['a', 'e', 'i', 'o', 'u'].includes(letraMin)){
      return "Es vocal";
    }
  }
return "Dato incorrecto";
}

module.exports = esVocal;
