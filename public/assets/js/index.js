console.log("js gulp-watch");

const api = {
    url: 'http://localhost:3000/api/registerNumber',
    code: 'http://localhost:3000/api/resendCode'
};

const loadPage = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('#btn-init').click(nextPage1);
	$('#btn-next').click(nextPage2);
	$("#formPhone").submit(validate);
	$("#phoneNumber").keyup(digits);
};

const nextPage1 = function(){
	console.log("next");
	window.location.href="views/validate.html";
}

const nextPage2 = function(){
	console.log("next");
	$.post(api.url,{
		"phone": $("#phoneNumber").val(),
		"terms": true
	}).then(function (response){
		console.log(response)
		alert("Código de Validación: " + response.data.code);
		window.location.href="code.html ";
	}).catch(function (error) {
        console.log(error);
        alert("Teléfono no válido, ya está registrado");
    })	
	
}

const validate = function(e){
	e.preventDefault();
}

const digits = function(){
	var digitNumbers = $("#phoneNumber").val().length;	
	if (digitNumbers == 10) {
		$("#term-conditions").click(termsValidate);	
	}
}

const termsValidate = function(){
	var terms = $("#btn-next")[0].disabled;
	if (terms) {
		$("#btn-next")[0].disabled = false;
	} else {
		$("#btn-next")[0].disabled = true;
	}
}


$(document).ready(loadPage);