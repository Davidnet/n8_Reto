function clickVentana(x, y)
{
    var blanco = "rgb(1, 174, 214)";
    var negro = "rgb(8, 63, 91)";
	// Recupere el elemento con id "x-y"
	// Si está apagado  enciendalo. Cambiar backgroundColor a #01AED6
	// Si está enciendido  apaguelo. Cambiar backgroundColor a #083F5B
	// Revise los vecinos y haga la misma operación. Cuidado con los bordes y las esquinas.
    if ( 0 < x && x < 6 && 0 < y && y < 6  ){
        var elemento = x + "-" + y;
        var punto = document.getElementById(elemento);
        punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        var elementoADerecha = x + "-" + (y + 1);
        punto = document.getElementById(elementoADerecha);
        punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        var elementoAIzquierda = x + "-" + (y-1);
        punto = document.getElementById(elementoAIzquierda);
        punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        var elementoAArriba = (x -1)  + "-" + y;
        punto = document.getElementById(elementoAArriba);
        punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        var elementoAAbajo = (x+1) + "-" + y;
        punto = document.getElementById(elementoAAbajo);
        punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
    }
    if (x === 0){
        if ( y != 0 && y != 6){
            var elemento = x + "-" + y;
            var punto = document.getElementById(elemento);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoADerecha = x + "-" + (y + 1);
            punto = document.getElementById(elementoADerecha);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAIzquierda = x + "-" + (y-1);
            punto = document.getElementById(elementoAIzquierda);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAAbajo = (x+1) + "-" + y;
            punto = document.getElementById(elementoAAbajo);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;s
        }
        else {
            if (y === 0){
                var elemento = x + "-" + y;
                var punto = document.getElementById(elemento);
                punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
                var elementoADerecha = x + "-" + (y+1);
                punto = document.getElementById(elementoADerecha);
                punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
                var elementoAAbajo = (x+1) + "-" + y;
                punto = document.getElementById(elementoAAbajo);
                punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            }
            else {
                var elemento = x + "-" + y;
                var punto = document.getElementById(elemento);
                punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
                var elementoAIzquierda = x + "-" + (y-1);
                punto = document.getElementById(elementoAIzquierda);
                punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
                var elementoAAbajo = (x+1) + "-" + y;
                punto = document.getElementById(elementoAAbajo);
                punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            }
        }
    }
    if (y === 0){
        if( 0 < x && x < 6){
            var elemento = x + "-" + y;
            var punto = document.getElementById(elemento);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAAbajo = (x+1) + "-" + y;
            punto = document.getElementById(elementoAAbajo);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoADerecha = x + "-" + (y + 1);
            punto = document.getElementById(elementoADerecha);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAArriba = (x -1)  + "-" + y;
            punto = document.getElementById(elementoAArriba);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        }
        if( x === 6){
            var elemento = x + "-" + y;
            var punto = document.getElementById(elemento);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoADerecha = x + "-" + (y + 1);
            punto = document.getElementById(elementoADerecha);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAArriba = (x -1)  + "-" + y;
            punto = document.getElementById(elementoAArriba);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        }
    }
    if (x === 6){
        if ( y != 0 && y != 6){
            var elemento = x + "-" + y;
            var punto = document.getElementById(elemento);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoADerecha = x + "-" + (y + 1);
            punto = document.getElementById(elementoADerecha);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAIzquierda = x + "-" + (y-1);
            punto = document.getElementById(elementoAIzquierda);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAArriba = (x -1)  + "-" + y;
            punto = document.getElementById(elementoAArriba);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        }
        if( y === 6){
            var elemento = x + "-" + y;
            var punto = document.getElementById(elemento);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAIzquierda = x + "-" + (y-1);
            punto = document.getElementById(elementoAIzquierda);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAArriba = (x -1)  + "-" + y;
            punto = document.getElementById(elementoAArriba);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        }
    }
    if (y === 6){
        if (x != 0 && x != 6){
            var elemento = x + "-" + y;
            var punto = document.getElementById(elemento);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAIzquierda = x + "-" + (y-1);
            punto = document.getElementById(elementoAIzquierda);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAArriba = (x -1)  + "-" + y;
            punto = document.getElementById(elementoAArriba);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
            var elementoAAbajo = (x+1) + "-" + y;
            punto = document.getElementById(elementoAAbajo);
            punto.style.backgroundColor === blanco ? punto.style.backgroundColor = negro : punto.style.backgroundColor = blanco;
        }
    }

	
	if(gano()){
		alert("Felicitaciones!! Ha ganado");
	}
}

function gano()
{
	//Recorra todas las ventanas verificando si están apagadas
	//Si todas están apagadas devuelva true, de lo constrario devuelva false.
    for(var i = 0; i < 7 ; i++){
        for(var j = 0; j < 7; j++){
            var revisar = i + "-" + j;
            if (!estaApagada(i,j)){
                return false;
            }
        }
    }
	return true;
}

function estaApagada(x, y)
{
	var b = document.getElementById(x+"-"+y);
	var c = b.style.backgroundColor;
	if( c == "rgb(1, 174, 214)")
	{
		return false;
	}
	else
	{
		return true;
	}
}