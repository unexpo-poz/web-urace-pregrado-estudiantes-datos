<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>
<script LANGUAGE="Javascript" src="asincronos1.js"> </script>
<body>
<?php
/*foreach ($_POST as $nombre_campo => $valor){
	echo $nombre_campo ."=>". $valor;
	echo "<br>";
}*/
	
	
	$pais		 = $_POST['pais'];
	$estado 	 = $_POST['estado'];
	$municipio = $_POST['municipio'];
	
	
	
if ($pais == '232'){//SI EL PAIS ES VENEZUELA
	
	(isset($_POST['pais'])) ? $pais	= $_POST['pais'] : $pais = "";
	
	(isset($_POST['estado'])) ? $estado	= $_POST['estado'] : $estado = "";
	
	(isset($_POST['municipio'])) ? $municipio	= $_POST['municipio'] : $municipio = "";
	
	
	include_once ('inc/odbcss_c.php');
	include_once ('inc/config.php');
	
	//CONEXION A LA BD DONDE ESTAN LAS TABLAS DE PAISES, ESTADOS Y CIUDADES
	$conexionM = new ODBC_Conn($DSN, $user, $pass);
	
	$sqlMpio = "SELECT CODIGO, MPIO_NOMBRE ";
	$sqlMpio.= "FROM MUNICIPIOS ";
	$sqlMpio.= "WHERE COD_PAIS='".$pais."' AND COD_EDO='".$estado."' ";
	$sqlMpio.=" ORDER BY MPIO_NOMBRE ASC";
	//echo  $sqlMpio;
	$conexionM->ExecSQL($sqlMpio) or die ("No se ha podido realizar la consulta");
	$filas3 = $conexionM->filas;
	$conex_mpio = $conexionM->result;
?>
						
<!--LISTA DESPLEGABLE DE MUNICIPIOS-->
<input type="hidden" name="hidden_parroq_res" value="<?php echo $edo_nac_e; ?>"><!--VALOR DE LA BD(PARROQUIA DE RESIDENCIA)-->
<select name="municipio" id="municipio" onchange="parroquia_res(estado.value,this.value,hidden_parroq_res.value);">
	<option selected="selected" value="">-SELECCIONE-</option>
	<?php
		
		for ($c = 0; $c < $filas3; $c++){
			$CODIGO 	= $conex_mpio[$c][0];
			$MPIO_NOMBRE 	= $conex_mpio[$c][1];
			if ($municipio == $CODIGO) { //valor de la BD
				?>
				<option value="<?php echo $CODIGO; ?>" selected="selected" ><?php echo utf8_encode($MPIO_NOMBRE); ?></option>
				<!--<option value="<?php echo $CODIGO; ?>" selected="selected" ><?php echo utf8_encode($MPIO_NOMBRE); ?></option>-->
				<?php
			
			  }
			 else {
				?>
				<option value="<?php echo $CODIGO; ?>"><?php echo utf8_encode($MPIO_NOMBRE); ?></option>
				<?php
			  }
			?>
	     <?php
		}
	?>
</select>
<?php
	
}
?>

</body>
</html>