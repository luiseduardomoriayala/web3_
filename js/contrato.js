
preventa_0_pcuys_vendidos();

function preventa_0_pcuys_vendidos() {
		window.web3 = new Web3(window.ethereum);
		
			const total_pcuys_a_la_venta=$('input[name="total_pcuys"]').val();
			const valor_del_gas=$('input[name="valor_del_gas"]').val();
			let account=$('input[name="cuenta"]').val();
			const direccion_smart_venta=$('input[name="direccion_smart_venta"]').val(); /* dir contrato smart  */ 

			console.log('account => '+account);
			console.log('direccion_smart_venta => '+direccion_smart_venta);
			console.log('gas => '+valor_del_gas);

        let minABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_prevExchangeRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nextExchangeRate","type":"uint256"}],"name":"ExchangeRateChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_purchaser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amountBusd","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amountPachaCuy","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_exchangeRate","type":"uint256"}],"name":"PachaCuyPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addToWhitelistBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"amountPachacuyLeftToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountPachacuySoldSoFar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busdToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableWhitelistFilter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableWhitelistFilter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_busdAddress","type":"address"},{"internalType":"address","name":"_custodianWallet","type":"address"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"limitPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountBusd","type":"uint256"}],"name":"purchaseTokensWithBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"queryBalance","outputs":[{"internalType":"address","name":"_walletCusomter","type":"address"},{"internalType":"uint256","name":"_busdSpent","type":"uint256"},{"internalType":"uint256","name":"_pachacuyPurchased","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retrieveListOfCustomers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_busdAddress","type":"address"}],"name":"setAddressBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setExchangeRatePrivateSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistFilterActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];
				
				
		if(account !="" ){

        var pcuys_vendidos_Instance = new web3.eth.Contract(minABI, direccion_smart_venta);
				var pcuys_vendidos = pcuys_vendidos_Instance.methods.amountPachacuySoldSoFar().call(); /*input: methodo de pcuy comprados */
				console.log(pcuys_vendidos);
				
				
				pcuys_vendidos.then(function(value) { /* resolvemos promesa pcuy vendidos */
					console.log('valor pcuys vendidos: ' + value);
					let pcuys_vendidos= Math.round(value/1000000000000000000); /* valor entero */
					console.log('pcuys vendidos =>'+pcuys_vendidos);
					$('#pcuys_vendidos').html(pcuys_vendidos); /* text */

					// let varx= pcuys_vendidos*100;
					// let pcuys_vendidos_porcentaje= varx / total_pcuys_a_la_venta; 
					// console.log('pcuys vendidos % =>'+pcuys_vendidos_porcentaje);
					// document.getElementById("barra_progreso").style.width = pcuys_vendidos_porcentaje.toFixed(2)+'%';
					// if(pcuys_vendidos_porcentaje.toFixed(2) == total_pcuys_a_la_venta){
						// location.href="venta_finalizada"; /* si se acabo el supply*/
					// }					

				});


		}else{
				msj_error="* Ingresa con una cuenta Metamask para poder participar. ";
				console.log(msj_error);
		}		
		
      
}
