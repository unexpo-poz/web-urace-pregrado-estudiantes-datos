		<?php
		include_once('inc/config.php');
		include_once('inc/odbcss_c.php');

		$tipo_cta = $_POST['tipocuenta'];
		$nro_cta = $_POST['nrocuenta'];
		$lapsoBanco = $_POST['lapsoBanco'];
		$lapso = $_POST['lapso'];
		$beneficioactual = $_POST['beneficioactual'];
		$horas = $_POST['nrohorasactual'];
		
		//SI LAPSOPROCESO ES IGUAL AL ULTIMO LAPSO DEL BENEFICIO
		$dependenciactu = $_POST['dependenciactu'];
		$uc_actuales = $_POST['uc_actuales'];
		$LapsoAnterior= $_POST['LapsoAnterior'];
		$nombre_ayuBA= $_POST['beneficioanterior'];
		$nro_horaBA= $_POST['nrohorasanterior'];
		$dependenciaAnte= $_POST['dependenciante'];
		$uc_anterior= $_POST['uc_anterior'];
		$exp_e=$_POST['expediente'];
		$fila_dat_soci=$_POST['fila_dat_soci'];
		$filadobesoci=$_POST['filadobesoci'];
		$fila_dace=$_POST['fila_dace'];
		$fila_ayu_est=$_POST['fila_ayu_est'];
		$residencia=$_POST['resi'];
		$nac_e=$_POST['nac'];
		$ci_e=$_POST['cedula'];
		$sexo=$_POST['sexo'];
		$apellidos= $_POST['apellidos'];
		$nombres=$_POST['nombres'];
		$f_nac_e=$_POST['f_nac_e'];
		$p_nac_e=$_POST['p_nac_e'];
		$p_nac_e2=$_POST['p_nac_e2'];
		$estado_nac=$_POST['estado_nac'];
		$estado_nac2 = $_POST['estado_nac2'];
		$l_nac_e = strtoupper($_POST['l_nac_e']);
		$l_nac_e2 = $_POST['l_nac_e2'];
		$edo_c_e=$_POST['edo_c_e'];
		$ciudad=$_POST['ciudad'];
		$avenida=$_POST['avenida'];
		$urbanizacion=$_POST['urbanizacion'];
		$manzana=$_POST['manzana'];
		$edificio=$_POST['edificio'];
		$nrocasa=$_POST['nrocasa'];
		$telfp_e=$_POST['telfp_e'];
		$celcod=$_POST['celcod'];
		$telf2=$_POST['telf2'];
		$telefono3=$_POST['telefono3'];
		$fec_ins=$_POST['fec_ins'];
		$ingreso=$_POST['ingreso'];
		$lapso_in=$_POST['lapso_in'];
		$carrera=$_POST['carrera'];
		$descripcion=$_POST['descripcion'];
		$estatus_e=$_POST['estatus_e'];
		$semestre=$_POST['semestre'];
		$u_cred_aprob_t=$_POST['u_cred_aprob_t'];
		$u_cred_pen_t=$_POST['u_cred_pen_t'];
		$u_cred_insc_t=$_POST['u_cred_insc_t'];
		$c_aprob_equiv_t=$_POST['c_aprob_equiv_t'];
		$ind_acad_t=$_POST['ind_acad_t'];
		$tesista=$_POST['tesista'];
		$u_c_p_indic_t=$_POST['u_c_p_indic_t'];
		$mostrar = $_POST['mostrar'];
		$correo1=$_POST['correo1'];
		$clave=$_POST['clave'];
		$padre=$_POST['padre'];
		$madre=$_POST['madre'];
		$hnos=$_POST['hnos'];
		$espo=$_POST['espo'];
		$hijos=$_POST['hijos'];
		$nintegrantes=$_POST['nintegrantes'];

		$etnia_indigena = $_POST['etnia_indigena'];
		$disc=$_POST['disca'];
		$carnet_disca = $_POST['carnet_disca'];
		$nomb_plantel = $_POST['nomb_plantel'];
		$tipo_plantel = $_POST['tipo_plantel'];
		$costo_mensual = $_POST['costo_mensual'];
		$pais_plantel = $_POST['pais_plantel'];
		$edo_plantel = $_POST['edo_plantel'];
		$cd_plantel = $_POST['cd_plantel'];
		$mpio_plantel = $_POST['mpio_plantel'];
		$anio_egre_cole = $_POST['anio_egre_cole'];
		$sistema_estudio = $_POST['sistema_estudio'];
		$turno_estudio = $_POST['turno_estudio'];
		$titulo_b = $_POST['titulo_b'];
		$opcion_cnu = $_POST['opcion_cnu'];
		$rusnie = $_POST['rusnie'];
		$promBachill = $_POST['promBachill'];

		//OPCION PARA EL CNU
		switch($opcion_cnu){
			case "1":
				$opcion_cnu = "PRIMERA";
			break;
			case "2":
				$opcion_cnu = "SEGUNDA";
			break;
			case "3":
				$opcion_cnu = "TERCERA";
			break;
			case "4":
				$opcion_cnu = "CUARTA";
			break;
			case "5":
				$opcion_cnu = "QUINTA";
			break;
			case "6":
				$opcion_cnu = "SEXTA";
			break;
			case "0":
				$opcion_cnu = "NINGUNA";
			break;
		}
		//MATRIZ PARA REGISTRAR AL GRUPO FAMILIAR
		if ($padre == "SI"){
			$grupofamiliar[0] = "Padre";
		}
		if ($madre == "SI"){
			$grupofamiliar[1] = "Madre";
		}
		if ($hnos == "SI"){
			$grupofamiliar[2] = "Hermanos";
		}
		if ($espo == "SI"){
			$grupofamiliar[3] = "Esposo(a)";
		}
		if ($hijos == "SI"){
			$grupofamiliar[4] = "Hijos";
		}
		if (!empty($grupofamiliar)){
		$grupofamiliar = implode(", ",$grupofamiliar);//MUESTRA EL GRUPO FAMILIAR SEPARADOS POR COMA
		}
		$lug_resid=$_POST['lug_resid'];
		$estado=$_POST['estado']; $estado =strtoupper($estado);
		$parentesco_hog=$_POST['parentesco_hog'];
		//bloque que va hacia dobe_socioeconomic//
		$turno_trabajo=$_POST['turno_trabajo'];
		$instr_padre=$_POST['instr_p'];
		$ocup_padre=$_POST['ocup_p'];	
		($ocup_padre == 'OTRO') ? $ocup_padre = strtoupper($_POST['ocup_p']) : $ocup_padre = strtoupper($_POST['ocup_p']);	
		$instr_madre=$_POST['instr_m'];
		$ocup_madre=$_POST['ocup_m']; 
		($ocup_madre == 'OTRO') ? $ocup_madre = strtoupper($_POST['ocup_m']) : $ocup_madre = strtoupper($_POST['ocup_m']);		
		//$tipo_vivienda=$_POST['tipo_vivienda'];
		$monto_alq=$_POST['monto_alq'];
		
		//////////////////////////////////////////
		$estrato_social=$_POST['st_social'];
		$ingreso_f=$_POST['ing_f'];
		$trab=$_POST['trab'];

		$alq_resi=$_POST['alq_resi'];
		$monto=$_POST['monto'];
		$tenencia=$_POST['tenencia'];//TENENCIA DE VIVIENDA
		$tvivienda=$_POST['tvi'];//TIPO DE VIVIENDA

		$ubicacion=$_POST['ubicacion'];
		$agua=$_POST['ag'];
		$elect=$_POST['elec'];
		$telef=$_POST['telefo'];
		$tvkabl=$_POST['tvca'];
		$internet=$_POST['intern'];		
		$trabajo=$_POST['trabajo'];
		$ingmensual=$_POST['ingmensual'];
		$depend=$_POST['depend']; $depend =strtoupper($depend);
		$mesada=$_POST['mesada'];
		$beca=$_POST['b'];
		$organismo=$_POST['organismo']; $organismo =strtoupper($organismo);
		$mont=$_POST['mont'];
		
		$cancer=$_POST['ca'];
		$respi=$_POST['respi'];
		$cereb=$_POST['cere'];
		$sida=$_POST['sida'];
		$diab=$_POST['diab'];
		$cardia=$_POST['cardia'];
		$alerg=$_POST['alerg'];
		$renal=$_POST['renal'];
		$hepat=$_POST['hepat'];
		$trsex=$_POST['trsex'];
		$otra=$_POST['otra'];
		$cua=$_POST['cua']; $cua =strtoupper($cua);
		$quien=$_POST['quien']; $quien =strtoupper($quien);
		$padc_familia=$_POST['padc_familia'];
		$cual=$_POST['cual']; $cual =strtoupper($cual);
		$consult=$_POST['consult'];
		$especialista=$_POST['especialista']; $especialista =strtoupper($especialista);
		$int_quir=$_POST['int_quir'];
		$comedor=$_POST['comedor'];
		$transp=$_POST['transp'];
		$ruta=$_POST['ruta']; $ruta =strtoupper($ruta);
		$prepa=$_POST['prepa'];
		$alumn=$_POST['alumn'];
		$lentes=$_POST['lentes'];
		$odont=$_POST['odont'];
		$prob_sal=$_POST['prob_sal'];
		$med_gen=$_POST['med_gen'];
		$ginec=$_POST['ginec'];
		$odonto=$_POST['odonto'];
		$teatro=$_POST['teatro'];
		$excur=$_POST['excur'];
		$danza=$_POST['danza'];
		$centroe=$_POST['centroe'];
		$musica=$_POST['musica'];
		$dep=$_POST['dep'];
		$particip=$_POST['particip'];
		$act=$_POST['act']; $act =strtoupper($act);
		$fini=$_POST['fini'];
		$ffin=$_POST['ffin'];
		$intervencion=$_POST['intervencion']; $intervencion =strtoupper($intervencion);

		$conex = new ODBC_Conn($DSN,$user,$pass,TRUE,'prueba.log');
		
		//Discapacidad
		if ($disc != ''){
			//$conexion_disca = new ODBC_Conn($DSN_NINGRESO,$userN,$passN);
			$sql_disca = "SELECT DESCRIPCION ";
			$sql_disca.= "FROM DISCAPACIDAD ";
			$sql_disca.= "WHERE NUMERO = '".$disc."'";
			$conex->ExecSQL($sql_disca) or die ("No se ha podido realizar la consulta");
			$conex_disca = $conex->result;
			$disc = $conex_disca[0][0]; //DISCAPACIDAD EN NOMBRE
		} else {$disc = 'NO';}

		//TITULO OBTENIDO
		switch ($titulo_b){
			case "CIENCIAS":
				$titulo_b = "CIENCIAS BASICAS Y TECNOLOGICAS";
			break;
			case "INDUSTRIAL":
				$titulo_b = "INDUSTRIAL MENCI&Oacute;N(T&Eacute;CNICO MEDIO";
			break;
			case "CONSTRUCCION CIVIL":
				$titulo_b = "CONSTRUCCI&Oacute;N CIVIL";
			break;
			case "CONSTRUCCION NAVAL":
				$titulo_b = "CONTRUCCI&Oacute;N NAVAL";
			break;
			case "ELECTRICIDAD":
				$titulo_b = "ELECTRICIDAD";
			break;
			case "INSTRUMENTACION":
				$titulo_b = "INSTRUMENTACI&Oacute;N";
			break;
			case "MECANICA-MANTENIMIENTO":
				$titulo_b = "M&Eacute;CANICA DE MANTENIMIENTO";
			break;
			case "MAQUINAS Y HERRAMIENTAS":
				$titulo_b = "M&Aacute;QUINAS Y HERRAMIENTAS";
			break;
			case "REFRIG Y AIRE ACONDIC.":
				$titulo_b = "REFRIGERACION Y AIRE ACONDICIONADO";
			break;
			case "QUIMICA INDUTRIAL":
				$titulo_b = "QU&Iacute;MICA INDUSTRIAL";
			break;
			case "ELECTROMECANICO":
				$titulo_b = "ELECTROMEC&Aacute;NICO";
			break;
		}
		

		$sqlP = "select pai_nombre from paises where codigo = $p_nac_e2";
		$conex->ExecSQL($sqlP,__LINE__,true);
		$resultadoP = $conex->result;
		$p_nac_e = $resultadoP[0][0];

		if ($p_nac_e2 == 232){/*$estado_nac2 DEBE SER NUMERO*/
		$sqlE = "select edo_nombre from estados where codigo = $estado_nac2";
		$conex->ExecSQL($sqlE,__LINE__,true);
		$resultadoE = $conex->result;
		$estado_nac = $resultadoE[0][0];

		$sqlC = "select cd_nombre from ciudades where codigo = $l_nac_e2";
		$conex->ExecSQL($sqlC,__LINE__,true);
		$resultadoC = $conex->result;
		$l_nac_e = $resultadoC[0][0];
		}

		//////////////////////////////////////////////////////////////////////
		/////info del Nombre del pais, Estado, ciudad y Mpio del LICEO////////
		//////////////////////////////////////////////////////////////////////
		$sqlPaisPlantel = "select pai_nombre from paises where codigo = $pais_plantel";
		$conex->ExecSQL($sqlPaisPlantel,__LINE__,true);
		$resulPaisPlantel = $conex->result;
		$pais_plantel = $resulPaisPlantel[0][0];		

		if ($pais_plantel == "Venezuela"){
		$sqlPlantel = "select edo_nombre, cd_nombre, mpio_nombre ";
		$sqlPlantel.= "from estados e, ciudades c, municipios m ";
		$sqlPlantel.= "where e.codigo = $edo_plantel and ";
		$sqlPlantel.= "c.codigo = $cd_plantel and m.codigo = $mpio_plantel and m.cod_edo = $edo_plantel and m.cod_pais = 232";
		$conex->ExecSQL($sqlPlantel,__LINE__,true);
		$rPlantel = $conex->result;
		$edo_plantel = $rPlantel[0][0];
		$cd_plantel = $rPlantel[0][1];
		$mpio_plantel = $rPlantel[0][2];
		}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!-- <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <title>REPORTE DE DATOS PERSONALES, ACADEMICOS Y SOCIOECONOMICOS</title>

<script src="funciones2.js"> </script>

<script languaje="javascript">
function imprimir(){
	var ocul;
	//alert('Recuerde entregar dos (2) copias firmadas de esta acta en el departamento.');
	botones=document.getElementById("oculto");
	botones.style.visibility='hidden';
	//alert('EL botòn "Imprimir" se activará nuevamente en 5 segundos.');
	window.print();
	setTimeout("botones.style.visibility='visible'",2000);
}
</script>
</head>

<body>
<table border="0" align="center" style="font-family:arial;width:900px;color:navy;font-weight:bold;">
	<tr>
        <td  rowspan="5" align="center"> 
			<img border="0" src="/img/logo_unexpo_azul.png" 
		     width="80" height="60">
        </td>
        <td align="center">
			Universidad Nacional Experimental Polit&eacute;cnica
        </td>
    </tr>
        
    <tr>  
        <td align="center">
			<?php echo utf8_encode("Antonio Jos&eacute; de Sucre") ?>
        </td>
  	</tr>
    
    <tr>  
        <td align="center">
			Vicerrectorado Puerto Ordaz
        </td>
  	</tr>
	<tr>   
        <td align="center">
			<?php echo $nombreDependencia;?>
        </td>
  	</tr>    
   	<tr>   
        <td align="center">
			Reporte de Datos Personales, Acad&eacute;micos e Informaci&oacute;n Socioecon&oacute;mica
        </td>
  	</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
    <td style="padding-left:5px;padding-top:5px;padding-bottom:5px;"><font color= NAVY><B>IDENTIFICACION DEL ESTUDIANTE</B></font>
    </td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
    <td> 
		<font color= NAVY><B> C&eacute;dula: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$nac_e"; ?>&nbsp;-&nbsp;
		<?php echo "$ci_e"; ?></span>
    </td>

    <td>
		<font color= NAVY><B> Expediente: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$exp_e"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Primer Apellido: </font></B><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		 <?php echo "$apellidos"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Primer Nombre: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php echo "$nombres"; ?></span>
    </td>
    
    <td>
		<font color= NAVY> <B>Fecha de Nacimiento: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;"> 
		<?php echo implode('/',array_reverse(explode('-',$f_nac_e))) ?></span>
    </td>
    
</tr>

<tr>

	<td>
		<font color= NAVY><B> Sexo: </font></B><br/>
		<span style="font-size:13px;padding-left:5px;"> 

		<?php 
			switch ($sexo){
				case 0:
					echo "F";
					break;	
				case 1:
					echo "M";
					break;	
			}
		?>
		</span>
    </td>
        
	<td>
		<font color= NAVY><B> Pa&iacute;s de Nacimiento:</B></font><br/>
		 <span style="font-size:13px;padding-left:5px;"> 
		<?php echo utf8_encode(strtoupper("$p_nac_e")); ?></span>
    </td>
	
    <td>
		<font color= NAVY><B> Estado de Nacimiento: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper("$estado_nac")); ?></span> 
    </td>
    
    <td>
		<font color= NAVY><B> Ciudad de Nacimiento: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper("$l_nac_e")); ?></span> 
    </td>

    <td>
		<font color= NAVY><B> Etnia Ind&iacute;gena:</B></font> <br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper("$etnia_indigena")); ?></span>
    </td>

</tr>

<tr>
    <td>
		<font color= NAVY><B> Estado Civ&iacute;l: </B></font><br />
		<span style="font-size:13px;padding-left:5px;">
		<?php 
			switch ($edo_c_e){
				case 1:
					echo "SOLTERO(A)";
					break;
				case 2:
					echo "CASADO(A)";
					break;
				case 3:
					echo "CONCUBINO(A)";
					break;
				case 4:
					echo "VIUDO(A)";
					break;
				case 5:
					echo "DIVORCIADO(A)";
					break;		
			}
		?>
		</span>
    </td>   

</tr>

<tr>
    <td colspan="5">
		<font color="#FF3300"> <B>Correo Electr&oacute;nico Estudiantil: </font>&nbsp;
		<?php echo "$correo1"; ?></B>&nbsp;&nbsp;
		<font color="#FF3300"> <B>Clave: </font>&nbsp;
		<?php echo "$clave"; ?></B>
    </td>
</tr>
</table>
</td></tr>
</table>

<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color=NAVY><B>DIRECCION DE HABITACION </B></font>
     </td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	<td>
		<font color= NAVY><B>Direcci&oacute;n Permanente:</B></font></font>	
    </td>
	
	<td>
		<font color= NAVY><B> Ciudad: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$ciudad"; ?></span> 
	</td>

    <td>
		<font color= NAVY><B> Aven&iacute;da/Calle: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$avenida"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Barrio/Urb: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$urbanizacion"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Manzana Nº: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$manzana"; ?></span>
    </td> 
    
</tr>
<tr>
    <td>
		<font color= NAVY><B>Edif&iacute;cio/Torre Nº:</B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$edificio"; ?></span>
    </td>
	
    <td>
		<font color= NAVY><B> Casa/Apto Nº: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$nrocasa"; ?></span>	
    </td>
    
    <td>
		<font color= NAVY><B> Tlf Hab: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$telfp_e"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Tlf cel: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$celcod"; ?>&nbsp;-&nbsp;
		<?php echo "$telf2"; ?>   	</span>
   	</td>
    
    <td>
		<font color= NAVY><B> Tlf Auxiliar:</B> </font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$telefono3"; ?></span>
	</td>    
    
</tr>   
</table>
</td></tr>
</table>

<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color= NAVY><B>DATOS ACADEMICOS ACTUALES </B></font>
    </td>
</tr>
</table> 
<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	<td>
		<font color= NAVY><B> Fecha de Inscripci&oacute;n:</B> </font>
		<span style="font-size:15px;padding-left:5px;">
	   <?php echo implode('/',array_reverse(explode('-',$fec_ins))) ?></span>
    </td>
  
    <td>
		<font color= NAVY><B> Condici&oacute;n de Ingreso: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$ingreso"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Lapso de Ingreso: </B></font>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$lapso_in"; ?></span>
    </td>
    
    <td colspan="2">
		<font color= NAVY><B> Especialidad: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$carrera"; ?></span>
    </td>

</tr>

<tr>
	<td>
		<font color= NAVY><B> Pensum: </B></font><br/>
		<span style="font-size:14px;padding-left:5px;">
		<?php echo "$descripcion"; ?></span>
    </td>
    
	<td>
		<font color= NAVY><B> Estatus: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php 
			switch ($estatus_e){

				case 1:
					echo "ACTIVO";
					break;	
				case 2:
					echo "INACTIVO";
					break;	
			}
		?></span>
    </td>
	
    <td>
		<font color= NAVY><B> Semestre: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$semestre"; ?></span>
    </td>
	
    <td>
		<font color= NAVY><B> Cr&eacute;ditos Aprobados: </B></font>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$u_cred_aprob_t"; ?></span>
    </td>
	
    <td>
		<font color= NAVY><B> Cr&eacute;ditos Aprobados para el Pensum: </B></font>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$u_cred_pen_t"; ?></span>
    </td>
	    
</tr>
<tr>
	<td>
		<!-- <font color= NAVY> <B>Cr&eacute;ditos Inscritos:</B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$u_cred_insc_t"; ?></span> -->
    </td>
    
	<td>
		<font color= NAVY><B> Cr&eacute;ditos Aprobados por Equivalencia:</B> </font>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$c_aprob_equiv_t"; ?></span>
    </td>
	
    <td>
		<font color= NAVY> <B>Indice Acad&eacute;mico: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$ind_acad_t"; ?></span>
    </td>
	
    <td>
		<font color= NAVY><B> Tesista: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php 
			switch ($tesista){

				case 0:
					echo "NO";
					break;	
				case 1:
					echo "SI";
					break;	
			}
		?>
		</span>
    </td>
	
    <td>
		<font color= NAVY><B> Cr&eacute;ditos para el Indice:</B> </font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$u_c_p_indic_t"; ?></span>
    </td>
</tr>
</table>
</td></tr>
</table>

<!-- LICEO -->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color= NAVY><B>DATOS ACADEMICOS BACHILLERATO (LICEO)</B></font>
    </td>
</tr>
</table> 
<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	<td colspan ="5">
		<font color= NAVY><B>Nombre del Plantel de Procedencia:</B> </font>
		<span style="font-size:15px;padding-left:5px;">
	   <?php echo $nomb_plantel ?></span>
    </td>
</tr>
<tr>
	<td>
		<font color= NAVY><B> Tipo de Plantel:</B> </font>
		<span style="font-size:15px;padding-left:5px;">
	   <?php echo $tipo_plantel; ?></span>
    </td>
  
    <td>
		<font color= NAVY><B> Costo Mensual: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo $costo_mensual; ?></span>
    </td>
    
    <td colspan="2">
		<font color= NAVY><B> Pais de Ubicaci&oacute;n del Plantel: </B></font>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper($pais_plantel)); ?></span>
    </td>
</tr>
<tr>
	<td>
		<font color= NAVY><B>Estado de Ubicaci&oacute;n:</B></font><br/>
		<span style="font-size:14px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper($edo_plantel)); ?></span>
    </td>
    
	<td>
		<font color= NAVY><B>Ciudad de Ubicaci&oacute;n:</B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper($cd_plantel)); ?></span></span>
    </td>
	
    <td colspan="2">
		<font color= NAVY><B>Municipio de Ubicaci&oacute;n:</B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo utf8_encode(strtoupper($mpio_plantel)); ?></span>
    </td>

    <td>
		<font color= NAVY><B> A&ntilde;o de Egreso: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $anio_egre_cole; ?></span>
    </td>
</tr>
<tr>
	<td>
		<font color= NAVY> <B>Sistema de Estudio:</B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $sistema_estudio; ?></span>
    </td>
	<td>
		<font color= NAVY><B>Turno de Estudio:</B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $turno_estudio; ?></span>
    </td>
    <td colspan="2">
		<font color= NAVY> <B>Titulo Obtenido: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $titulo_b; ?></span>
    </td>
</tr>
<tr>
	<td>
		<font color= NAVY><B>Opci&oacute;n para el CNU:</B> </font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $opcion_cnu; ?></span>
    </td>
	<td>
		<font color= NAVY><B>Nro. de Rusnie:</B> </font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $rusnie; ?></span>
	</td>
	<td>
		<font color= NAVY><B>Promedio de Bachillerato:</B> </font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo $promBachill; ?></span>
	</td>
</tr>
</table>
</td></tr>
</table>
<!-- LICEO -->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color= NAVY><B>DATOS FAMILIARES </B></font>
	</td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	<td>
		<font color= NAVY><B>Grupo Familiar: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$grupofamiliar"; ?></span>
	</td>
	<td>
		<font color= NAVY><B>Nº de Personas del Grupo Familiar: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$nintegrantes"; ?></span>
	</td>
	<td>
		<font color= NAVY><B>Instrucci&oacute;n Acad&eacute;mica del Padre: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$instr_padre"; ?></span>
	</td>
	<td>
		<font color= NAVY><B>Ocupaci&oacute;n del Padre: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
        <?php echo "$ocup_padre"; ?></span>
	</td>
	<td>
		<font color= NAVY><B>Instrucci&oacute;n Acad&eacute;mica de la Madre: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$instr_madre"; ?></span>
	</td>
</tr>
<tr>
	<td>
		<font color= NAVY><B>Ocupaci&oacute;n de la Madre: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$ocup_madre"; ?></span>
	</td>
	<td>
        <font color= NAVY><B>Tenencia de Vivienda: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$tenencia"; ?></span>
	</td>
	<td>
        <font color= NAVY><B>Alquiler(Bs): </B></font><br/>
        <span style="font-size:15px;padding-left:5px;">
        <?php echo "$monto_alq"; ?></span>
	</td>
	<td>
        <font color= NAVY><B> Estrato Social: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
		<?php echo "$estrato_social"; ?></span>
	</td>
</tr>
<tr>
	<td>
		<font color= NAVY><B>Ingreso Familiar: </B></font><br/>
        <span style="font-size:15px;padding-left:5px;">
			<?php
				echo substr($ingreso_f,2);
			?>
		</span>
	</td>
</tr>
</table>
</td></tr>
</table>
<!--///////////////////////////-->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color= NAVY><B>DATOS DE LA VIVIENDA </B></font>
	</td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	<td>
		<font color= NAVY><B>Tipo de Vivienda: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$tvivienda"; ?></span>
	</td>
	<td>
        <font color= NAVY><B>Ubicaci&oacute;n: </B></font><br/>
        <span style="font-size:13px;padding-left:5px;">
        <?php echo "$ubicacion"; ?></span>
	</td>
</tr>
<tr>
	<td colspan="4">
		<font color= NAVY><B> Servicios de los que dispone: </B></font>
		<table border="0" width="80%" style="font-size:12px;" align="center">
		<tr>
			<td style="padding-right:10px;">
				<font color= NAVY> Agua: </font><span style="font-size:13px;padding-left:5px;">
				<?php echo "$agua"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Electricidad: </font><span style="font-size:13px;padding-left:5px;"> 
				<?php echo "$elect"; ?></span>
			</td>
			
			<td style="padding-right:10px;">
				<font color= NAVY> Tel&eacute;fono: </font><span style="font-size:13px;padding-left:5px;"> 
				<?php echo "$telef"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Internet:</font><span style="font-size:13px;padding-left:5px;">
				<?php echo "$internet"; ?></span>
			</td>	
			<td style="padding-right:10px;">
				<font color= NAVY> TV Cable:</font><span style="font-size:13px;padding-left:5px;">
				<?php echo "$tvkabl"; ?></span>
			</td>
		</tr>
		</table>
	</td>             
</tr>
</table>
</td></tr>
</table>
<!--////////////////////////////-->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color= NAVY><B>DATOS ECONOMICOS LABORALES </B></font>
	</td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">

<tr>
	<td colspan="4"><br>
		<table border="0" width="100%">
		<tr>
			<td style="padding-right:10px;">
				<font color= NAVY><B>Depende de: </B></font><span style="font-size:13px;padding-left:5px;">&nbsp;
				<?php echo "$depend"; ?></span>	
			</td>
			
			<td style="padding-right:10px;">
				<font color= NAVY><B>Mesada: </B></font><span style="font-size:13px;padding-left:5px;">&nbsp;
				<?php echo "$mesada"; ?></span>	
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY><B>Trabajo:</B></font>
				<span style="font-size:13px;padding-left:5px;">
				<?php 
				switch ($trabajo){
					
					case 1:
						echo "SI";
						break;	
						
					case 2:
						echo "NO";
						break;
				}
				?></span>	
			</td>
			<td style="padding-right:10px;">
				<font color= NAVY><B>Beca: </B></font><span style="font-size:13px;padding-left:5px;">&nbsp;
				<?php echo "$beca"; ?></span>	
			</td>
			<td style="padding-right:10px;">
				<font color= NAVY><B>Organ&iacute;smo: </B></font><span style="font-size:13px;padding-left:5px;">&nbsp;
				<?php echo "$organismo"; ?></span>	
			</td>
			<td style="padding-right:10px;">
				<font color= NAVY><B>Monto (Bs): </B></font><span style="font-size:15px;padding-left:5px;">
				<?php echo "$mont"; ?></span>	
			</td>

		</tr>
</table>
</td></tr>
</table>
</td>
</tr>
</table>
<!--//////////DATOS SALUD///////////////-->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color= NAVY><B>DATOS SALUD </B></font>
	</td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">

	<tr>
		<td colspan="4">
		<font color= NAVY><B>Enfermedades de las que padece o ha padecido: </B></font>
		<table border="0" width="80%" style="font-size:12px;" align="center">
		<tr>
			<td style="padding-right:10px;">
				<font color= NAVY> Cancer: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$cancer"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Respiratoria: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$respi"; ?></span>
			</td>
			
			<td style="padding-right:10px;">
				<font color= NAVY> Cerebrovascular: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$cereb"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> SIDA: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$sida"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Diabetes: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
   	 			<?php echo "$diab"; ?></span>
			</td>
			
		</tr>

		<tr>
			<td style="padding-right:10px;">
				<font color= NAVY> Card&iacute;aca: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$cardia"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Alergia: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$alerg"; ?></span>
			</td>
			
			<td style="padding-right:10px;">
				<font color= NAVY> Renal: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$renal"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Hepat&iacute;tis: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$hepat"; ?></span>
			</td>

			<td style="padding-right:10px;">
				<font color= NAVY> Transm. Sexual: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$trsex"; ?></span>
			</td>

		</tr>
		
	<tr>
		<td style="padding-right:10px;">
			<font color= NAVY> Otra: </font>
		</td>
		<td style="padding-right:10px;">
			<span style="font-size:13px;padding-left:5px;">&nbsp;
			<?php echo "$otra"; ?></span>
		</td>	
		<!--SI PADECE OTRA ENFERMEDAD MUESTRA CUAL-->
		<?php
		if ($otr != "NO"){?>
			<td style="padding-right:10px;">
				<font color= NAVY> Cual: </font>
			</td>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
				<?php echo "$cua"; ?></span>
			</td>	
				
		<?php
		}
		?>
		<td colspan="2"> 
			<font color= NAVY><B>Discapacidad: </B></font><span style="font-size:13px;padding-left:5px;">&nbsp;
			<?php echo "$disc"; ?></span>
		</td>
		<td colspan="2"> 
			<font color= NAVY><B>Carnet de Discapacidad: </B></font><span style="font-size:13px;padding-left:5px;">&nbsp;
			<?php echo "$carnet_disca"; ?></span>
		</td>
	</tr>
	
	<tr>
		<td style="padding-right:10px;">
			<font color= NAVY> Intervención Quirúrgica: </font>
		</td>
		<td style="padding-right:10px;">
			<span style="font-size:13px;padding-left:5px;">&nbsp;
			<?php echo "$int_quir"; ?></span>
		</td>	

		<td style="padding-right:10px;">
			<font color= NAVY> Consultas Médicas: </font>
		</td>
		<td style="padding-right:10px;">
			<span style="font-size:13px;padding-left:5px;">&nbsp;
			<?php echo "$consult"; ?></span>
		</td>
		<?php if ($consulta == "SI"){?><!--SI NECESITA CONSULTA MUESTRA CON Q ESPECIALISTA-->
			<td style="padding-right:10px;">
			<font color= NAVY> Especialista: </font>
			</td>
			<td style="padding-right:10px;">
			<span style="font-size:13px;padding-left:5px;">&nbsp;
			<?php echo "$especialista"; ?></span>
		<?php
		}
		?>
		</td>
		</td>
	</tr>
</table>
<!--///////////////////-->
	<tr>
		<td colspan="4">
		<font color= NAVY><B>Familiar que Padece Alguna Enfermedad: </B></font>
		<table border="0" width="80%" style="font-size:12px;" align="center">
		<?php if ($padc_familia == "SI"){?>
		<tr>
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$quien"; ?></span>
			</td>
			
			<td style="padding-right:10px;">
				<span style="font-size:13px;padding-left:5px;">&nbsp;
    			<?php echo "$cual"; ?></span>
			</td>
			
		</tr>
		<?php
		}
		?>
</table>
</td>
</tr>
</table>
</td></tr>
</table>
<!--SERVICIOS REQUERIDOS PARA ESTE SEMESTRE-->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color=NAVY><B>SERVICIOS REQUERIDOS PARA ESTE SEMESTRE </B></font>
     </td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	<td>
		<font color= NAVY><B> Preparadur&iacute;a </B></font><br/>
	</td>
	
	<td>
		<font color= NAVY><B> Preparador: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$prepa"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Alumno: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$alumn"; ?></span> 
	</td>
</tr> 

<tr>
	<td>
		<font color= NAVY><B> Ayuda Econ&oacute;mica </B></font><br/>
	</td>
	
	<td>
		<font color= NAVY><B> Lentes Correctivos: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$lentes"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Odontolog&iacute;a: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$odont"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Problemas de Salud: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$prob_sal"; ?></span> 
	</td>
</tr>   


<tr>
	<td>
		<font color= NAVY><B> Consultas M&eacute;dicas </B></font><!--<br/>-->
	</td>
	
	<td>
		<font color= NAVY><B> M&eacute;dicina General: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$med_gen"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Ginecolog&iacute;a: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$ginec"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Odontolog&iacute;a: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$odonto"; ?></span> 
	</td>
</tr>   


<tr>
	<td>
		<font color= NAVY><B> Comedor: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$comedor"; ?></span>
	</td>
	<td>
		<font color= NAVY><B> Transporte: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$transp"; ?></span> 
	</td>
	<?php if ($transp == "SI"){?>
	<td>
		<font color= NAVY><B> Ruta: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$ruta"; ?></span> 
	</td>
	<?php
	}
	?>

</tr>   
</table>
</td></tr>
</table>

<!--/////////////ACTIVIDADES///////////////////-->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
	<td style="padding-left:5px;padding-top:5px;padding-bottom:5px;">
		<font color=NAVY><B>ACTIVIDADES </B></font>
     </td>
</tr>
</table>

<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>
	
	<td>
		<font color= NAVY><B> Grupo de Teatro: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$teatro"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Excursionismo: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$excur"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Danza: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$danza"; ?></span> 
	</td>
</tr> 

<tr>
	<td>
		<font color= NAVY><B> Centro de Estudiantes: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$centroe"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> M&uacute;sica: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$musica"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Deporte: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$dep"; ?></span> 
	</td>
</tr> 
<?php if ($particip == "SI"){?>
<tr>
	<td>
		<font color= NAVY><B> Otra Actividad: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$act"; ?></span>
	</td>
	<td>
		<font color= NAVY><B> Fecha Inicio: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$fini"; ?></span> 
	</td>
	<td>
		<font color= NAVY><B> Fecha Final: </B></font><!--<br/>-->
		<span style="font-size:13px;padding-left:5px;">
		<?php echo "$ffin"; ?></span> 
	</td>
	<?php
	}
	?>

</tr>   
</table>
</td></tr>
</table>

<!--INFORMACION BANCARIA-->
<?php if ($fila_ayu_est > 0){ ?>
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
    <td style="padding-left:5px;padding-top:5px;padding-bottom:5px;"><font color= NAVY><B>INFORMACION BANCARIA</B></font>
    </td>
</tr>
</table>
<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">

<tr>

    <td>
		<font color= NAVY><B> Banco: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "Banco de Venezuela"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Tipo de cuenta: </font></B><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		 		<?php
				//echo $tipo_cta;  
			switch ($tipo_cta){
				case 0:
					echo "CORRIENTE";
					break;	
				case 1:
					echo "AHORRO";
					break;	
			}
		?>
		</span>
    </td>
    
    <td>
		<font color= NAVY><B> N&uacute;mero de cuenta: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php echo "$nro_cta"; ?></span>
    </td>    
</tr>

</table>
</td></tr>
</table>
<?php } ?>


<!--INFORMACION BENEFICIO ADQUIRIDO-->

<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
    <td style="padding-left:5px;padding-top:5px;padding-bottom:5px;"><font color= NAVY><B>BENEFICIO ADQUIRIDO</B></font>
    </td>
</tr>
</table>
<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>

    <td>
		<font color= NAVY><B> Lapso: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$lapso"; ?></span>
    </td>
    
    
    <td>
		<font color= NAVY><B> Beneficio: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php echo "$beneficioactual"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Nro. de horas: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php if (isset($horas)){
			echo "$horas"; 
		}else{
		 echo "---";
		}
		?>
		</span>
    </td>

</tr>

<?php if ($mostrar == 'si'){ ?>
<tr>
    <td>
		<font color= NAVY><B> Dependencia: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$dependenciactu"; ?></span>
    </td>
    
    
    <td>
		<font color= NAVY><B> U.C. Cursadas actualmente: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php echo "$uc_actuales"; ?></span>
    </td>
</tr>
<?php } ?>

</table>
</td></tr>
</table>
<!--////////////////////////////////////////////////-->
<!--INFORMACION BENEFICIO ANTERIOR-->
<table border="1" align="center" style="font-family:arial;width:908px;border-collapse:collapse;">
<tr>
    <td style="padding-left:5px;padding-top:5px;padding-bottom:5px;"><font color= NAVY><B>BENEFICIO ANTERIOR</B></font>
    </td>
</tr>
</table>
<table border="1" align="center" style="font-family:arial;width:900px;">
<tr><td>
<table border="0" align="left" style="font-family:arial;width:900px;">
<tr>

    <td>
		<font color= NAVY><B> Lapso: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$LapsoAnterior"; ?></span>
    </td>
    <td>
		<font color= NAVY><B> Beneficio: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php echo "$nombre_ayuBA"; ?></span>
    </td>
    
    <td>
		<font color= NAVY><B> Nro. de horas: </B></font><br/>
		<span style="font-size:13px;padding-left:5px;"> 
		<?php if (isset($nro_horaBA)){
			echo "$nro_horaBA"; 
		}else{
		 echo "---";
		}
		?>
		</span>
    </td>


</tr>
<tr>

    <td>
		<font color= NAVY><B> Dependencia: </B></font><br/>
		<span style="font-size:15px;padding-left:5px;">
		<?php echo "$dependenciaAnte"; ?></span>
    </td>
    
    
    <td>
		<font color= NAVY><B> U.C. Cursadas en el lapso <?php echo $LapsoAnterior ?>: </B></font><br/>
		<span style="font-size:13px;padding-left:30px;"> 
		<?php echo "$uc_anterior"; ?></span>
    </td>
</tr>
</table>
</td></tr>
</table>
<!--/////////////////////////////////////////////////////-->

<table border="0" align="center" style="font-family:arial;width:900px;">
<tr>
	<td align="center"><br/>
		<div align="center" id="oculto" style="text-align:center;"><input type="button" value="Imprimir" onClick="imprimir();">&nbsp;&nbsp;<input type="button" value="Cerrar" onClick="window.close();">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" name="ATRAS" value="Atras" onClick="goback()"></div>
    </td>
</tr>
</table>
</body>
</html>

