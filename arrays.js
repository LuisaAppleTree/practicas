alert("Hola mundo");

//ejemplo de creación de un array a partir de una expresión regular:
// Buscar una d seguida de una o más b y, al final, de otra d
// Recordar las b y la d final
// No distinguir mayúsculas y minúsculas

const miRe = /d(b+)(d)/i
const miArray = miRe.exec('cdbBdbsbz')
console.log(miArray);


//para cambiar longitus de array: 
/* El siguiente ejemplo crea un array mensajes
 con una longitud de 0, y luego asigna valores 
 a mensajes[0] y a mensajes[99], con lo que la
  longitud del array pasa a ser 100.*/
let mensajes = [];
mensajes[0] = "Hola";
mensajes[99] = "mundo";

if (mensajes.length === 100) {
   console.log("La longitud es de 100.");
}


