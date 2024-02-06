function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var inv = [];
  for (var i = array.length - 1; i >= 0; i--){
    inv.push(array[i]);
  } 
  return inv;
}

module.exports = invertirArray;
