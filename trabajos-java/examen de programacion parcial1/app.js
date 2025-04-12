let Inventario = [];
window.onload = cargarDesdelocalstorage;
function cargarArticulo() {


    let articulo = document.getElementById('articulo').value
    let codigo = document.getElementById('codigo').value
    let entrada= document.getElementById('entrada').value
    let salida = document.getElementById('salida').value
    if (articulo === '' || codigo === '' || entrada === '' || salida === '') {
        alert("debe llenar todos los campos")
        return
    }
    Inventario.push({ articulo, codigo, entrada, salida })
    console.log(Inventario)
    document.getElementById('articulo').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('entrada').value = ''
    document.getElementById('salida').value = ''
    mostrarInventario()


}

function mostrarInventario() {
    let tabla = document.getElementById('Inventario')
    tabla.innerHTML = `
     <tr>
    <th width="20%">articulo</th>
    <th width="20%">codigo</th>
    <th width="20%">entrada</th>
    <th width="20%">salida</th>

  </tr>`;
    Inventario.forEach((Inventario) => {
        let fila = `
    <tr>
        <td>${Inventario.articulo}</td>
        <td>${Inventario.codigo}</td>
        <td>${Inventario.entrada}</td>
        <td>${Inventario.salida}</td>
    </tr>`;
        tabla.innerHTML += fila;
    });
}


function actualizarArticulo() {

    let articulo = document.getElementById('articulo').value
    let codigo = document.getElementById('codigo').value
    let entrada= document.getElementById('entrada').value
    let salida = document.getElementById('salida').value
    if (articulo === '' || codigo === '' || entrada === '' || salida === '') {
        alert("debe llenar todos los campos")
        return
    }
    let indice = Inventario.findIndex(est => est.articulo === articulo);
    console.log(indice)
    if (indice !== -1) {
     
       Inventario[indice] = { articulo: articulo, codigo: codigo, entrada: entrada, salida: salida };
        mostrarInventario();
        guardarEnlocalstorage();
        mostrarInventario()
        alert('El Articulo  ha sido actualizado correctamente');
    } else {
        alert('Articulo no encontrado');
    }
}
function eliminarArticulos(){
    let articulo = document.getElementById('articulo').value

if(articulo===''){
    alert('debe llenar el campo articulo');
    return;

}
let indice = Inventario.findIndex(est => est.articulo === articulo);
if (indice !== -1) {
    Inventario.splice(indice,1);
    document.getElementById('articulo').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('entrada').value = ''
    document.getElementById('salida').value = ''
    mostrarInventario()
    alert('el articulo ha sido Borrado');

}else{
    alert('articulo no encontrado')
}
}
function guardarEnlocalstorage(){
localStorage.setItem("Inventario",JSON.stringify(Inventario));

}
function cargarDesdelocalstorage(){
let datosGuardado = localStorage.getItem("Inventario");
if (datosGuardado){
    Inventario = JSON.parse(datosGuardado);
    mostrarInventario();
}




}
function buscarEstudiante() {
    let busquedaId = document.getElementById('codigo').value;
    if (busquedaId === '') {
        alert("Debe ingresar el codigo");
        return;
    }

    let encontrado = Inventario.find(est => est.codigo === busquedaId);

    if (encontrado) {
        document.getElementById('articulo').value = encontrado.articulo;
        document.getElementById('codigo').value = encontrado.codigo;
        document.getElementById('entrada').value = encontrado.entrada;
        document.getElementById('salida').value = encontrado.salida;
    } else {
        alert("no encontrado");
    }
}