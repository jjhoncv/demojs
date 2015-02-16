var counterDesc;
for (counterDesc = 1300; counterDesc > 50; counterDesc--) { 
	//var counterDsc = counterDesc% 2==1;
	if (counterDesc % 2 == 1){
		//si la variable entre 2 deja un residuo 1 (1 = a impar y cero a par).
		//osea si el residuo de la division es 1 es impar y si el residio de la division es 0 es par
		// NOTA: el signo modular "%" es para saber si un numero primo tiene un multiplo.
		// 1300 entre 2 = 650 y no deja residuo osea  el residuo es 0
		// 1299 entre 2 = 649 deja como residuo 1
		// ...
		// ..
  		//console.log(counterDesc % 2+ " somos impares");
  		//console.log(counterDesc +" soy impar");
  		console.log(counterDesc);
  		document.write(counterDesc + '<br>');
  	}
}