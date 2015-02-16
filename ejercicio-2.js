$(document).ready(function (){
var domNumberOne = $('input[name=number_1]');
	domNumberTwo = $('input[name=number_2]');
	domOperator  = $('.operator');
	domButton = $('.calcular');
	domClear = $('.clear');
	domResult = $('.result');
	domButton.on('click', function(){
        var valueNumber = domNumberOne.val();
        	valueNumberTwo = domNumberTwo.val();
        	operatorOn =  domOperator.val();
        	suma = eval(valueNumber+ operatorOn + valueNumberTwo);
        	domResult.text(suma);
    });
    
    domClear.on('click', function (){      
    	domNumberOne.val("");
    	domNumberTwo.val("");
    	domOperator.val("");
    	domResult.text("");
    	alert('hola');
	});
});

