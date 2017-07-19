console.log("js gulp-watch");

const loadPage = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('#btn-init').click(nextPage);
	$("#formPhone").submit(validate);
	$("#phoneNumber").keyup(digits);
};

const nextPage = function(){
	console.log("next");
	window.location.href="views/validate.html";
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