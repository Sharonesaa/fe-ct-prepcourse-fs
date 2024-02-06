function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var string1 = str1.toLowerCase().replace("","").split("").sort().join("");
  var string2 = str2.toLowerCase().replace("","").split("").sort().join("");
  if (string1 === string2){
    return true;
  }
  return false;
}

module.exports = esAnagrama;
