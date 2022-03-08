<?php include('auten.php');
$pagina="inicio";
$meta= array('title' =>'HOLA WEB3 - Pachacuy',
'description' =>'');
$notimg='img/img1-no-disponible.jpg'; 
$unix_date = strtotime(date('Y-m-d H:i:s')); ?>

<!DOCTYPE html>
<html class="no-js" lang="es-ES">
<head>
<base href="<?php echo $url; ?>"/>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><?php echo isset($t_page)?$t_page:(isset($meta)?$meta ['title']:' Pachacuy'); ?></title>
<meta property="og:site_name" content="Pachacuy "/>
<meta property="og:locale" content="es_ES"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content=" web3 Pachacuy " />
<?php if(isset($meta)){ foreach($meta as $k => $v){ ?>
<meta name="<?php echo $k; ?>" content="<?php echo $v; ?>"/>
<?php if($k!="keywords" && $k!="img"){ ?>
<meta property="og:<?php echo $k;?>" content="<?php echo $v;?>"/>
<?php 		}	} } ?>
<meta property="og:image" content="<?php echo (isset($meta) && !empty($meta['img']))?$url.$meta['img']:$url.'img/pachacuy.png';?>"/> 
<meta name="author" content="luis mori, www.tuweb7.com"/>
<link rel="shortcut icon" href="favicon.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
</head>
<body id="top">
		
<main id="hola_web3" >  
<div class="callout callout-5 rel  text-center">
	<div class="row">
		<div class="large-12 columns ">
			<h4 class="press color-1 ">HOLA  WEB 3</br> - pachacuy</h4>
			<figure><img src="cuy.gif" class="alcaldia "></figure>
			<button id="btn_iniciar_proceso_de_venta" class=" conectar_metamask " >Entrar a comprar </button>
			<input type="text" name="cuenta" style="margin-top:20px;display:block;width:100%;">
			<p id="rptapago" class=" ">  </p>
			<p class="metamask_bienvenida_texto  ">  </p>
			<p class="error_conexion_meta_ww3  ">  </p>
			
		</div>
	</div>
</div>
</main>

<script src="<?php echo $url; ?>js/jquery.min.js"></script>
<script src="<?php echo $url; ?>js/vendor/jquery.validate.min.js"></script>
<!-- ww3 -->
<script src="<?php echo $url; ?>ww3/web3/dist/web3.min.js?ud=<?php echo $unix_date ; ?>"></script>
<script src="<?php echo $url; ?>js/conectar_ww3_meta_1.js?ud=<?php echo $unix_date ; ?>"></script>
<!-- ww3 -->
<script>
conectar_metamask();
</script>
