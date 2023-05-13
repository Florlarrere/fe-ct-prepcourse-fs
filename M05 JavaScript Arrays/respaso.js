function devolverPrimerElemento(array) {
    return array[0];
}
console.log(devolverPrimerElemento([1,2,3,4]));

function devolverUltimoElemento(array) {
return array [array.length-1];
}
console.log(devolverUltimoElemento([1,2,3,4]));

function incrementarPorUno(array) {
    for (i=0; i< array.length ;i++) {
     array [i] +=1; 
    }
    return array
}
console.log(incrementarPorUno([1,2,3])); 


function dePalabrasAFrase(palabras) {
   return palabras.join(' ');
     }
console.log(dePalabrasAFrase(["hola","mundo!"]));


function arrayContiene(array, elemento) {
    return array.includes(elemento);
 }
 console.log(arrayContiene([1,2,3],3));
 console.log(arrayContiene(["hola"],"o"));
 console.log(arrayContiene(["o"],"o"));


function agregarNumeros(arrayOfNums) {
    var resultado= 0
for (i=0; i<arrayOfNums.length;i++){
    arrayOfNums[i]+= resultado;
}
return resultado;

function promedioResultadosTest(resultadosTest) {
    var resultado=0
    for(let i=0;i<resultadosTest.length;i++){
        resultado+=resultadosTest[i]
    }
    return resultado/resultadosTest.length;
}
console.log(promedioResultadosTest([2,3,4,5,7]));

function numeroMasGrande(arrayOfNums) {
    var elMasGrande= arrayOfNums[0]  // hacemos de cuenta que el valor mas grande es el de la posición 0
    for (i=1;i<arrayOfNums.length;i++){
        if (arrayOfNums[i] >elMasGrande) {
            elMasGrande = arrayOfNums[i]
        }
    }
    return elMasGrande;
}
console.log(numeroMasGrande([2,8,6]))

function multiplicarArgumentos() {
    if (arguments.length===0) return 0;
    if (arguments.length===1) return arguments[0];
   
    var resultado= 1; // MUY IMPORTANTE PONER 1, PORQUE SI PONGO 0 ME VA A RETORNAR SIEMPRE 0 PORQ CUALQUIER NUMERO MULTIPLICADO POR 0 ES 0.
    for (i=0; i<arguments.length;i++){
       resultado *= arguments[i];
    }
    return resultado
   }
   
   console.log(multiplicarArgumentos(2,4,23));


   function cuentoElementos(array) {
    var mayoresA18= [] //ACA VOY A IR GUARDANDO LOS ARRAY QUE SEAN MAYORES QUE 18
    for ( let i=0; i<array.length;i++){
        if (array[i]>18){
         mayoresA18.push (array[i]);
}
}
return mayoresA18.length;   //COMO QUEREMOS LA CANTIDAD DE ELEMENTOS Y NO CUALES SON LOS ELEMENTOS, PONEMOS .LENGHT
}

console.log(cuentoElementos([10, 10, 18, 21]));


function diaDeLaSemana(numeroDeDia) {
    if (numeroDeDia===1 || numeroDeDia===7){
    return "Es fin de semana";
} else (numeroDeDia===2 || numeroDeDia===3 || numeroDeDia===4 || numeroDeDia===5 || numeroDeDia===6)
    return "Es dia laboral";
}

console.log(diaDeLaSemana(4))

function empiezaConNueve(num) {
    if (num.toString()[0]==="9") return true; // tengo que convertirlo en una string para poder analizar las posiciones. Entonces seria
    return false; // si la string en la posición 0 es nueve retorname true.
 }
 console.log(empiezaConNueve(98));

 //OTRA FORMA SERIA MAS SENCILLA
 return num.toString().startsWith("9");
 
 
 function todosIguales(array) {
 let iguales = array[0]; // le cargo la posición 0 del array que lo uso para comparar cada elemento con ese 
 for (let i=0;i<array.length;i++){
     if (array[i]!== iguales){
         return false
 } 
 } return true;
 } 
 
 
 console.log(todosIguales([21, 20, 20, 20]))

 function mesesDelAño(array) {
    var mesesGuardados=[];
    for (let i=0;i<array.length;i++){
        if (array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre");
        mesesGuardados.push(array[i]); //OJO ACA CON PONER RETURN, ES DIRECTAMENTE EL METODO DE INSERCIÓN
    }
    if (mesesGuardados.length===3){
        return mesesGuardados;
    } else {  
        return "No se encontraron los meses pedidos";
    }
  }
    
console.log(mesesDelAño(["Enero"]));

var seis = [] 
    for (i=0; i<=10;i++){ //COMO NO TENGO UN ARRAY PARA RECORRER YO LE PONGO EL LIMITE, ENTONCES EN ESTE CASO HASTA QUE LA I SEA >= A DIEZ SE VA A REPETIR EL BUCLE 
    seis.push(i*6);  //LE VOY A PUSHEAR PARA QUE LO HAGA EN ORDEN CRECIENTE 
    }
    return seis;
     }

     console.log(tablaDelSeis());

     function mayorACien(array) {
        // La función recibe un arreglo con enteros entre 0 y 200.
        // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
        // Tu código:
    
    var cien =[];
    for (let i=0; i<array.length;i++){
        if(array[i]>100){
        cien.push(array[i]);
    }
    }
    return cien;
    }
    
     console.log(mayorACien([100,200,99,140,254,189,30,28]));

     