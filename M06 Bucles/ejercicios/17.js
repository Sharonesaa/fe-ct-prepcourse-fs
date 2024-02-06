function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  var whatColor = "";
  switch(color){
    case "blue":
      whatColor = "This is "+  color;
      break;
    case "red":
      whatColor = "This is "+ color;
      break;
    case "green":
      whatColor = "This is "+ color;
      break;
    case "orange":
      whatColor = "This is "+ color;
      break;
    default:
      whatColor = "Color not found";
      break;
  }
  return whatColor;
}

module.exports = colors;
