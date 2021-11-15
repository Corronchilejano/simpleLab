function palindromo(cadena)
{
    cadena = cadena.replace(/\s+/g, '');
    reverso = cadena.split("").reverse().join("");
    if(cadena == reverso) return "Palíndromo";
    return "No es un palíndromo";
}

function botonPalindromo()
{
    cadena = document.getElementById("TBCadena").value.toString()
    resultado = palindromo(cadena)
    document.getElementById("TBSalidaPalindromo").value = palindromo(cadena)
}

function mayor(n1,n2)
{
    if(isNaN(n1) || isNaN(n2)) return "Ingrese números por favor"
    mayor = 0
    if(n1 > n2) mayor = n1
    else if (n2>n1) mayor = n2
    else mayor = "Son iguales"    
    return mayor
}

function botonNumeroMayor()
{
    n1 = parseInt(document.getElementById("TBNumero1").value)
    n2 = parseInt(document.getElementById("TBNumero2").value)
    retorno = mayor(n1,n2)
    document.getElementById("TBSalidaMayor").value = retorno
}

function vocales(cadena)
{
    const vocales = ["A","E","I","O","U"];
    letras = cadena.split("");
    listaVocales = ""
    letras.forEach(letra => {
        if(vocales.includes(letra.toUpperCase())) listaVocales += letra
    });
    return listaVocales;        
}

function botonVocales()
{
    cadena = document.getElementById("TBEntradaVocales").value
    retorno = vocales(cadena)
    document.getElementById("TBSalidaVocales").value = retorno
}

function cantidadVocales(cadena)
{
    cadenaVocales = "AEIOU"
    const cantidadVocales = [0,0,0,0,0]
    letras = cadena.split("");
    letras.forEach(letra => {
        numeroLetra = cadenaVocales.indexOf(letra.toUpperCase())
        if(numeroLetra > -1) cantidadVocales[numeroLetra]++
    });
    return cantidadVocales;
}

function botonCantidadVocales()
{
    cadena = document.getElementById("TBEntradaCantidadVocales").value
    retorno = cantidadVocales(cadena)
    document.getElementById("TBSalidaVocalesA").value = retorno[0]
    document.getElementById("TBSalidaVocalesB").value = retorno[1]
    document.getElementById("TBSalidaVocalesC").value = retorno[2]
    document.getElementById("TBSalidaVocalesD").value = retorno[3]
    document.getElementById("TBSalidaVocalesE").value = retorno[4]
}
