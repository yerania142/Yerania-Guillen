let estudiantes=[];
window.onload = cargarDesdeLocalStorage;
function cargarArreglo(){


let nombre=document.getElementById('nombre').value
let identidad=document.getElementById('identidad').value
let edad=document.getElementById('edad').value
let carrera=document.getElementById('carrera').value
if( nombre==='' ||identidad===''|| edad===''|| carrera===''){
    alert ("debe llenar todos los campos")
    return
}
estudiantes.push({nombre,identidad,edad,carrera})
console.log(estudiantes)
document.getElementById('nombre').value=''
document.getElementById('identidad').value=''
document.getElementById('edad').value=''
document.getElementById('carrera').value=''
mostrarEstudiantes()


}

function mostrarEstudiantes(){
    let tabla= document.getElementById('estudiantes')
    tabla.innerHTML=`
     <tr>
    <th width="20%">Nombre</th>
    <th width="20%">Identidad</th>
    <th width="20%">Edad</th>
    <th width="20%">Carrera</th>

  </tr>`;
  estudiantes.forEach((estudiante)=>{
    let fila=`

        <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.identidad}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.carrera}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}
 
function buscarEstudiante(){
    let busquedaId = document.getElementById('identidad').value;
    if(busquedaId === ''){
        alert("Debe ingresar el número de identidad");
        return;
    }

    let encontrado = estudiantes.find(est => est.identidad === busquedaId);
    
    if(encontrado){
        document.getElementById('nombre').value = encontrado.nombre;
        document.getElementById('edad').value = encontrado.edad;
        document.getElementById('carrera').value = encontrado.carrera;
    } else {
        alert("Estudiante no encontrado");
    }
}
function actualizarEstudiante(){
    let nombreN=document.getElementById('nombre').value
    let identidad=document.getElementById('identidad').value
    let edadN=document.getElementById('edad').value
    let carreraN=document.getElementById('carrera').value
  if(identidad===''|| nombreN==='' || edadN==='' || carreraN===''){
alert('Debe llenar todos los Campos');
return;
  }
  let indice = estudiantes.findIndex(est => est.identidad === identidad);
  console.log(indice)
  if (indice !== -1) {
   
      estudiantes[indice] = { nombre: nombreN, identidad: identidad, edad: edadN, carrera: carreraN };
      mostrarEstudiantes();
      guardarEnlocalStorage();
      mostrarEstudiantes()
      alert('El estudiante ha sido actualizado correctamente');
  } else {
      alert('Estudiante no encontrado');
  }
}
function eliminarEstudiante(){
    let identidad=document.getElementById('identidad').value
if(identidad===''){
   alert('debe llenar el campo identidad')
   return;
}
let indice = estudiantes.findIndex(est => est.identidad === identidad);
if (indice !== -1) {
    estudiantes.splice(indice,1);
    let nombreN=document.getElementById('nombre').value=''
    let identidad=document.getElementById('identidad').value=''
    let edadN=document.getElementById('edad').value=''
    mostrarEstudiantes()
    alert('el estudiante ha sido Borrado Correctamente');
}else{
    alert('Estudiante no encontrado')
}
}
function guardarEnlocalStorage(){
localStorage.setItem("estudiantes", JSON.stringify(estudiantes));


}
function cargarDesdeLocalStorage(){
let datorGuardados = localStorage.getItem("estudiantes");
if (datorGuardados) {
estudiantes = JSON.parse(datorGuardados);
mostrarEstudiantes();


   }
}