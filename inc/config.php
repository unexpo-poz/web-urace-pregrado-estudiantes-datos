<?php
$enProduccion		= true;
$raizDelSitio		= 'http://'.$_SERVER['SERVER_NAME'].'/web/urace/pregrado/estudiantes/datos/';
$urlDelSitio		= 'http://'.$_SERVER['SERVER_NAME'].'/web/urace';

$lapsoProceso		= '2021-2';
$tLapso				= ' Lapso '.$lapsoProceso;
$laBitacora			= $_SERVER[DOCUMENT_ROOT].'/log/pregrado/estudiantes/atualiza_datos_'.$lapsoProceso.'.log';
$inscHabilitada		= true;
$modoInscripcion	= '2'; // 1: Inscripcion, 2: Inclusion y Retiro

$tProceso	= 'Actualizacion de Datos Personales y Socioecon&oacute;micos';

//Si se requiere imprimir en planilla un mensaje extra, activar esto y colocarlo
// en inc/msgExtra.php
$mensajeExtra		= false; 

$DSN = "CENTURA-dace";
$user = "c";
$pass = "c";

$sedesUNEXPO = array (	'CCS' => array('BQTO','CARORA'), 
						'CCS_'  => array('DACECCS'),
						'POZ'  => array('CENTURA-DACE')
				);

//$sedeActiva = 'BQTO';
//$sedeActiva = 'CCS';
$sedeActiva = 'POZ';
$pensumPoz = '4';

$nucleos = $sedesUNEXPO[$sedeActiva];

$tablaOrdenInsc = 'ORDEN_INSCRIPCION';

//$vicerrectorado		= "Luis Caballero Mej&iacute;as";
//$vicerrectorado		= "Barquisimeto";
$vicerrectorado		= "Puerto Ordaz";
$nombreDependencia = 'Unidad Regional de Admisi&oacute;n y Control de Estudios';

///Unidad Tributaria:
$unidadTributaria	= 65;
// Los rangos de sueldo minimo en UT a mostrar para elegir el ingreso familiar:
$rangosIngresoFamiliar = array(15, 30, 45, 60, 75);

// Proteccion de las paginas contra boton derecho, no javascript y navegadores no soportados:
if ($enProduccion){
	$botonDerecho = 'oncontextmenu="return false"';
	$noJavaScript = '<noscript><meta http-equiv="REFRESH" content="0;URL=no-javascript.php"></noscript>';
	$noCache	  = "<meta http-equiv=\"Pragma\" content=\"no-cache\">\n";
	$noCache	 .= '<meta http-equiv="Expires" content="-1">';
	$noCacheFin	  = '<head><meta http-equiv="Pragma" content="no-cache"></head>';
}
else {
	$botonDerecho = '';
	$noJavaScript = '';
	$noCache	  = '';
	$noCacheFin	  = '';
}
?>