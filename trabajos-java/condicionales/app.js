function calcular(){
    let modo;
    let virtual=false
    let presencial=false
    let nombre=document.getElementById('nombre').value;
    if (!nombre){
        mensaje("Nombre")
    }
    let materia=document.getElementById('materia').value;
    if (!materia){
        mensaje("materia")
    }
     virtual=document.getElementById('virtual').checked;
    presencial=document.getElementById('presencial').checked;
    if(!virtual && !presencial)
        mensaje("Modalidad edaucativa");
    
   
    if(virtual){
        modo="virtual";
    }
    if(presencial){
        modo="presencial";
    }
    let nota1=document.getElementById('nota1').value
    if(!nota1)
        mensaje("Debes llenar nota 1");
    let nota2=document.getElementById('nota2').value
    if(!nota2)
        mensaje("Debes llenar nota 2");
    let nota3=document.getElementById('nota3').value
    if(!nota3)
        mensaje("Debes llenar nota 3");
    let nota4=document.getElementById('nota4').value
    if(!nota4)
        mensaje("debes llenar nota 4")
   let promedio=(parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4))/4  
   let resultado;
    if(promedio <=40){
        resultado="reprobado"
    }else if(promedio<70){
        resultado="debe mejorar"
    }else{
        resultado="aprobado"
    }
    document.getElementById('promedio').value=promedio + "    "+resultado
   
}
function mensaje(campo){

    Swal.fire({
        icon: "error",
        title: "Campos Obligatorios" +campo,
        text: "el campo esta vacio!",
       
      });
}