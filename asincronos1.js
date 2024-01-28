////////////////////////////////////////////////////////////////////////////////////////////
<!--FUNCION PARA GENERAR EL LISTADO DE LAS CIUDADES CORRESPONDIENTE AL ESTADO DONDE VIVE-->
///////////////////////////////////////////////////////////////////////////////////////////
function ciudadesr(estado,ciudad)
	{
		var pais = '232';// Codigo para Venezuela
		//alert(estado);
		fajax('estados_ciudadesres.php','capa_r','estado='+estado+'&pais='+pais+'&ciudad='+ciudad,'post','0');
		
	}
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////
<!--FUNCION PARA GENERAR EL LISTADO DE LOS MUNICIPIOS CORRESPONDIENTE AL ESTADO SELECCIONADO DONDE VIVE-->
//////////////////////////////////////////////////////////////////////////////////////////////////////////	
	function municipios_res(estado,municipio)
	{
		var pais = '232';// Codigo para Venezuela
		fajax('municipios_res.php','capa_m','estado='+estado+'&pais='+pais+'&municipio='+municipio,'post','0');
	}
	

<!--FUNCION PARA GENERAR EL LISTADO DE LOS PARROQUIAS CORRESPONDIENTE AL MUNICIPIO SELECCIONADO DONDE VIVE-->
/////////////////////////////////////////////////////////////////////////////////////////////////////////////	
function parroquia_res(estado,municipio,parroquia)
	{
		//alert(municipio);
		fajax('parroquias.php','capa_pa','estado='+estado+'&municipio='+municipio+'&parroquia='+parroquia,'post','0');
	}

/////////////PARROQUIA DEL PLANTEL//////////////////////////////////////////////////////////
function parroquia_plantel(estado,municipio,parroquia)
	{
		//alert(municipio);
		fajax('parroquia_plantel.php','capa_pl','estado='+estado+'&municipio='+municipio+'&parroquia='+parroquia,'post','0');
	}

/////////////////////////////MUNICIPIO DE CIUDAD DONDE NACIO///////////////////////////////
function municipios_naci(estado,pais,municipio)
	{
		
		fajax('municipio_nac.php','capa_mn','estado='+estado+'&pais='+pais+'&municipio='+municipio,'post','0');
	}

////////////////////////////PARROQUIA DEL MUNICIPIO DONDE NACIO//////////////////////////
function parroquia_naci(estado,municipio,parroquia)
	{
		//alert(municipio);
		fajax('parroquia_naci.php','capa_pn','estado='+estado+'&municipio='+municipio+'&parroquia='+parroquia,'post','0');
	}
////////////////////////////////////////////////////////////////////////////////////////
<!--SCRIPT QUE GENERA LOS EVENTOS, PARA LOS ASINCRONOS DE CIUDAD, MUNICIPIO Y PARRORIA-->
///////////////////////////////////////////////////////////////////////////////////////////
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
						alert('El navegador utilizado no esta soportado'); 
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
	<!--FIN DEL SCRIPT--><!--SCRIPT QUE GENERA LOS LISTADOS GENERADOS-->		