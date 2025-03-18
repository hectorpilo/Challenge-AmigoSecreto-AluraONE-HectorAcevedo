// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // 2. Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    
    // 3. Validar que no exista el nombre
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert('Este nombre ya existe en la lista');
        inputAmigo.value = '';
        return;
    }
    
    // 4. Actualizar el array de amigos
    amigos.push(nombre);
    
    // 5. Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // 6. Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente
    lista.innerHTML = '';
    
    // 3. Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear y agregar elementos a la lista
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo');
        return;
    }
    
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `¡${amigoSeleccionado} es tu amigo secreto!`;
    resultado.appendChild(li);
}
