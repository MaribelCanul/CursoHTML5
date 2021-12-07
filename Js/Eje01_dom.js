window.onload = function () {
    // Numero de enlaces de la pagina
    var info = document.getElementById('info');
    var urls = document.getElementsByTagName('a');
    var numUrls = urls.length;
    console.log(numUrls)
    console.log(urls)
    /*alert('El número de enlaces de la página es:' + numUrls);*/
        info.innerHTML = 'El número de enlaces de la página es: ' + numUrls;

     // Direccion o URL del penultimo enlace
     console.log(urls[numUrls - 2]);
     info.innerHTML = 'URL del penultimo enlace de la página es: ' + urls[numUrls - 2];
     
    // Numero de enlaces que apuntan a http://prueba
    
    var cont = 0;
    var Valurl = '';
    for(let i=0; i < urls.length; i++){
      console.log(urls[i]);
      Valurl = urls[i].getAttribute('href');
      if (Valurl == 'http://prueba') {
        cont++;
       }
      }
      console.log(cont);

    // Numero de enlaces del tercer parrafo
    var parrafo = document.getElementsByTagName('p');
    enlace = parrafo[2].getElementsByTagName('a');
    info.innerHTML = 'Número de enlaces en el tercer párrafo es: ' + enlace.length; 
    console.log(enlace.length);   

};