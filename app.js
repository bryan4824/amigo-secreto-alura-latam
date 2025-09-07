// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

//agregar amigos al array
document.getElementById("button-add").addEventListener("click", () => {
    const nombre = document.getElementById("amigo").value
    // validar que el input no este vacio
    if(nombre ===""){
        alert("Por favor ingresa un nombre")
        return
    }else{
        const nuevoAmigo = {nombre}// esto es igual a {nombre: nombre} y hace un objeto
        amigos.push(nuevoAmigo)// agrega el objeto al array
    }

})
 
//vaciar el input despues de agregar un amigo
document.getElementById("button-add").addEventListener("click", () => {
    document.getElementById("amigo").value = ""
})