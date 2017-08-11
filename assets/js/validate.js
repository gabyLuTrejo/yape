const digitsCode = function(){
	var digitCode = $("#code").val();
	if (digitCode == localStorage.code) {
		window.location.href="register.html";
	}
};

$("#code").keyup(digitsCode);

const countdown = function(){
	var seconds21 = 21;
	var countdown21 = setInterval(function(){
		$("#countDown").text(seconds21);
		if(seconds21 == 0){
			clearInterval(countdown21);
			//generar nuevo código con API
			$.post(api.code,{
				"phone": localStorage.phone,
			}).then(function (response){
				console.log(response.data);
				alert("Código inválido, Nuevo código de Validación: " + response.data);
				localStorage.code = response.data;
				$("#code").val('');
			}).catch(function (error) {
		        console.log(error);
		        alert(error);
	    })
			countdown();
		}
		seconds21--;
	}, 1000);
};
countdown();
