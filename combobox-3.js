/*$(document).ready(function (){
// Almacenamos los departamentos en un objeto
	var departamentos    =  [{'id_departamento':'1',
					   		  'nombre_depa':'Lima'
					  		},
					  		 {'id_departamento':'2',
					   		  'nombre_depa':'Callao'
					  		},
					  		 {'id_departamento':'3',
					   		  'nombre_depa':'Junin'
					  		},
					  		 {'id_departamento':'4',
					   		  'nombre_depa':'Ayacucho'
					  		}]; 
// Almacenamos las provincias en un objeto
	var provincias 		 =  [{'id_provincia':'1',
							  'id_departamento':'1',
							  'nombre_provincia':'Lima'
							  },
					  		 {'id_provincia':'2',
					   		  'id_departamento':'2',
					   		  'nombre_provincia':'Callao'
					  		}];
// Almacenamos los distritos en un objeto
	var distritos = [{'id_distrito':'1',
					   'id_provincia':'1',
					   'id_departamento':'1',
					   'nombre_distrito':'La Molina'
					  },
					  {'id_distrito':'2',
					   'id_provincia':'1',
					   'id_departamento':'1',
					   'nombre_distrito':'Miraflores'
					  },
					  {'id_distrito':'3',
					   'id_provincia':'2',
					   'id_departamento':'2',
					   'nombre_distrito':'Ventanilla'
					  },
					  {'id_distrito':'4',
					   'id_provincia':'2',
					   'id_departamento':'2',
					   'nombre_distrito':'La Perla'
					  }];

	var sdepartamentos = '<option value="">Elige una opcion</option>';
	
	$(departamentos).each(function(i){
	   sdepartamentos += '<option value="'+this.id_departamento+'">'+this.nombre_depa+'</option>';
	});


	$('#departamentos').html(sdepartamentos);
	$('#departamentos').change(function(){ // evento que al ser modificado el select departametos es llamado
    var departamentos = $('#departamentos').val(); //obtenemos el departametos seleccionado  

    var pprovincias = $.grep(provincias,function(n,i){return (n.id_departamento == departamentos); }); //filtramos por departameto
    var sprovincias = '<option value="">Elige una opcion</option>'; 

    $(pprovincias).each(function(i){ //recorremos cada uno de las provincias previamente filtrados
        sprovincias += '<option value="'+this.id_provincia+'">'+this.nombre_provincia+'</option>'; //vamos  creando el select
    });
    $('#provincias').html(sprovincias);//el html generado se asigna al select de provincias
	});
	$('#provincias').change(function(){

    var departamentos = $('#departamentos').val();
    var provincias = $('#provincias').val();
    var pdistritos = $.grep(distritos,function(n,i){return (n.id_departamento == departamentos && n.id_provincia == provincias ); });
    var sdistritos = '<option value="">Elige una opcion</option>';
    $(pdistritos).each(function(i){
        sdistritos += '<option value="'+this.id_distrito+'">'+this.nombre_distrito+'</option>';
    });
    $('#distritos').html(sdistritos);
	});


	$('#distritos').change(function(){
		valueDistrito = $('#distritos').val();
		console.log(valueDistrito);
		if(valueDistrito == 3){			
			$('input[value=type2]').hide();
		}
		else{
			$('input[value=type2]').show();
		}
	});
});*/


url = 'https://coderwall.com/username.json?callback=?';
datos = {};
$.getJSON(url, datos, function(response){
    console.log(response);
});


