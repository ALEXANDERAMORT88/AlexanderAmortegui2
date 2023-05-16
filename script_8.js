// Pedimos al usuario que ingrese el número de llantas y el medio de transportType
let numOfWheels = parseInt(prompt("Ingrese el número de llantas:"));
let transportType = prompt("Ingrese el medio de transportType:").toLowerCase();

// numCarTires == 0 || transportType == ""
if (numCarTires != NaN && transportType != "") {
  if (numOfWheels == 4 && transportType == "terreste") {
    alert("El medio de transportType es un automovil.");
  } else if (numOfWheels > 4 && transportType == "terreste") {
    alert("El medio de transportType es un camion.");
  } else if (numOfWheels == 2 && transportType == "terreste") {
    alert("El medio de transportType es una moto o bicicleta.");
  } else if (numOfWheels == 1 && transportType == "terreste") {
    alert("El medio de transportType es un monociclo.");
  } else if (numOfWheels == 0 && transportType == "acuatico") {
    alert("El medio de transportType es un barco.");
  } else if (numOfWheels == 20 && transportType == "aereo") {
    alert("El medio de transportType es un avion.");
  } else {
    alert("No se pudo identificar el medio de transportType.");
  }
} else {
  alert("falta alguno de los datos");
}