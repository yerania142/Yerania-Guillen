function calcular(){
    let strNumero1=document.getElementById('numero1').value;
    let strNumero2=document.getElementById('numero2').value;


    document.getElementById('Resultado').value=(parseInt(strNumero1)+parseInt(strNumero2));
 
}
function limpiar(){
document.getElementById('numero1').value="";
document.getElementById('numero2').value="";
document.getElementById('Resultado').value="";

}
function multiplicar(){
let strNumero1=document.getElementById('numero1').value;
let strNumero2=document.getElementById('numero2').value;

document.getElementById('Resultado').value=(parseInt(strNumero1)*parseInt(strNumero2));


}
function restar(){
    let strNumero1=document.getElementById('numero1').value;
    let strNumero2=document.getElementById('numero2').value;
    
    document.getElementById('Resultado').value=(parseInt(strNumero1)-parseInt(strNumero2));
    }

    function dividir(){
        let strNumero1=document.getElementById('numero1').value;
        let strNumero2=document.getElementById('numero2').value;
        
        document.getElementById('Resultado').value=(parseInt(strNumero1)/parseInt(strNumero2));




    }