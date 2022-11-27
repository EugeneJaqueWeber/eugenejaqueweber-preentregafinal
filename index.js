const nombre = prompt (`ingrese un nombre de usuario`)

let usuarioIngresado = prompt (`ingrese un usuario`)
    const usuario = "eugenejaqueweber"
let contraseñaIngresada = prompt (`ingrese una contraseña`)
    const contraseña = 1234567

if ( usuarioIngresado === usuario ) {
    alert ("ah ingresado correctamente el usuario")
    console.log ("ah ingresado correctamente el usuario")
} else {
    alert ("ah ingresado erroneamente el usuario")
    console.log ("ah ingresado erroneamente el usuario")
}
if ( Number (contraseñaIngresada) === contraseña ) {
    alert ("ah ingresado correctamente la contraseña")
    console.log ("ah ingresado correctamente la contraseña")
} else {
    alert ("ah ingresado erroneamente la contraseña")
    console.log ("ah ingresado erroneamente la contraseña")
}
if ( usuarioIngresado === usuario && Number (contraseñaIngresada) === contraseña ) {
    alert (`¡Bienvenido a mi pagina, ${nombre}!`)
} else {
    alert ("ah ingresado erroneamente el usuario y la contraseña")
}

const usuarioCorrecto = "eugenej@queweber" 

console.log (usuarioIngresado.length)
for ( let i = 0; i < usuarioIngresado.length; i++ ) {
    console.log (i)
    console.log (usuarioIngresado[i]) }


   if ( usuarioIngresado === usuarioCorrecto ) {
       alert ("usuario correctamente ingresado")
   }  else  {
       alert ("usuario incorrectamente ingresado")
       let nuevoUsuario = prompt ("ingrese un nuevo usuario, recuerde que debe tener un @.")
                   if ( nuevoUsuario === usuarioCorrecto ) {
                       alert ("has ingresado correctamente el usuario nuevo")
                   } else {
                       alert ("has ingresado incorrectamente el usuario nuevo, porfavor reinicia la pagina y vuelve a colocar el usuario desde el inicio")
                   }
}   


const lectorDeContraseña = 8

if ( contraseñaIngresada.length >= lectorDeContraseña ) {
    alert ("tu contraseña es segura")
} else {
    alert ("tu contraseña es insegura, no cumple con los 8 caracteres")
    const nuevaContraseña = prompt ("desea cambiarla? coloque no si decide -no- hacerlo.") 
    if ( nuevaContraseña.length >= lectorDeContraseña ) {
        alert ("tienes una contraseña nueva")
    } else {
        alert ("al no ingresar una nueva contraseña, recuerda que es insegura")
    }
}