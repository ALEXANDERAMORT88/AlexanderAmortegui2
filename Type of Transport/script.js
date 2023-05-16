alert("selecciona el numero de llantas para transporte Terrestre: entre 1 y 20, para Aereo: 20, y Acuatico: 0");

let numTires = parseInt(prompt("Ingresa el numero de LLantas"));

// if (numTires >= 1 && numTires <= 19) {
//     alert("El Tipo de Trasnporte es Terrestre");
// } else {
//     if (numTires == 0) {
//         alert("ElRipo de Transporte es Acuatico");
//     } else {
//         if(numTires == 20){
//             alert("El de Transporte es Aereo");
//         };
//     };
// };

let typeTransport = prompt("Ingresa el tipo de Transporte").toLocaleLowerCase();

console.log(numTires, typeTransport )

if (numTires == NaN || typeTransport != "") {
    if (typeTransport === "terrestre") {
        if (numTires == 1) {
            alert("El tipo de Transporte que escojiste es: MONOCICLO");
        } else {
            if (numTires == 2) {
                alert("El tipo de Transporte que escojiste es: MOTO Ó BICICLETA");
            } else {
                if (numTires == 4) {
                    alert("El tipo de Transporte que escojiste es: AUTOMOVIL");
                } else {
                    if (numTires > 4 && numTires <= 19) {
                        alert("El tipo de Transporte que escojiste es: CAMION");
                    }else{
                        alert("No has ingresado un Dato correcto");
                    };
                };
            };
        };
    } else {
        if (typeTransport == "acuatico") {
            if(numTires == 0){
                alert("El tipo de Transporte que escojiste es: BARCO");
            }
        } else {
            if(typeTransport == "aereo"){
                if(numTires == 20){
                    alert("El tipo de Transporte que escojiste es: AVION");
                };
            };
        };
    };
} else {
    alert("No has ingresado un Dato correcto");
}