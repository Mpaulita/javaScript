// Switch
let expr ="Maracuya"
switch(expr){
    case "Naranja":
        console.log("Son Naranjas :D")
        break;
    case "Lulo":
        console.log("Son Lulos :D")
        break;
    default:
        console.log("No es ni Naranja ni Lulo :(")
    break;
}

// While
let contador=0;
while (contador<10){
    console.log(contador)
    contador++;
}

// Do- While
let counter =0
do{
    console.log(counter)
    counter ++;
}while (counter<10);

// For
let frutas=["apple","orange","watermelon","grape"]
for (let i=0; i<frutas.length; i++){
    console.log(frutas[i])
}

// For-In -> OBJETOS
const listCompras={
    yuca:5,
    arroz:43,
    papa:34,
    zanahoria:23
}

for(lista1 in listCompras){
    console.log(lista1);
}
// Concatenar
for(lista1 in listCompras){
    console.log(`${lista1}: ${listCompras[lista1]}`);
}

// For-Of -> ARREGLOS
let listaCompras= ["Frijol","Carne","Leche","Pulpa"]
for (lista2 of listaCompras){
    console.log(lista2)
}