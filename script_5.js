// Condicionales - if/else

// Algoritmo que dependiendo si el o la usuaria son mayor de 18 años habilita un catalogo de peliculas violentas
// Si el pais es china asi sea mayor de 18 no habilite el catalogo

let age = prompt("Ingrese su edad");
let country = prompt("Ingresa tu pais");

if (age >= 18 && country != "china" ) {
  alert("Se ha desbloquado el catalogo de pelis violentas");
} else {
  alert("No tienes permisos para ver este catalogo");
}

/**
 * Operadores de comparación (operadores logicos se suelen nombrar)
 *
 * > : Indicar que es mayor a algo
 * < : indicar que es menor a algo
 * == : comparar si un valor es igual al otro
 * >= : Si es mayor o igual
 * <= : si es menor o igual
 * != : diferente
 *
 * Operadores logicos
 * &&: Y
 * ||: O
 */