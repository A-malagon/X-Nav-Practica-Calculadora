$(document).ready(function() {
	nueva = false;
	memoria = "";
    seno = false;
    coseno = false;
    tangente = false;
    absoluto = false;
    raiz2 = false;
    raiz3 = false;
    eleva = false;
    exponente = false;
    numero = "";

    function mostrar(cadena){
	    borrar();
	    addDisplay(cadena);
	}  

    function limpia(){
	    if(nueva){
		    borrar();
		    nueva = false;
	    }
	} 

	function addDisplay(str){
			$('#display').val($('#display').val() + str);
	}

	
	function borrar(){
		$('#display').val("");
	}

	$('.operando, .num').click(function(){
								limpia();
                                numero = $(this).text();
								addDisplay($(this).text());
								});

    $('#seno').click(function(){
                                limpia();
                                seno = true;
								addDisplay($(this).text());
								});

    $('#coseno').click(function(){
                            limpia();
                            coseno = true;
							addDisplay($(this).text());
							});

    $('#tangente').click(function(){
                            limpia();
                            tangente = true;
							addDisplay($(this).text());
							});

    $('#absoluto').click(function(){
                            limpia();
                            absoluto = true;
							addDisplay($(this).text());
							});
    	
    $('#raiz2').click(function(){
                            limpia();
                            raiz2 = true;
							addDisplay($(this).text());
							});

    $('#raiz3').click(function(){
                            limpia();
                            raiz3 = true;
							addDisplay($(this).text());
							});	

    $('#elevar').click(function(){
                            limpia();
                            eleva = true;
							addDisplay($(this).text());
							});

    $('#exponencial').click(function(){
                            limpia();
                            exponente = true;
							addDisplay($(this).text());
							});						

	$('#igual').click(function(){
						    try{
                                if(seno == true) {
                                   operacion = Math.sin(numero);
                                   seno = false; 
                                } else if(coseno == true) {
                                   operacion = Math.cos(numero);
                                   coseno = false; 
                                } else if(tangente == true) {
                                   operacion = Math.tan(numero);
                                   tangente = false; 
                                } else if(absoluto == true) {
                                   operacion = Math.abs(numero);
                                   absoluto = false; 
                                } else if(raiz2 == true) {
                                   operacion = Math.sqrt(numero);
                                   raiz2 = false; 
                                } else if(raiz3 == true) {
                                   operacion = Math.cbrt(numero);
                                   raiz3 = false; 
                                } else if(eleva == true) {
                                   operacion = Math.pow(numero,2);
                                   eleva = false; 
                                } else if(exponente == true) {
                                   operacion = Math.exp(numero);
                                   exponente = false; 
                                } else {
							        operacion = eval($('#display').val());
                                    
                                }
                                mostrar(operacion);
						    }catch(err){
							    mostrar("Syntax Error");	
						    }

							memoria = $('#display').val();
                            nueva = true;
                            console.log(nueva);			
						});
						
	$('#borrar_todo').click(function(){
						borrar();
					    });

	$('#borrar').click(function(){
						        op = document.getElementById("display").value;
                                console.log(op);
                                if (op.length > 3) {
                                    borraDigito = op.slice(0, op.length-4)
            						$('#display').val(borraDigito);
                                } else if ((op.length <= 3) && (nueva == false)) {
                                    $('#display').val("");  
                                }                          
					    });

	$('#memoria').click(function(){
						if(memoria){
							addDisplay(memoria);
						}else{
							memoria = document.getElementById("display").value;
						}
						});

	$('#memoria_reset').click(function(){
						memoria="";
						});

});
