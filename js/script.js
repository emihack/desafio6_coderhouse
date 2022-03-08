//simulador obtiene datos para la renovación de una póliza
alert("INGRESÁ LOS DATOS PARA RENOVAR LA PÓLIZA DE TU VEHÍCULO")

class seguros{
    constructor(nombre, patente ,vencimiento){

        this.nombre = nombre;
        this.patente = patente;
        this.vencimiento = vencimiento;

    }
}

let renovacionPoliza= [];
//for
for (let i =0; i < 1; i++){
    //info base de datos
    let nombre = prompt("Ingrese el nombre y apellido del asegurado").toUpperCase();
    let patente = prompt("Ingrese la patente del vehículo asegurado").toUpperCase();
    let vencimiento = prompt("Ingrese la fecha de vencimiento de su póliza").toUpperCase();

    renovacionPoliza.push(new seguros (nombre, patente, vencimiento));

    
}
console.table(seguros);

//for...of
for (let seguros of renovacionPoliza){
    document.write("<br>" +"El nombre del asegurado es: "+ seguros.nombre + "<br>");
    document.write("la patente del vehículo es " + seguros.patente + "<br>");
    document.write("El vencimiento de tu póliza es el día: " + seguros.vencimiento + "<br>");
    console.log("<br>" +"El nombre del asegurado es: "+ seguros.nombre + "<br>");
    console.log("la patente del vehículo es " + seguros.patente + "<br>");
    console.log("El vencimiento de tu póliza es el día: " + seguros.vencimiento + "<br>");

  
}












