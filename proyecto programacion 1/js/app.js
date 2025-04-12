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
let Entrada = [];

function guardarArticulo() {
    let Articulos = document.getElementById('Articulos').value;
    let Codigo = document.getElementById('Codigo').value;
    let fecha = document.getElementById('fecha').value;
    let cantidad = document.getElementById('cantidad').value;

    if (Articulos === '' || Codigo === '' || fecha === '' || cantidad === '') {
        alert("Debe llenar todos los campos");
        return;
    }

    Entrada.push({ Articulos, Codigo, fecha, cantidad });
    guardarEnlocalstorage();
    limpiarFormulario();
    mostrarEntrada();
}

function mostrarEntrada() {
    let tabla = document.getElementById('Entrada');
    tabla.innerHTML = `
        <tr>
            <th width="20%">Articulos</th>
            <th width="20%">Codigo</th>
            <th width="20%">Fecha</th>
            <th width="20%">Cantidad</th>
        </tr>`;

    let filas = '';
    Entrada.forEach((item) => {
        filas += `
        <tr>
            <td>${item.Articulos}</td>
            <td>${item.Codigo}</td>
            <td>${item.fecha}</td>
            <td>${item.cantidad}</td>
        </tr>`;
    });
    tabla.innerHTML += filas;
}

function editarArticulos() {
    let Articulos = document.getElementById('Articulos').value;
    let Codigo = document.getElementById('Codigo').value;
    let fecha = document.getElementById('fecha').value;
    let cantidad = document.getElementById('cantidad').value;

    if (Articulos === '' || Codigo === '' || fecha === '' || cantidad === '') {
        alert("Debe llenar todos los campos");
        return;
    }

    let indice = Entrada.findIndex(item => item.Codigo === Codigo);

    if (indice !== -1) {
        Entrada[indice] = { Articulos, Codigo, fecha, cantidad };
        guardarEnlocalstorage();
        mostrarEntrada();
        alert('El Artículo ha sido actualizado correctamente');
    } else {
        alert('Artículo no encontrado');
    }
}

function borrarArticulo() {
    let Codigo = document.getElementById('Codigo').value;

    if (Codigo === '') {
        alert('Debe llenar el campo código');
        return;
    }

    let indice = Entrada.findIndex(item => item.Codigo === Codigo);
    if (indice !== -1) {
        Entrada.splice(indice, 1);
        guardarEnlocalstorage();
        limpiarFormulario();
        mostrarEntrada();
        alert('El artículo ha sido borrado');
    } else {
        alert('Artículo no encontrado');
    }
}

function buscarArticulo() {
    let Codigo = document.getElementById('Codigo').value;

    if (Codigo === '') {
        alert("Debe ingresar el código del artículo");
        return;
    }

    let encontrado = Entrada.find(item => item.Codigo === Codigo);

    if (encontrado) {
        document.getElementById('Articulos').value = encontrado.Articulos;
        document.getElementById('Codigo').value = encontrado.Codigo;
        document.getElementById('fecha').value = encontrado.fecha;
        document.getElementById('cantidad').value = encontrado.cantidad;
    } else {
        alert("Artículo no encontrado");
    }
}

function guardarEnlocalstorage() {
    localStorage.setItem('Entrada', JSON.stringify(Entrada));
}

function limpiarFormulario() {
    document.getElementById('Articulos').value = '';
    document.getElementById('Codigo').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('cantidad').value = '';
}


let Salida = [];
let indiceEdicion = -1; 

function GuardarArticulos() {
    let producto = document.getElementById('producto').value;
    let numero = document.getElementById('numero').value;
    let fechas = document.getElementById('fechas').value;
    let cantidades = document.getElementById('Cantidades').value;

    if (producto === '' || numero === '' || fechas === '' || cantidades === '') {
        alert("Debe llenar todos los campos");
        return;
    }

    if (indiceEdicion === -1) {
      
        Salida.push({ producto, numero, fechas, cantidades });
    } else {
        
        Salida[indiceEdicion] = { producto, numero, fechas, cantidades };
        indiceEdicion = -1; 
    }

    console.log(Salida);
    limpiarFormulario();
    mostrarSalida();
}

function mostrarSalida() {
    let tabla = document.getElementById('Salida');
    tabla.innerHTML = `
     <tr>
        <th width="20%">Código</th>
        <th width="20%">Artículo</th>
        <th width="20%">Fecha</th>
        <th width="20%">Cantidad</th>
        <th width="20%">Acciones</th>
     </tr>`;

    Salida.forEach((articulo, index) => {
        let fila = `
        <tr>
            <td>${articulo.numero}</td>
            <td>${articulo.producto}</td>
            <td>${articulo.fechas}</td>
            <td>${articulo.cantidades}</td>
            <td>
                <button onclick="editarArticulo(${index})">Editar</button>
                <button onclick="borrarArticulo(${index})">Eliminar</button>
            </td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function editarArticulo(index) {
    let articulo = Salida[index];

    document.getElementById('producto').value = articulo.producto;
    document.getElementById('numero').value = articulo.numero;
    document.getElementById('fechas').value = articulo.fechas;
    document.getElementById('Cantidades').value = articulo.cantidades;

    indiceEdicion = index; 
}

function borrarArticulo(index) {
    Salida.splice(index, 1);
    mostrarSalida();
}

function buscarArticulo() {
    let busquedaId = document.getElementById('numero').value;

    if (busquedaId === '') {
        alert("Debe ingresar el código del artículo");
        return;
    }

    let encontrado = Salida.find(articulo => articulo.numero === busquedaId);

    if (encontrado) {
        document.getElementById('producto').value = encontrado.producto;
        document.getElementById('numero').value = encontrado.numero;
        document.getElementById('fechas').value = encontrado.fechas;
        document.getElementById('Cantidades').value = encontrado.cantidades;
    } else {
        alert("Artículo no encontrado");
    }
}

function limpiarFormulario() {
    document.getElementById('producto').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('fechas').value = '';
    document.getElementById('Cantidades').value = '';
}