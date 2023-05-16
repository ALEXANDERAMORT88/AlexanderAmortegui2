let day = prompt("Ingresa un día").toLowerCase(); //Martes - MARTES - MaRTES  (martes)

if (day == "sabado" || day == "domingo") {
    alert("Es un fin de semana");
} else {
    if (day == "lunes" || day == "martes" || day == "miercoles" || day == "jueves" || day == "viernes") {
        alert("Es un día entre semana");
    } else {
        alert("Favor ingrese es un día de la semana");
    }
}