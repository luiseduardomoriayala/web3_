
function conectar_metamask(task){  
	// Source code to interact with smart contract
	// web3 provider with fallback fo
	if (window.ethereum) {
			window.web3 = new Web3(window.ethereum)
			try {
					/* solicita permiso */
					ethereum.enable( function(err){
						console.log("firmado");
					});
					$('.error_conexion_meta_ww3').html(' ');
					$('.metamask_bienvenida_texto').html('<span> Inicia sesión en tu cuenta MetaMask! </span>');
					
			} catch (error) {
					/* permiso rechazado */
					let error_1='error_1: Usuario rechazo el permiso de conexión. ';
					console.log(error_1)
					$('.error_conexion_meta_ww3').html('');
					$('.error_conexion_meta_ww3').html(error_1);
					setTimeout(function(){ 
						$('.error_conexion_meta_ww3').html("");
					},5700);//msj desparece en 5seg.					
			}
			
	}else {
		let error_2='error_2: No detectamos una red Ethereum en tu navegador. Te recomendamos instalar la extensión de MetaMask!';
		console.log(error_2);
		$('.error_conexion_meta_ww3').html('');
		$('.error_conexion_meta_ww3').html(error_2);
		setTimeout(function(){ 
			$('.error_conexion_meta_ww3').html("");
		},1700);//msj desparece en 5seg.					
		
	}
					
	/* Accounts */ 
		var account;	
		web3.eth.getAccounts(function(err, accounts) {
			if (err != null) {
				let error_3="error_3: Error conectando con cuenta metamask.";
				console.log(error_3);
				$('.error_conexion_meta_ww3').html('');
				$('.error_conexion_meta_ww3').html(error_3);
				setTimeout(function(){ 
					$('.error_conexion_meta_ww3').html("");
				},5700);//msj desparece en 5seg.
				return;
			}
			console.log(accounts);


			if (accounts.length == 0) {
				let error_4="¡No se encontró ninguna cuenta! Asegúrese de que el cliente Ethereum esté configurado correctamente. </br> <b>Inicia sessión en tu metemask y vuelve a conectar.</b>";
				console.log(error_4);
				return;
			}
			
			if (accounts.length > 0) {
					account = accounts[0]; /* capturo cc metamask */
					// web3.eth.defaultAccount = account;
					console.log('Account: ' + account);
					
					$('input[name="cuenta"]').val(account);
					$('.error_conexion_meta_ww3').html('logeado con metamask:: okey  .. ');
					console.log("logeado con metamask:: okey  .. ");
											
			}
		});	
	

} /* end conection */	


$('#hola_web3').find('.conectar_metamask').on('click',function(){ //para buscar destinos *sin btn
	conectar_metamask();
});



