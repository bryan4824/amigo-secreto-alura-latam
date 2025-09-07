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
        console.log(amigos)
    }

})
 
//vaciar el input despues de agregar un amigo
document.getElementById("button-add").addEventListener("click", () => {
    document.getElementById("amigo").value = ""
})

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = "" // Limpiar la lista antes de mostrar los amigos

    amigos.forEach(amigo => {
        const li = document.createElement("li")
        li.textContent = amigo.nombre
        lista.appendChild(li)
    })
}
// Llama a la función mostrarAmigos cada vez que se agregue un nuevo amigo
document.getElementById("button-add").addEventListener("click", mostrarAmigos)

//Implementa una función para sortear los amigos
function sortearAmigos() {
    let aleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(aleatorio);
    alert(`Tu amigo secreto es: ${aleatorio.nombre}`);
}