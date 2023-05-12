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




