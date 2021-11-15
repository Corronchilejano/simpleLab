function palindromo(cadena)
{
    cadena = cadena.toUpperCase().trim();
    cadena = cadena.replace(/\s+/g, '');
    reverso = cadena.split("").reverse().join("");
    if(cadena == reverso) return "Palíndromo";
    return "No es un palíndromo";
}

function botonPalindromo()
{
    cadena = document.getElementById("TBCadena").value.toString();
    resultado = palindromo(cadena);
    document.getElementById("TBSalidaPalindromo").value = palindromo(cadena);
}

function mayor(n1,n2)
{
    if(isNaN(n1) || isNaN(n2)) return "Ingrese números por favor";
    retorno = 0;
    if(n1 > n2) retorno = n1;
    else if (n2>n1) retorno = n2;
    else retorno = "Son iguales";   
    return retorno;
}

function botonNumeroMayor()
{
    n1 = parseInt(document.getElementById("TBNumero1").value);
    n2 = parseInt(document.getElementById("TBNumero2").value);
    retorno = mayor(n1,n2);
    document.getElementById("TBSalidaMayor").value = retorno;
}

function vocales(cadena)
{
    const vocales = ["A","E","I","O","U"];
    letras = cadena.split("");
    listaVocales = "";
    letras.forEach(letra => 
    {
        if(vocales.includes(letra.toUpperCase())) listaVocales += letra;
    });
    return listaVocales;        
}

function botonVocales()
{
    cadena = document.getElementById("TBEntradaVocales").value;
    retorno = vocales(cadena);
    document.getElementById("TBSalidaVocales").value = retorno;
}

function cantidadVocales(cadena)
{
    cadenaVocales = "AEIOU";
    const cantidadVocales = [0,0,0,0,0];
    letras = cadena.split("");
    letras.forEach(letra => 
    {
        numeroLetra = cadenaVocales.indexOf(letra.toUpperCase());
        if(numeroLetra > -1) cantidadVocales[numeroLetra]++;
    });
    return cantidadVocales;
}

function botonCantidadVocales()
{
    cadena = document.getElementById("TBEntradaCantidadVocales").value;
    retorno = cantidadVocales(cadena);
    document.getElementById("TBSalidaVocalesA").value = retorno[0];
    document.getElementById("TBSalidaVocalesB").value = retorno[1];
    document.getElementById("TBSalidaVocalesC").value = retorno[2];
    document.getElementById("TBSalidaVocalesD").value = retorno[3];
    document.getElementById("TBSalidaVocalesE").value = retorno[4];
}

function CarguePagina()
{
    document.getElementById("TBURL").value = window.location.href;
}

function MostrarContenidos()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        document.getElementById("TEstado").value = DevolverEstado(this.readyState);
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("TAEncabezado").innerHTML = xhttp.getAllResponseHeaders();
            document.getElementById("TAContenido").innerHTML = xhttp.responseText;
        }
        else if (this.status == 404) 
        {
            document.getElementById("TAEncabezado").innerHTML = "Página no encontrada.";
            document.getElementById("TAContenido").innerHTML = "Página no encontrada.";
        }
    };
    xhttp.open("GET", document.getElementById("TBURL").value, true);
    xhttp.send();
}

function DevolverEstado(estado)
{
    retorno = "";
    switch(estado)
    {
        case 0:
        retorno = "0 - Petición no enviada aún";
        break;
        case 1:
        retorno = "1 - Conexión establecida";
        break;
        case 2:
        retorno = "2 - Petición recibida";
        break;
        case 3:
        retorno = "3 - Procesando petición";
        break;
        case 4:
        retorno = "4 - Petición terminada";
        break;   
    }
    return retorno;
}
