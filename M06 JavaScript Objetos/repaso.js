function crearGato(nombre, edad) {
    var nuevoObjeto ={"nombre":nombre, "edad":edad};
    nuevoObjeto.meow=function(){
        return "Meow!"
    }
}

function nuevoUsuario(nombre, email, password) {
    var objeto={"nombre":nombre, "email":email, "password":password};
    return objeto
}

function agregarPropiedad(objeto, propiedad) {
objeto[propiedad]=null;
return objeto;
}

function invocarMetodo(objeto, metodo) {
    metodo[objeto]()
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    var resultado= (objetoMisterioso.numeroMisterioso)*5;
    return resultado;
}

function eliminarPropiedad(objeto, propiedad) {
    // El parámetro "propiedad" es una propiedad del objeto que recibes.
    // Debes eliminarla del objeto y retornarlo finalmente.
    // Tu código:
delete objeto[propiedad];
return objeto;
}

function tieneEmail(objetoUsuario) {
  if (objetoUsuario.email) return true;
  return false
}

function tienePropiedad(objeto, propiedad) {
   return objeto.hasOwnProperty("propiedad");
}

function verificarPassword(objetoUsuario, password) {
if (objetoUsuario.password === password) return true;
return false
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
    objetoUsuario.password=nuevaPassword;
    return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
    objetoUsuario.amigos.push(nuevoAmigo);
    return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
for (i=0; i<objetoMuchosUsuarios.length;i++){ 
objetoMuchosUsuarios[i].esPremium=true;
}
return objetoMuchosUsuarios
}

function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
suma=0
for (i=0; i<objetoUsuario.posts.length;i++){ 
 suma +=objetoUsuario.posts[i].likes;
} 
return suma;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
    objetoProducto.calcularPrecioDescuento= function(){
        var precioFinal=this.precio-(this.precio*this.porcentajeDeDescuento);
        return precioFinal;
    } 
    return objetoProducto;
}

