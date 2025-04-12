function agregarDatos(){
    let nombre =prompt("Ingresa tu Nombre");
    let edad =prompt("Ingresa tu Edad");
    let tabla = document.getElementById('TablaPersonas');
    let fila=""
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></tr>`;
    tabla.innerHTML+=fila;
    
    
    
    
    
    
    
    
    
    
    }