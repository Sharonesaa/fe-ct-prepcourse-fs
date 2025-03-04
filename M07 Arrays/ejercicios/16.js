function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let buscados = [];
  for (var i = 0; i < array.length; i++){
    if ( array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      buscados.push(array[i]);
    }
  }

  if (buscados.length !== 3){
    return "No se encontraron los meses pedidos"
  }
  return buscados;
}

module.exports = mesesDelAño;
