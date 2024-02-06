function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var cleanstring = string.replace(/ /g, "").toLowerCase();
  var j = cleanstring.length - 1;
for(var i = 0; i < cleanstring.length; i++) {
  if (cleanstring [i] !== cleanstring[j])return false;
  j--;
}
return true;
}

module.exports = esPalindromo;
