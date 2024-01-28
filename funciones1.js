// JavaScript Document

function otro_sistema(valor){
	with(document){
	if(valor == 'OTRO') 
	{
		valido.otroSistemaE.style.display ='block';
		valido.otroSistemaE.focus();
	} else { 
		valido.otroSistemaE.value = '';
		valido.otroSistemaE.style.display ='none';
		}
	}
}

function otro_turno(valor){
	with(document){
	if(valor == 'OTRO') 
	{
		valido.otroTurnoE.style.display ='block';
		valido.otroTurnoE.focus();
		nom_mensu.style.display ='block';
	} else {
		valido.otroTurnoE.value = '';
		valido.otroTurnoE.style.display ='none';
		}
	}
}
//cuando cambia el select de Tipo de Plantel
//costo mensual de liceo privado
function costo_mens(valor){
	with(document){
	if(valor == 'PRIVADO') 
	{
		costo_mensualI.style.display ='block';
		costo_mensualI.focus();
	} else { 
		costo_mensualI.style.display ='none';
		nom_mensu.style.display = 'none';
		}
	}
}
//cuando cambia Discapacidad
function cambio_disca(valor){
	with(document){
	if(valor == '') 
	{
		span_carnet.style.display = "none";
		carnet_disca.style.display = "none";
		carnet_disca.value = "";
	} else { 
		span_carnet.style.display = "inline";//Carnet Discapacidad:
		carnet_disca.style.display = "inline";// activa el input
		carnet_disca.value = carnet.value;//muestra el valor del carnet
		}
	}
}

			function mostrar_ciudades(ciudad)
			{
				//alert(ciudad);
				var edoNacimiento = document.getElementById("edo_nacimiento").value;//ESTADO DE NACIMIENTO
				var paisNacimiento = document.getElementById("pais_hidden").value;//PAIS DE NACIMIENTO
				//alert(edoNacimiento);
				fajax('estados_ciudades.php','capa','ciudad='+ciudad+'&estado='+edoNacimiento+'&pais='+paisNacimiento,'post','0');
			}
			
			function AJAXCrearObjeto(){
			 var obj; 
			 
			 if(window.XMLHttpRequest) 
				{ // no es IE 
				obj = new XMLHttpRequest(); 
				} 
				else 
				{ // Es IE o no tiene el objeto 
					try { 
						 obj = new ActiveXObject("Microsoft.XMLHTTP"); 
						} 
					catch (e) { 
								alert('El navegador utilizado no est soportado'); 
							  } 
				} 
			 //alert ("objeto creado");
			 return obj; 
			} 
			
			function fajax(url,capa,valores,metodo,xml) //xml=1 (SI) xml=0 (NO)
			{
				//alert(capa);
				var ajax=AJAXCrearObjeto();
				var capaContenedora=document.getElementById(capa);
				//alert('capa '+capaContenedora);
				if (capaContenedora.type == "text"){
					texto = true;
				}else{
					texto = false;
				}
				//texto = true;
				var contXML;
				/* Creamos y ejecutamos la instancia si el metodo elegido es POST */
				if (metodo.toUpperCase()=='POST')
				{
			
					ajax.open ('POST', url, true);
					ajax.onreadystatechange = function() 
					{
						if (ajax.readyState==1) 
						{
							capaContenedora.innerHTML="<img src='loader.gif'>";
						}
						else if (ajax.readyState==4)
						{
							if (ajax.status==200)
							{
								if (xml==0)
								{	
									if (texto){
										document.getElementById(capa).value=ajax.responseText;
									}
									document.getElementById(capa).innerHTML=ajax.responseText;
								}
								if (xml==1)
								{
			
									var Contxml  = ajax.responseXML.documentElement;
									var items = Contxml.getElementsByTagName('nota')[0];
									var txt = items.getElementsByTagName('destinatario')[0].firstChild.data; 
									document.getElementById(capa).innerHTML=txt;
									
									
								}
							}
							else if (ajax.readyState==404)
							{
								capaContenedora.innerHTML = "La direccion no existe";
							}
							else
							{
								capaContenedora.innerHTML="Error: "+ajax.status;
							}
						}
					}
				
					ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					ajax.send(valores);
					return;
				}
				/* Creamos y ejecutamos la instancia si el metodo elegido es GET */
				if (metodo.toUpperCase()=='GET')
				{
					ajax.open ('GET', url, true);
					ajax.onreadystatechange = function() 
					{
						if (ajax.readyState==1) 
						{
							capaContenedora.innerHTML="<img src='loading.gif'>";
						}
						else if (ajax.readyState==4)
						{
							if (ajax.status==200)
							{
								if (xml==0)
								{
									document.getElementById(capa).innerHTML=ajax.responseText;
								}
								if (xml==1)
								{
									alert(ajax.responseXML.getElementsByTagName("nota")[0].childNodes[1].nodeValue); 
								}
							}
							else if (ajax.readyState==404)
							{
								capaContenedora.innerHTML = "La direccion no existe";
							}
							else
							{
								capaContenedora.innerHTML="Error: "+ajax.status;
							}
						}
					}
				
					ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					ajax.send(null);
					return;
				}
			}
/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////PAIS, ESTADO, CIUDAD, MUNICIPIO DE UBICACION DEL PLANTEL///////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
			function mostrar_ciudades_p(ciudad,edoPlantel,paisPlantel)
			{
				//alert(ciudad);
				fajax('estados_ciudadesPlantel.php','capa_p','ciudad='+ciudad+'&estado='+edoPlantel+'&pais='+paisPlantel,'post','0');
			}
			
			function AJAXCrearObjeto(){
			 var obj; 
			 
			 if(window.XMLHttpRequest) 
				{ // no es IE 
				obj = new XMLHttpRequest(); 
				} 
				else 
				{ // Es IE o no tiene el objeto 
					try { 
						 obj = new ActiveXObject("Microsoft.XMLHTTP"); 
						} 
					catch (e) { 
								alert('El navegador utilizado no est soportado'); 
							  } 
				} 
			 //alert ("objeto creado");
			 return obj; 
			} 
			
			function fajax(url,capa_p,valores,metodo,xml) //xml=1 (SI) xml=0 (NO)
			{
				//alert(capa_p);
				var ajax=AJAXCrearObjeto();
				var capaContenedora=document.getElementById(capa_p);
				//alert('capa_p '+capaContenedora);
				if (capaContenedora.type == "text"){
					texto = true;
				}else{
					texto = false;
				}
				//texto = true;
				var contXML;
				/* Creamos y ejecutamos la instancia si el metodo elegido es POST */
				if (metodo.toUpperCase()=='POST')
				{
			
					ajax.open ('POST', url, true);
					ajax.onreadystatechange = function() 
					{
						if (ajax.readyState==1) 
						{
							capaContenedora.innerHTML="<img src='loader.gif'>";
						}
						else if (ajax.readyState==4)
						{
							if (ajax.status==200)
							{
								if (xml==0)
								{	
									if (texto){
										document.getElementById(capa_p).value=ajax.responseText;
									}
									document.getElementById(capa_p).innerHTML=ajax.responseText;
								}
								if (xml==1)
								{
			
									var Contxml  = ajax.responseXML.documentElement;
									var items = Contxml.getElementsByTagName('nota')[0];
									var txt = items.getElementsByTagName('destinatario')[0].firstChild.data; 
									document.getElementById(capa_p).innerHTML=txt;
									
									
								}
							}
							else if (ajax.readyState==404)
							{
								capaContenedora.innerHTML = "La direccion no existe";
							}
							else
							{
								capaContenedora.innerHTML="Error: "+ajax.status;
							}
						}
					}
				
					ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					ajax.send(valores);
					return;
				}
				/* Creamos y ejecutamos la instancia si el metodo elegido es GET */
				if (metodo.toUpperCase()=='GET')
				{
					ajax.open ('GET', url, true);
					ajax.onreadystatechange = function() 
					{
						if (ajax.readyState==1) 
						{
							capaContenedora.innerHTML="<img src='loading.gif'>";
						}
						else if (ajax.readyState==4)
						{
							if (ajax.status==200)
							{
								if (xml==0)
								{
									document.getElementById(capa_p).innerHTML=ajax.responseText;
								}
								if (xml==1)
								{
									alert(ajax.responseXML.getElementsByTagName("nota")[0].childNodes[1].nodeValue); 
								}
							}
							else if (ajax.readyState==404)
							{
								capaContenedora.innerHTML = "La direccion no existe";
							}
							else
							{
								capaContenedora.innerHTML="Error: "+ajax.status;
							}
						}
					}
				
					ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					ajax.send(null);
					return;
				}
	}//fin function fajax(url,capa_p,valores,metodo,xml)


	function mostrar_municipios(municipio,estado,pais)
	{
		//alert(pais);
		fajax('estados_municipios.php','capa2','municipio='+municipio+'&estado='+estado+'&pais='+pais,'post','0');
	}
	
	function AJAXCrearObjeto(){
	 var obj; 
	 
	 if(window.XMLHttpRequest) 
		{ // no es IE 
		obj = new XMLHttpRequest(); 
		} 
		else 
		{ // Es IE o no tiene el objeto 
			try { 
				 obj = new ActiveXObject("Microsoft.XMLHTTP"); 
				} 
			catch (e) { 
						alert('El navegador utilizado no est soportado'); 
					  } 
		} 
	 //alert ("objeto creado");
	 return obj; 
	} 
	
	function fajax(url,capa2,valores,metodo,xml) //xml=1 (SI) xml=0 (NO)
	{
		//alert(capa2);
		var ajax=AJAXCrearObjeto();
		var capaContenedora=document.getElementById(capa2);
		//alert('capa2 '+capaContenedora);
		if (capaContenedora.type == "text"){
			texto = true;
		}else{
			texto = false;
		}
		//texto = true;
		var contXML;
		/* Creamos y ejecutamos la instancia si el metodo elegido es POST */
		if (metodo.toUpperCase()=='POST')
		{
	
			ajax.open ('POST', url, true);
			ajax.onreadystatechange = function() 
			{
				if (ajax.readyState==1) 
				{
					capaContenedora.innerHTML="<img src='loader.gif'>";
				}
				else if (ajax.readyState==4)
				{
					if (ajax.status==200)
					{
						if (xml==0)
						{	
							if (texto){
								document.getElementById(capa2).value=ajax.responseText;
							}
							document.getElementById(capa2).innerHTML=ajax.responseText;
						}
						if (xml==1)
						{
	
							var Contxml  = ajax.responseXML.documentElement;
							var items = Contxml.getElementsByTagName('nota')[0];
							var txt = items.getElementsByTagName('destinatario')[0].firstChild.data; 
							document.getElementById(capa2).innerHTML=txt;
							
							
						}
					}
					else if (ajax.readyState==404)
					{
						capaContenedora.innerHTML = "La direccion no existe";
					}
					else
					{
						capaContenedora.innerHTML="Error: "+ajax.status;
					}
				}
			}
		
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			ajax.send(valores);
			return;
		}
		/* Creamos y ejecutamos la instancia si el metodo elegido es GET */
		if (metodo.toUpperCase()=='GET')
		{
			ajax.open ('GET', url, true);
			ajax.onreadystatechange = function() 
			{
				if (ajax.readyState==1) 
				{
					capaContenedora.innerHTML="<img src='loading.gif'>";
				}
				else if (ajax.readyState==4)
				{
					if (ajax.status==200)
					{
						if (xml==0)
						{
							document.getElementById(capa2).innerHTML=ajax.responseText;
						}
						if (xml==1)
						{
							alert(ajax.responseXML.getElementsByTagName("nota")[0].childNodes[1].nodeValue); 
						}
					}
					else if (ajax.readyState==404)
					{
						capaContenedora.innerHTML = "La direccion no existe";
					}
					else
					{
						capaContenedora.innerHTML="Error: "+ajax.status;
					}
				}
			}
		
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			ajax.send(null);
			return;
		}
	}<!--FIN DEL SCRIPT--><!--SCRIPT QUE GENERAR EL LISTADO DE LOS MUNICIPIOS CORRESPONDIENTE AL ESTADO SELECCIONADO-->	


		<!--PARA EL PAIS, ESTADO Y CIUDAD DE NACIMIENTO-->
			function mostrar_ciudadesNac(ciudad,edoPlantel,paisPlantel)
			{
				//alert(ciudad);
				fajax('estados_ciudades.php','capaN','ciudad='+ciudad+'&estado='+edoPlantel+'&pais='+paisPlantel,'post','0');
			}
			
			function AJAXCrearObjeto(){
			 var obj; 
			 
			 if(window.XMLHttpRequest) 
				{ // no es IE 
				obj = new XMLHttpRequest(); 
				} 
				else 
				{ // Es IE o no tiene el objeto 
					try { 
						 obj = new ActiveXObject("Microsoft.XMLHTTP"); 
						} 
					catch (e) { 
								alert('El navegador utilizado no est soportado'); 
							  } 
				} 
			 //alert ("objeto creado");
			 return obj; 
			} 
			
			function fajax(url,capaN,valores,metodo,xml) //xml=1 (SI) xml=0 (NO)
			{
				//alert(capa);
				var ajax=AJAXCrearObjeto();
				var capaContenedora=document.getElementById(capaN);
				//alert('capa '+capaContenedora);
				if (capaContenedora.type == "text"){
					texto = true;
				}else{
					texto = false;
				}
				//texto = true;
				var contXML;
				/* Creamos y ejecutamos la instancia si el metodo elegido es POST */
				if (metodo.toUpperCase()=='POST')
				{
			
					ajax.open ('POST', url, true);
					ajax.onreadystatechange = function() 
					{
						if (ajax.readyState==1) 
						{
							capaContenedora.innerHTML="<img src='loader.gif'>";
						}
						else if (ajax.readyState==4)
						{
							if (ajax.status==200)
							{
								if (xml==0)
								{	
									if (texto){
										document.getElementById(capaN).value=ajax.responseText;
									}
									document.getElementById(capaN).innerHTML=ajax.responseText;
								}
								if (xml==1)
								{
			
									var Contxml  = ajax.responseXML.documentElement;
									var items = Contxml.getElementsByTagName('nota')[0];
									var txt = items.getElementsByTagName('destinatario')[0].firstChild.data; 
									document.getElementById(capaN).innerHTML=txt;
									
									
								}
							}
							else if (ajax.readyState==404)
							{
								capaContenedora.innerHTML = "La direccion no existe";
							}
							else
							{
								capaContenedora.innerHTML="Error: "+ajax.status;
							}
						}
					}
				
					ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					ajax.send(valores);
					return;
				}
				/* Creamos y ejecutamos la instancia si el metodo elegido es GET */
				if (metodo.toUpperCase()=='GET')
				{
					ajax.open ('GET', url, true);
					ajax.onreadystatechange = function() 
					{
						if (ajax.readyState==1) 
						{
							capaContenedora.innerHTML="<img src='loading.gif'>";
						}
						else if (ajax.readyState==4)
						{
							if (ajax.status==200)
							{
								if (xml==0)
								{
									document.getElementById(capaN).innerHTML=ajax.responseText;
								}
								if (xml==1)
								{
									alert(ajax.responseXML.getElementsByTagName("nota")[0].childNodes[1].nodeValue); 
								}
							}
							else if (ajax.readyState==404)
							{
								capaContenedora.innerHTML = "La direccion no existe";
							}
							else
							{
								capaContenedora.innerHTML="Error: "+ajax.status;
							}
						}
					}
				
					ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					ajax.send(null);
					return;
				}
	}//fin function mostrar_ciudadesNac(ciudad,edoPlantel,paisPlantel)

    
	
	
		/////////////////////////////////////////////////////////////////////
		//rutina para mostrar listas desplegables, checkbox y radiobuttons///	
		/////////////////////////////////////////////////////////////////////
		function mostrar()
		{
		var opcion;
		var paisPlantel = codpaisplantel.value;
		var estadoPlantel = codedoplantel.value;
		var cdPlantel = codcdplantel.value;
		var mpioPlantel = codmpioplantel.value;
		with (document.valido)
		  {
			switch (nac.value)
			{
				case "": opcion=0;break;
				case "V": opcion=1;break;
				case "E": opcion=2;break;
				default:
				alert(nac.value);
			}
			nac_e.selectedIndex=opcion;
			toggle_nac_e(nac_e);

			switch (extranjero.value)
			{
				case "": opcion=0;break;
				case "TRANSEUNTE": opcion=1;break;
				case "RESIDENTE": opcion=2;break;
				default:
				//alert(extranjero.value);
			}
			res_extraj.selectedIndex=opcion;

			switch (documnto.value)
			{
				case "": opcion=0;break;
				case "CEDULA": opcion=1;break;
				case "PASAPORTE": opcion=2;break;
				default:
				//alert(documnto.value);
			}
			doc_ident.selectedIndex=opcion;
			toggle_nro_pasaporte(doc_ident);
			//alert('sexo: '+cxo.value);
			switch (cxo.value)
			{
				case '': 
					opcion=0;
					break;
				case '0': 
					opcion=1;
					break;
				case '1': 
					opcion=2;
					break;
				default:			
			}
			sexo.selectedIndex=opcion;

			////fecha de nacimiento////
			switch (d.value)
			{
				case "00": opcion=0;break;
				case "01": opcion=1;break;
				case "02": opcion=2;break;
				case "03": opcion=3;break;
				case "04": opcion=4;break;
				case "05": opcion=5;break;
				case "06": opcion=6;break;
				case "07": opcion=7;break;
				case "08": opcion=8;break;
				case "09": opcion=9;break;
				case "10": opcion=10;break;
				case "11": opcion=11;break;
				case "12": opcion=12;break;
				case "13": opcion=13;break;
				case "14": opcion=14;break;
				case "15": opcion=15;break;
				case "16": opcion=16;break;
				case "17": opcion=17;break;
				case "18": opcion=18;break;
				case "19": opcion=19;break;
				case "20": opcion=20;break;
				case "21": opcion=21;break;
				case "22": opcion=22;break;
				case "23": opcion=23;break;
				case "24": opcion=24;break;
				case "25": opcion=25;break;
				case "26": opcion=26;break;
				case "27": opcion=27;break;
				case "28": opcion=28;break;
				case "29": opcion=29;break;
				case "30": opcion=30;break;
				case "31": opcion=31;break;
				default:
				//alert(d.value);
			}
			dia.selectedIndex=opcion;

			switch (m.value)
			{
				case "00": opcion=0;break;
				case "01": opcion=1;break;
				case "02": opcion=2;break;
				case "03": opcion=3;break;
				case "04": opcion=4;break;
				case "05": opcion=5;break;
				case "06": opcion=6;break;
				case "07": opcion=7;break;
				case "08": opcion=8;break;
				case "09": opcion=9;break;
				case "10": opcion=10;break;
				case "11": opcion=11;break;
				case "12": opcion=12;break;
				default:
				//alert(m.value);
			}
			mes.selectedIndex=opcion;

			switch (a.value)
			{
			case "": opcion=0;break;
			case "1970": opcion=1;break;
			case "1971": opcion=2;break;
			case "1972": opcion=3;break;
			case "1973": opcion=4;break;
			case "1974": opcion=5;break;
			case "1975": opcion=6;break;
			case "1976": opcion=7;break;
			case "1977": opcion=8;break;
			case "1978": opcion=9;break;
			case "1979": opcion=10;break;
			case "1980": opcion=11;break;
			case "1981": opcion=12;break;
			case "1982": opcion=13;break;
			case "1983": opcion=14;break;
			case "1984": opcion=15;break;
			case "1985": opcion=16;break;
			case "1986": opcion=17;break;
			case "1987": opcion=18;break;
			case "1988": opcion=19;break;
			case "1989": opcion=20;break;
			case "1990": opcion=21;break;
			case "1991": opcion=22;break;
			case "1992": opcion=23;break;
			case "1993": opcion=24;break;
			case "1994": opcion=25;break;
			case "1995": opcion=26;break;
			case "1996": opcion=27;break;
			case "1997": opcion=28;break;
			case "1998": opcion=29;break;
			case "1999": opcion=30;break;
			case "2000": opcion=31;break;
			case "2001": opcion=32;break;
			case "2002": opcion=33;break;
			case "2003": opcion=34;break;
				default:
				//alert(a.value);
			}
			ano.selectedIndex=opcion;
			
			switch (edociv.value)
			{
				case "": opcion=0;break;
				case "1": opcion=1;break;
				case "2": opcion=2;break;
				case "3": opcion=3;break;
				case "4": opcion=4;break;
				case "5": opcion=5;break;
				default:
				//alert(edociv.value);
			}
			edo_c_e.selectedIndex=opcion;
			
			//alert(cod.value);
		
			codi = cod.value.split('-');
			//alert(telf2.value);
			
			switch (codi[0])
				{
				case "": opcion=0;break;
				case "414": opcion=1;break;
				case "424": opcion=2;break;
				case "416": opcion=3;break;
				case "426": opcion=4;break;
				case "412": opcion=5;break;
				default:
				//alert(edociv.value);
				}
				celcod.selectedIndex=opcion;
			
			residen=document.valido.resi.value;
			//alert(document.valido.resi.value);
			if (residen == 'NO')
			{
				document.valido.residencia[1].checked=true;
				toggle_residencia(document.valido.resi);
			}
			else
				{
				if(residen == 'SI'){
			 		document.valido.residencia[0].checked=true;
				}
				else{
				document.valido.residencia[0].checked=false;
				document.valido.residencia[1].checked=false;
				}
				}

			////////fecha de inscripcion////
			switch (di.value)
			{
				case "00": opcion=0;break;
				case "01": opcion=1;break;
				case "02": opcion=2;break;
				case "03": opcion=3;break;
				case "04": opcion=4;break;
				case "05": opcion=5;break;
				case "06": opcion=6;break;
				case "07": opcion=7;break;
				case "08": opcion=8;break;
				case "09": opcion=9;break;
				case "10": opcion=10;break;
				case "11": opcion=11;break;
				case "12": opcion=12;break;
				case "13": opcion=13;break;
				case "14": opcion=14;break;
				case "15": opcion=15;break;
				case "16": opcion=16;break;
				case "17": opcion=17;break;
				case "18": opcion=18;break;
				case "19": opcion=19;break;
				case "20": opcion=20;break;
				case "21": opcion=21;break;
				case "22": opcion=22;break;
				case "23": opcion=23;break;
				case "24": opcion=24;break;
				case "25": opcion=25;break;
				case "26": opcion=26;break;
				case "27": opcion=27;break;
				case "28": opcion=28;break;
				case "29": opcion=29;break;
				case "30": opcion=30;break;
				case "31": opcion=31;break;
				default:
				//alert(di.value);
			}
			dia_ins.selectedIndex=opcion;

			switch (ms.value)
			{
				case "00": opcion=0;break;
				case "01": opcion=1;break;
				case "02": opcion=2;break;
				case "03": opcion=3;break;
				case "04": opcion=4;break;
				case "05": opcion=5;break;
				case "06": opcion=6;break;
				case "07": opcion=7;break;
				case "08": opcion=8;break;
				case "09": opcion=9;break;
				case "10": opcion=10;break;
				case "11": opcion=11;break;
				case "12": opcion=12;break;
				default:
				//alert(ms.value);
			}
			mes_ins.selectedIndex=opcion;

			switch (an.value)
			{
				case "": opcion=0;break;
				case "1990": opcion=1;break;
				case "1991": opcion=2;break;
				case "1992": opcion=3;break;
				case "1993": opcion=4;break;
				case "1994": opcion=5;break;
				case "1995": opcion=6;break;
				case "1996": opcion=7;break;
				case "1997": opcion=8;break;
				case "1998": opcion=9;break;
				case "1999": opcion=10;break;
				case "2000": opcion=11;break;
				case "2001": opcion=12;break;
				case "2002": opcion=13;break;
				case "2003": opcion=14;break;
				case "2004": opcion=15;break;
				case "2005": opcion=16;break;
				case "2006": opcion=17;break;
				case "2007": opcion=18;break;
				case "2008": opcion=19;break;
				case "2009": opcion=20;break;
				case "2010": opcion=21;break;
				case "2011": opcion=22;break;
				case "2012": opcion=23;break;
				case "2013": opcion=24;break;
				case "2014": opcion=25;break;
				default:
				//alert(an.value);
			}
			ano_ins.selectedIndex=opcion;

			switch (estatus.value)
			{
				//case "": opcion=0;break;
				case "1": opcion=1;break;
				case "0": opcion=2;break;
				default:
				//alert(estatus.value);
			}
			estatus_e.selectedIndex=opcion;

			switch (tesis.value)
			{
				case "": opcion=0;break;
				case "0": opcion=1;break;
				case "1": opcion=2;break;
				default:
				//alert(tesis.value);
			}
			tesista.selectedIndex=opcion;
			////////ACTUALIZACION 2013////////////
			switch (afro.value)
			{
				case "": opcion=0;break;
				case "AFROAMERICANO": opcion=1;break;
				case "AFROEUROPEO": opcion=2;break;
				case "AFROASI�TICO": opcion=3;break;
				case "AFROESTADOUNIDENSE": opcion=4;break;
				case "AFROANTILLANO": opcion=5;break;
				case "AFROCUBANO": opcion=6;break;
				case "AFROVENEZOLANO": opcion=7;break;
				case "AFROBRASILE�O": opcion=8;break;
				case "AFROARGENTINO": opcion=9;break;
				case "AFROBOLIVIANO": opcion=10;break;
				case "AFROCHILENO": opcion=11;break;
				case "AFROCOLOMBIANO": opcion=12;break;
				case "AFROECUATORIANO": opcion=13;break;
				case "AFROMEXICANO": opcion=14;break;
				case "AFROPERUANO": opcion=15;break;
				case "AFROURUGUAYO": opcion=16;break;
				case "AFROESPA�OL": opcion=17;break;
				default:
				//alert(afro.value);
			}
			afrodescendiente.selectedIndex=opcion;

			//Etnia Indigena
			etniaS.selectedIndex = etnia.value;

			//discapacidad //carnet
			tipo_discaS.selectedIndex = discapacidad.value;
			if (discapacidad.value != "" && carnet.value != "")
			{
				span_carnet.style.display = "inline";//Carnet Discapacidad:
				carnet_disca.style.display = "inline";// activa el input
				carnet_disca.value = carnet.value;//muestra el valor del carnet

			} else {
				span_carnet.style.display = "none";
				carnet_disca.style.display = "none";
				carnet_disca.value = "";

			}
			if (tipo_discaS.value != "")
			{
				span_carnet.style.display = "inline";
				carnet_disca.style.display = "inline";
			}
			//Tipo plantel
			switch (tipo_plantel.value)
			{
				case "": opcion=0;break;
				case "PUBLICO": opcion=1;break;
				case "PRIVADO": opcion=2;break;
				default:
				//alert(tipo_plantel.value);
			}
			tipo_plantelS.selectedIndex = opcion;
			//Mensualidad del Liceo
			costo_mensualI.value = costo_mensual.value;
			//Sistema de Estudio
			switch (sistema_estudio.value)
			{
				case "": opcion=0;break;
				case "REGULAR": opcion=1;break;
				case "PARASISTEMA": opcion=2;break;
				case "OTRO":
					opcion=3;
					otroSistemaE.style.display = "inline";//otroSistemaE(input)
					otroSistemaE.value = otro_siste_estu.value;//otro_siste_estu(value)
				break;
				default:
				alert(sistema_estudio.value);
			}
			sistema_estudioS.selectedIndex = opcion;
			//Turno de Estudio
			switch (turno_estudio.value)
			{
				case "": opcion=0;break;
				case "DIURNO": opcion=1;break;
				case "NOCTURNO": opcion=2;break;
				case "ESTUDIOS LIBRES": opcion=3;break;
				case "OTRO":
					opcion=4;
					otroTurnoE.style.display = "inline";
					otroTurnoE.value = otro_turno_estudio.value;
				break;
				default:
				alert(turno_estudio.value);
			}
			turno_estudioS.selectedIndex = opcion;
			//Titulo de Bachillerato
			switch (titulo_b.value)
			{
				case "": opcion=0;break;
				case "CIENCIAS": opcion=1;break;
				case "INDUSTRIAL": opcion=2;break;
				case "CONSTRUCCION CIVIL": opcion=3;break;
				case "CONSTRUCCION NAVAL": opcion=4;break;
				case "ELECTRICIDAD": opcion=5;break;
				case "INSTRUMENTACION": opcion=6;break;
				case "MECANICA-MANTENIMIENTO": opcion=7;break;
				case "MAQUINAS Y HERRAMIENTAS": opcion=8;break;
				case "REFRIG Y AIRE ACONDIC.": opcion=9;break;
				case "QUIMICA INDUTRIAL": opcion=10;break;
				case "ELECTROMECANICO": opcion=11;break;
				default:
				//alert(titulo_b.value);
			}
			titulo_bS.selectedIndex = opcion;
			//PROMEDIO DE BACHILLERATO
			/*
			var prom = promedio_b.value;
			if (prom < 13)
				{
				opcion = 1;
				} else if (prom > 13 && prom < 16)
				{
					opcion = 2;
				} else if (prom > 16 && prom < 18)
					{
					opcion = 3;
					} else {
						opcion = 4;
					}
			promedioS.selectedIndex = opcion;
			*/
			//opcion_cnu
			switch (opcion_cnu.value)
			{
				case "": opcion=0;break;
				case "1": opcion=1;break;
				case "2": opcion=2;break;
				case "3": opcion=3;break;
				case "4": opcion=4;break;
				case "5": opcion=5;break;
				case "6": opcion=6;break;
				case "0": opcion=7;break;
				default:
				//alert(opcion_cnu.value);
			}
			opcion_cnuS.selectedIndex = opcion;
			
			if (tipo_plantelS.value == 'PRIVADO')
			{
				costo_mensualI.style.display ='block';
				nom_mensu.style.display ='block';
			} else {
				costo_mensualI.style.display = 'none';
				nom_mensu.style.display = 'none';
			}
			//RUSSNIE
			//sit_eI.value = sit_e.value;
			
			//Prom.Total Bachill
			//ind_cnuI.value = ind_cnu.value;
			if (codpaisplantel.value == 232)
			{
				//alert(codpaisplantel.value);
				//activa los span
				edo_plantel_eSpan.style.display = "none";//span
				cd_plantel_eSpan.style.display = "none";
				mpio_plantel_eSpan.style.display = "none";
				edo_plantel_v.style.display = "inline";
				cd_plantel_v.style.display = "inline";
				mpio_plantel_v.style.display = "inline";
				parroq_plantel.style.display = "inline";
				
				//Muestra los valores en los select
				pais_plantel.value = codpaisplantel.value;//Select Pais Plantel
				edo_plantel.value = codedoplantel.value;//Select Edo Plantel
				//estado.value = codestado.value; //Select estado vivienda
				//mostrar cd y mpio del Plantel
				mostrar_ciudades_p(cdPlantel, estadoPlantel, paisPlantel);
				mostrar_municipios(mpioPlantel, estadoPlantel, paisPlantel);
				//mostrar cd y mpip donde vive//
				
				
				

			} else if (codpaisplantel.value != 0)
				{
				edo_plantel_eSpan.style.display = "inline";
				cd_plantel_eSpan.style.display = "inline";
				mpio_plantel_eSpan.style.display = "inline";

				edo_plantel_eI.style.display = "inline";
				cd_plantel_eI.style.display = "inline";
				mpio_plantel_eI.style.display = "inline";
				edo_plantel_v.style.display = "none";
				cd_plantel_v.style.display = "none";
				mpio_plantel_v.style.display = "none";
				parroq_plantel.style.dissplay = "none";
				
				edo_plantel_eI.value = codedoplantel.value;
				cd_plantel_eI.value = codcdplantel.value;
				mpio_plantel_eI.value = codmpioplantel.value;
				pais_plantel.value = codpaisplantel.value;//Select Pais Plantel
				}
			//A�o de Egreso del Plantel
			ano_egre_coleS.value = anio_egreso.value;

		}//fin del with
	 }//fin funcion
	 	//////////////////////////////////////////
		//rutina para activar los campos ocultos//	
		//////////////////////////////////////////
		function toggle_nac_e(elemento) 
		{
		//alert(elemento.value);
		if(elemento.value == 'E') 
		{
   		document.getElementById("span_extranjero").style.display = "inline";
		document.getElementById("span_doc").style.display = "inline";
		} 
			else 
			{
   			document.getElementById("span_extranjero").style.display = "none";
			document.getElementById("span_doc").style.display = "none";  
			}
		}//function
		
		
		function toggle_nro_pasaporte(elemento) 
		{
		//alert(elemento.value);
		if(elemento.value == 'PASAPORTE') 
		{
   		document.getElementById("span_nropasap").style.display = "inline";
		} 
			else 
			{
   			document.getElementById("span_nropasap").style.display = "none";
			}
		}//function
		

		function toggle_residencia(elemento) 
		{
		//alert(elemento.value);
		if(elemento.value == 'NO') 
		{
   		document.getElementById("div_residencia").style.display = "block";
		document.getElementById("div_residen").style.display = "block";
		document.getElementById("div_estado").style.display = "block";
		document.getElementById("div_avenida").style.display = "block";
		document.getElementById("div_urbanizacion").style.display = "block";
		document.getElementById("div_manzana").style.display = "block";
		document.getElementById("div_edificio").style.display = "block";
		document.getElementById("div_nrocasa").style.display = "block";
		document.getElementById("div_telefono").style.display = "block";
		} 
			else 
			{
   			document.getElementById("div_residencia").style.display = "none"; 
			document.getElementById("div_residen").style.display = "none";
			document.getElementById("div_estado").style.display = "none";
			document.getElementById("div_avenida").style.display = "none";
			document.getElementById("div_urbanizacion").style.display = "none";
			document.getElementById("div_manzana").style.display = "none";
			document.getElementById("div_edificio").style.display = "none";
			document.getElementById("div_nrocasa").style.display = "none";
			document.getElementById("div_telefono").style.display = "none";
			}
		}//function 
	///////////////////////////////////////////////////////////
	//////////////////VALIDACIONES/////////////////////////////
		function valida_envia(tipo)
		{		
		var error=0;
		mnsag="";
		with(document.valido)
		{		
		
		if(sexo.value=='')
		{
			error ++;
			//alert("Sexo")
			mnsag+= '- Sexo \n\n';
		}
		
		if(pais_nac_e.value == 0)
		{
			error ++;
			//alert(pais_nac_e.value);
			mnsag+= '- Pa�s de Nacimiento \n\n';
		}
		
		if (pais_nac_e.value == 232){
			if(edo_nac_e.value == 0)
			{
				error ++;
				//alert(edo_nac_e.value);
				mnsag+= '- Estado de Nacimiento \n\n';
			}
			if (ciudadN.value == '')
			{
				error ++;
				//alert(pais_nac_e.value.value);
				mnsag+= '- Ciudad de Nacimiento \n\n';
			}
			if(municipio_nac.value == '')
			{
				error ++;
				
				mnsag+= '- Municipio de Nacimiento \n\n';
			}
			if(parroquia_nac.value == '')
			{
				error ++;
				
				mnsag+= '- Parroquia de Nacimiento \n\n';
			}
			
			
		} 
		
		if (pais_nac_e.value != 232){ 
			if(otroPaisestado.value == '')
			{
				error ++;
				//alert(otroPaisestado.value);
				mnsag+= '- Estado o Provincia de Nacimiento \n\n';
			}
			
			if(otroPaisciudad.value == '')
			{
				error ++;
				//alert(otroPaisciudad.value);
				mnsag+= '- Ciudad de Nacimiento \n\n';
			}
		} else if (pais_nac_e.value == 232)//Ciudad de Nacimiento Venezolana
		{
			if(edo_nac_e.value == '')
			{
				error ++;
				//alert(edo_nac_e.value);
				mnsag+= '- Estado de Nacimiento \n\n';
			}
			
			if (ciudadN.value == '')
			{
				error ++;
				//alert(pais_nac_e.value.value);
				mnsag+= '- Ciudad de Nacimiento \n\n';
			}
			if(municipio_nac.value == '')
			{
				error ++;
				
				mnsag+= '- Municipio de Nacimiento \n\n';
			}
			if(parroquia_nac.value == '')
			{
				error ++;
				
				mnsag+= '- Parroquia de Nacimiento \n\n';
			}
			
		}
		
		/*
		if(etniaS.value==0)
		{
			error ++;
			//alert("Etnia Ind�gena")
			mnsag+= '- Etnia Ind�gena \n\n';
		}*/

		if(edo_c_e.value== '')
		{
			error ++;
			//alert("Estado civil")
			mnsag+= '- Estado Civil \n\n';
		}
		if (estado.value == '') {
            error ++;
			mnsag+= '- Estado donde vive permanentemente \n\n';
        }
		if(ciudad.value == '')
		{
			error ++;
			//alert("Ciudad donde vive")
			mnsag+= '- Ciudad donde vive permanentemente \n\n'; 
		}
        if (municipio.value == '') {
            error ++;
			mnsag+= '- Municipio donde vive permanentemente \n\n';
        }
		if(parroquia.value == '')
		{
			error ++;
			mnsag+= '- Parroquia donde vive permanentemente \n\n'; 
		}
		
		if(urbanizacion.value=='') 
		{
			error ++;
			//alert("Urbanizacion donde vive")
			mnsag+= '- Urbanizacion donde vive \n\n';
		}
		
		
		if(telefono3.value=='') 
		{
			error ++;
			//alert("indica un numero de telefono auxiliar")
			mnsag+= '- Numero de telefono auxiliar \n\n';
		}
		
		if((residencia[0].checked==false) && (residencia[1].checked==false)) 
		{
			error ++;
			//alert("Indique si su direccion de residencia es igual a la direccion permanente")
			mnsag+= '- Indique si su direccion de residencia es igual a la direccion permanente \n\n';
		}
		
		if((residencia[1].checked==true) && (ciudad_r.value=='')) 
		{
			error ++;
			//alert("Ciudad de residencia")
			mnsag+= '- Ciudad de Residencia \n\n'; 
		}

		
		if((residencia[1].checked==true) && (urbanizacion_r.value=='')) 
		{
			error ++;
			//alert("Urbanizacion de residencia")
			mnsag+= '- Urbanizacion de Residencia \n\n'; 
		}

		if(plantelI.value=='') 
		{
			error ++;
			//alert("indica un numero de telefono auxiliar")
			mnsag+= '- Nombre del Plantel \n\n';
		}

		if(tipo_plantelS.value=='') 
		{
			error ++;
			//alert("indica Tipo de Plantel")
			mnsag+= '- Tipo de Plantel \n\n';
		}

		if(pais_plantel.value == 0) 
		{
			error ++;
			//alert("Pais de Ubicacion del Plantel")
			mnsag+= '- Pa�s de Ubicaci�n del Plantel \n\n';
		}
        
		
		
		if (pais_plantel.value == 232)//VENEZUELA
		{
			if (edo_plantel.value == 0)
			{
				error ++;
				//alert("Estado de Ubicacion del Plantel")
				mnsag+= '- Estado de Ubicaci�n del Plantel \n\n';
			}

			if (codigoc_S_1.value == '')
			{
				error ++;
				//alert("Ciudad de Ubicacion del Plantel")
				mnsag+= '- Ciudad de Ubicaci�n del Plantel \n\n';
			}
			if (codigom_S_1.value == '')
			{
				error ++;
				//alert("Municipio de Ubicacion del Plantel")
				mnsag+= '- Municipio de Ubicaci�n del Plantel \n\n';
			}
			if (parroquia_plant == '')
			{
                error ++;
				mnsag+= '- Parroquia de Ubicaci�n del Plantel \n\n';
            }
			
		} else if (pais_plantel.value != 232 && pais_plantel.value != 0)
		{
			if (edo_plantel_eI.value == '')
			{
				error ++;
				//alert("Estado de Ubicacion del Plantel")
				mnsag+= '- Estado de Ubicaci�n del Plantel \n\n';
			}
			if (cd_plantel_eI.value == '')
			{
				error ++;
				//alert("Ciudad de Ubicacion del Plantel")
				mnsag+= '- Ciudad de Ubicaci�n del Plantel \n\n';
			}
			if (mpio_plantel_eI.value == '')
			{
				error ++;
				//alert("Municipio de Ubicacion del Plantel")
				mnsag+= '- Municipio de Ubicaci�n del Plantel \n\n';
			}
		}

		if(ano_egre_coleS.value == '') 
		{
			error ++;
			//alert("A�o de Egreso del Plantel")
			mnsag+= '- A�o de Egreso del Plantel \n\n';
		}

		if(sistema_estudioS.value == '') 
		{
			error ++;
			//alert("Sistema de Estudio")
			mnsag+= '- Sistema de Estudio \n\n';
		}
		
		if(turno_estudioS.value == '') 
		{
			error ++;
			//alert("Turno")
			mnsag+= '- Turno \n\n';
		}

		if(titulo_bS.value == '') 
		{
			error ++;
			//alert("T�tulo Obtenido")
			mnsag+= '- T�tulo Obtenido \n\n';
		}
		/*
		if(promedioS.value == '') 
		{
			error ++;
			//alert("Promedio de Bachillerato")
			mnsag+= '- Promedio de Bachillerato \n\n';
		}
		*/
		if(tipoIngreso.value == '') 
		{
			error ++;
			//alert("Asignado por")
			mnsag+= '- Asignado por \n\n';
		}

		if(opcion_cnuS.value == '') 
		{
			error ++;
			//alert("Opci�n CNU para UNEXPO")
			mnsag+= '- Opci�n CNU para UNEXPO \n\n';
		}
		
		/*
		if(sit_e.value == '')
		{
			error ++;
			//alert("Nro. Rusnie")
			mnsag+= '- Nro. Rusnie \n\n';
		}
		*/
		
		if(ind_cnuI.value == '') 
		{
			error ++;
			//alert("Prom.Total Bachill")
			mnsag+= '- Prom.Total Bachill. \n\n';
		}

		if(costo_mensualI.value == '' && tipo_plantelS == 'PRIVADO') 
		{
			error ++;
			//alert("Mensualidad")
			mnsag+= '- Mensualidad \n\n';
		}
		/*
		if(promedio_cast.value == '') 
		{
			error ++;
			//alert("Prom.Castell.")
			mnsag+= '- Prom.Castell. \n\n';
		}
		
		if(promedio_quim.value == '') 
		{
			error ++;
			//alert("Prom.Quimica")
			mnsag+= '- Prom.Quimica \n\n';
		}

		if(promedio_fisi.value == '') 
		{
			error ++;
			//alert("Prom.F�sica")
			mnsag+= '- Prom.F�sica \n\n';
		}

		if(promedio_mate.value == '') 
		{
			error ++;
			//alert("Prom.Matem&aacute;tica")
			mnsag+= '- Prom.Matem�tica \n\n';
		}
		*/
	if (error == 1 )
		{ 
		mnsag1 = "Existe "+error+" campo vac�o:  \n\n";
		alert(mnsag1+mnsag);
		//return true; 
		}
		
	else if (error > 1)
		{			
			mnsag1 = "Existen "+error+" campos vac�os: \n\n";
			alert(mnsag1+mnsag);
			//return false;
 			//alert('campos vacios');
 		}

			if (error >= 0)
				{
					if ((tipo == '1') && (error == 0))
					{
						envia=confirm('�Est� seguro que desea continuar?')
					}
						else if (tipo == '2') 
						{
						envia=confirm('Los campos vac�os deben ser completados la pr�xima vez que ingrese.\n\n�Est� seguro que desea guardar y salir?')
						}
							if(envia)
							{
							//alert(tipo);
								if (tipo == '2')
								{
								document.valido.ac.value='2';
								}
								document.valido.submit();							
							}
				}
			
			}//with
		}//function valida_envia
		

function letras (){
/*
var etnia=document.getElementById("etnia_indigena").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("etnia_indigena").value)){
document.getElementById("etnia_indigena").value="";}*/

var ciu =document.getElementById("ciudad").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("ciudad").value)){
document.getElementById("ciudad").value="";}

var edo =document.getElementById("estado").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("estado").value)){
document.getElementById("estado").value="";}

var av =document.getElementById("avenida").value;
if(!/^([a-z A-Z0-9 -])*$/.test(document.getElementById("avenida").value)){
document.getElementById("avenida").value="";}

var urb =document.getElementById("urbanizacion").value;
if(!/^([- a-z A-Z0-9])*$/.test(document.getElementById("urbanizacion").value)){
document.getElementById("urbanizacion").value="";}

var ciu_r =document.getElementById("ciudad_r").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("ciudad_r").value)){
document.getElementById("ciudad_r").value="";}

var edo_r =document.getElementById("estado_r").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("estado_r").value)){
document.getElementById("estado_r").value="";}

var av_r =document.getElementById("avenida_r").value;
if(!/^([a-z A-Z0-9 -])*$/.test(document.getElementById("avenida_r").value)){
document.getElementById("avenida_r").value="";}

var urb_r =document.getElementById("urbanizacion_r").value;
if(!/^([- a-z A-Z0-9])*$/.test(document.getElementById("urbanizacion_r").value)){
document.getElementById("urbanizacion_r").value="";}

var sist_e =document.getElementById("otroSistemaE").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("otroSistemaE").value)){
document.getElementById("otroSistemaE").value="";}

var turno_e =document.getElementById("otroTurnoE").value;
if(!/^([a-z A-Z])*$/.test(document.getElementById("otroTurnoE").value)){
document.getElementById("otroTurnoE").value="";}

}//fin funcion letras

function numeros (){

var mnz =document.getElementById("manzana").value;
if(!/^([- 0-9])*$/.test(document.getElementById("manzana").value)){
document.getElementById("manzana").value="";}

var edif =document.getElementById("edificio").value;
if(!/^([a-z A-Z.0-9 -])*$/.test(document.getElementById("edificio").value)){
document.getElementById("edificio").value="";}

var casa =document.getElementById("nrocasa").value;
if(!/^([- a-z A-Z.0-9])*$/.test(document.getElementById("nrocasa").value)){
document.getElementById("nrocasa").value="";}

var tlf =document.getElementById("telfp_e").value;
if(!/^([-0-9])*$/.test(document.getElementById("telfp_e").value)){
document.getElementById("telfp_e").value="";}

var tlfo2 =document.getElementById("telf2").value;
if(!/^([0-9])*$/.test(document.getElementById("telf2").value)){
document.getElementById("telf2").value="";}

var tlf3 =document.getElementById("telefono3").value;
if(!/^([-0-9])*$/.test(document.getElementById("telefono3").value)){
document.getElementById("telefono3").value="";}

var mnz_r =document.getElementById("manzana_r").value;
if(!/^([0-9-])*$/.test(document.getElementById("manzana_r").value)){
document.getElementById("manzana_r").value="";}

var edif_r =document.getElementById("edificio_r").value;
if(!/^([a-z A-Z.0-9 -])*$/.test(document.getElementById("edificio_r").value)){
document.getElementById("edificio_r").value="";}

var casa_r =document.getElementById("nrocasa_r").value;
if(!/^([a-z A-Z.0-9 -])*$/.test(document.getElementById("nrocasa_r").value)){
document.getElementById("nrocasa_r").value="";}

var tlf_r =document.getElementById("telfr_e").value;
if(!/^([-0-9])*$/.test(document.getElementById("telfr_e").value)){
document.getElementById("telfr_e").value="";}

var mensualidad =document.getElementById("costo_mensualI").value;
if(!/^([.0-9])*$/.test(document.getElementById("costo_mensualI").value)){
document.getElementById("costo_mensualI").value="";}
		
}//fin funcion numeros

function calcularEdad() {
	var hoy = new Date();
	with(document) {
		dia  = parseInt('0'+getElementById('dia').selectedIndex,10);
		if (dia < 1){
			dia=1;
		}
		mes  = parseInt('0'+getElementById('mes').value,10);
		ano = parseInt('0'+getElementById('ano').value,10);
		//alert('dia '+dia+' mes '+mes+' a�o '+ano);
		
	}
	var fnac= new Date(ano,mes,dia);
	var edad = new Date();
	if (fnac.getTime() < 0) {
		edad.setTime(hoy.getTime() - fnac.getTime());
		aniosEdad = edad.getYear();
		if (aniosEdad < 200) {
		aniosEdad = 1900 + aniosEdad;
		}
		aniosEdad = aniosEdad/1.0 + (edad.getMonth()+1)/12 + (edad.getDate())/365.25;
		aniosEdad = aniosEdad - 1970.0;
	}
	else {
		edad.setTime(hoy.getTime() - fnac.getTime());
		aniosEdad = edad.getYear()/1.0 + (edad.getMonth()+1)/12 + (edad.getDate())/365.25;
		if (aniosEdad < 200){
			aniosEdad = aniosEdad - 70.0;
		}
		else aniosEdad = aniosEdad - 1970.0;
	}
//	alert(aniosEdad);
	document.getElementById('edad').value = Math.floor(aniosEdad);
}

///********************************************************************************************/////
		function conf_inicial_NAC(){//CARGADO INICIAL DE PAIS,ESTADO Y CIUDAD DE NACIMIENTO
		//OBTENGO LAS VARIABLES DE DACE002
		var edoNacimiento = document.getElementById("edo_nacimiento").value;//ESTADO DE NACIMIENTO
		var cdNacimiento = document.getElementById("lugar_nac").value;//CIUDAD DE NACIMIENTO
		var paisNacimiento = document.getElementById("pais_hidden").value;//PAIS DE NACIMIENTO
		//alert(edoNacimiento);
				

		//OBTENGO LAS VARIABLES DE DOBE_ACADEMICO
		/*
		var edoplantel = document.getElementById("codedoplantel").value;
		var cdplantel = document.getElementById("codcdplantel").value;
		var paisplantel = document.getElementById("codpaisplantel").value;
		var mpioplantel = document.getElementById("codmpioplantel").value;
		*/
        		 
		if (edoNacimiento == ""){//si ENT_FED, est� vacio lo obliga 
								 //a actualizar Pais,Estado y ciudad de nacimiento
			document.getElementById("span_edo_nacimiento").style.display = "none";
			document.getElementById("span_ciudad_nacimiento").style.display = "none";
			document.getElementById("pais_nac_e").value = 0;//PAIS DE NACIMIENTO
			document.getElementById("edo_nac_e").value = 0;//ESTADO DE NACIMIENTO
			document.getElementById("otroPaisestado").value = '';//ESTADO DE NACIMIENTO(EXTRANJERO)
			document.getElementById("otroPaisciudad").value = '';//CIUDAD DE NACIMIENTO(EXTRANJERO)
			
		}//fin if
		
		else {//CUANDO ENT_FED TIENE DATOS
			
			if (paisNacimiento == '232'){//VENEZUELA
				//alert(document.getElementById(edoNacimiento).value);
				document.getElementById("pais_nac_e").value = 232;
				document.getElementById("span_edo_nacimiento").style.display = "inline";
				document.getElementById("edo_nac_e").value = edoNacimiento;
				document.getElementById("span_ciudad_nacimiento").style.display = "inline";

				// Llamar al asincrono y enviarle el valor de cdNacimiento				
				mostrar_ciudades(cdNacimiento);
				
			} else {
				
				//alert(document.getElementById(edoNacimiento).value);
				document.getElementById("pais_nac_e").value = paisNacimiento;				
				document.getElementById("span_otroPaisestado").style.display = "inline";
				document.getElementById("otroPaisestado").value = edoNacimiento;//ESTADO DE NACIMIENTO
				document.getElementById("span_otroPaisciudad").style.display = "inline";
				document.getElementById("otroPaisciudad").value = cdNacimiento;//CIUDAD DE NACIMIENTO
				document.getElementById("span_edo_nacimiento").style.display = "none";
				document.getElementById("span_ciudad_nacimiento").style.display = "none";
			}
		}//fin else
		}//FIN function conf_inicial_DACE()

		function paisnacimiento(pais) 
		{
			
			//alert(pais);
			if (pais == 232){//VENEZUELA
				document.getElementById("span_otroPaisestado").style.display = "none";
				document.getElementById("span_otroPaisciudad").style.display = "none";
				document.getElementById("span_edo_nacimiento").style.display = "inline";
				document.getElementById("span_ciudad_nacimiento").style.display = "inline";
				document.getElementById("mpio_nac").style.display = "inline";
				document.getElementById("parq_nac").style.display = "inline";
				
				
			}
			else{
				document.getElementById("span_otroPaisestado").style.display = "inline";
				document.getElementById("span_otroPaisciudad").style.display = "inline";
				document.getElementById("span_edo_nacimiento").style.display = "none";
				document.getElementById("span_ciudad_nacimiento").style.display = "none";
				document.getElementById("mpio_nac").style.display = "none";
				document.getElementById("parq_nac").style.display = "none";
			}
			
		}//FIN function paisnacimiento()


	function ciudades(estado,pais)
	{
		//alert(pais);
		fajax('estados_ciudades.php','capa','estado='+estado+'&pais='+pais,'post','0');
	}
	
	function AJAXCrearObjeto(){
	 var obj; 
	 
	 if(window.XMLHttpRequest) 
		{ // no es IE 
		obj = new XMLHttpRequest(); 
		} 
		else 
		{ // Es IE o no tiene el objeto 
			try { 
				 obj = new ActiveXObject("Microsoft.XMLHTTP"); 
				} 
			catch (e) { 
						alert('El navegador utilizado no est soportado'); 
					  } 
		} 
	 //alert ("objeto creado");
	 return obj; 
	} 
	
	function fajax(url,capa,valores,metodo,xml) //xml=1 (SI) xml=0 (NO)
	{
		//alert(capa);
		var ajax=AJAXCrearObjeto();
		var capaContenedora=document.getElementById(capa);
		//alert('capa '+capaContenedora);
		if (capaContenedora.type == "text"){
			texto = true;
		}else{
			texto = false;
		}
		//texto = true;
		var contXML;
		/* Creamos y ejecutamos la instancia si el metodo elegido es POST */
		if (metodo.toUpperCase()=='POST')
		{
	
			ajax.open ('POST', url, true);
			ajax.onreadystatechange = function() 
			{
				if (ajax.readyState==1) 
				{
					capaContenedora.innerHTML="<img src='loader.gif'>";
				}
				else if (ajax.readyState==4)
				{
					if (ajax.status==200)
					{
						if (xml==0)
						{	
							if (texto){
								document.getElementById(capa).value=ajax.responseText;
							}
							document.getElementById(capa).innerHTML=ajax.responseText;
						}
						if (xml==1)
						{
							var Contxml  = ajax.responseXML.documentElement;
							var items = Contxml.getElementsByTagName('nota')[0];
							var txt = items.getElementsByTagName('destinatario')[0].firstChild.data; 
							document.getElementById(capa).innerHTML=txt;
						}
					}
					else if (ajax.readyState==404)
					{
						capaContenedora.innerHTML = "La direccion no existe";
					}
					else
					{
						capaContenedora.innerHTML="Error: "+ajax.status;
					}
				}
			}
		
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			ajax.send(valores);
			return;
		}
		/* Creamos y ejecutamos la instancia si el metodo elegido es GET */
		if (metodo.toUpperCase()=='GET')
		{
			ajax.open ('GET', url, true);
			ajax.onreadystatechange = function() 
			{
				if (ajax.readyState==1) 
				{
					capaContenedora.innerHTML="<img src='loading.gif'>";
				}
				else if (ajax.readyState==4)
				{
					if (ajax.status==200)
					{
						if (xml==0)
						{
							document.getElementById(capa).innerHTML=ajax.responseText;
						}
						if (xml==1)
						{
							alert(ajax.responseXML.getElementsByTagName("nota")[0].childNodes[1].nodeValue); 
						}
					}
					else if (ajax.readyState==404)
					{
						capaContenedora.innerHTML = "La direccion no existe";
					}
					else
					{
						capaContenedora.innerHTML="Error: "+ajax.status;
					}
				}
			}
		
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			ajax.send(null);
			return;
		}
	}
	<!--FIN DEL SCRIPT--><!--SCRIPT QUE GENERAR EL LISTADO DE LAS CIUDADES CORRESPONDIENTE AL ESTADO SELECCIONADO-->	

	function paisplantel(pais) 
	{
		//alert(pais);
		if (pais == 232){//VENEZUELA
			document.getElementById("edo_plantel").value = "0";
			document.getElementById("edo_plantel_eI").style.display = "none";
			document.getElementById("cd_plantel_eI").style.display = "none";
			document.getElementById("mpio_plantel_eI").style.display = "none";
			document.getElementById("edo_plantel_v").style.display = "inline";
			document.getElementById("cd_plantel_v").style.display = "inline";
			document.getElementById("mpio_plantel_v").style.display = "inline";
			document.getElementById("parroq_plantel").style.display = "inline";
			
		}
		else{
			document.getElementById("edo_plantel_v").style.display = "none";
			document.getElementById("edo_plantel").value = "0";
			document.getElementById("cd_plantel_v").style.display = "none";
			document.getElementById("mpio_plantel_v").style.display = "none";
			document.getElementById("parroq_plantel").style.display = "none";
			document.getElementById("edo_plantel_eSpan").style.display = "inline";
			document.getElementById("edo_plantel_eI").style.display = "inline";
			document.getElementById("cd_plantel_eSpan").style.display = "inline";
			document.getElementById("cd_plantel_eI").style.display = "inline";
			document.getElementById("mpio_plantel_eSpan").style.display = "inline";
			document.getElementById("mpio_plantel_eI").style.display = "inline";
			document.getElementById("edo_plantel_eI").value = "";
			document.getElementById("cd_plantel_eI").value = "";
			document.getElementById("mpio_plantel_eI").value = "";
		}		
	}//FIN function paisnacimiento()
	
	
