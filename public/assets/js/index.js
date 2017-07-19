console.log("js gulp-watch");

const api = {
    url: 'http://localhost:3000/api/registerNumber'
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
	window.location.href="code.html";
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