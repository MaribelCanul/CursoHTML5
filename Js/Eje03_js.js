function alerta(){
    var contador;
    texto= 'Texto comilla simple';
    texto2 = "Texto comilla doble";
    texto3 = 'Texto combinado \'comillas simples\' y dobles';
    console.log(contador);
    console.log(typeof contador);
    contador = null;
    console.log(typeof contador);

    if (contador == undefine){
        console.log('El null es igual a undefined');
    }else{
        console.log();
    }

    // alert( texto + '' + texto2 + '' + texto3 + 'Hizo clic');
}
function hacerClic(){
    document.getElementsByTagName('p')[1].onclick = alerta;
    document.getElementById('uno').onclick = alerta;
}
window.onload = hacerClic;