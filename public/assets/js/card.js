const digitsCard = function(){
	var digitCard = $("#cardNumber").val();
	if (digitCard.length > 0) {
		if (digitCard.length == 16) {
			localStorage.cardNumber = digitCard;
		}
	} 
};

const digitsMonth = function(){
	var digitMonth = $("#cardMonth").val();
	if (digitMonth > 00 && digitMonth < 12) {
		console.log(digitMonth)
		localStorage.cardMonth = digitMonth;
	} 
};

/*$.post(api.card,{
			"phone": localStorage.phone,
    		"cardNumber": localStorage.cardNumber,
    const cardMonth = req.body.cardMonth;
    const cardYear = req.body.cardYear;
    const cardPassword = req.body.cardPassword;

		}).then(function (response){
			console.log(response.data);
			alert("Código inválido, Nuevo código de Validación: " + response.data);
			localStorage.code = response.data;
			$("#code").val('');
		}).catch(function (error) {
	        console.log(error);
	        alert(error);
	    })*/

$("#cardNumber").keyup(digitsCard);
$("#cardMonth").keyup(digitsMonth);
