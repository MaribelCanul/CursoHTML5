window.onload = function () { 
   function agregarElemento() { 
   var elemento = document.createElement('li');
   var texto = document.createTextNode('Safari');

   elemento.appendChild(texto);

   var lista = document.getElementById('lista');
   lista.appendChild(elemeto);

   etiqueta = '<li>Opera Móvil</li>';

   lista.innerHTML = lista.innerHTML + etiqueta;

    }
}