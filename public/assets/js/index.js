console.log("js gulp-watch");

const api = {
    url: 'http://localhost:3000/api/registerNumber',
    code: 'http://localhost:3000/api/resendCode',
    user: 'http://localhost:3000/api/createUser',
    card: 'http://localhost:3000/api/registerCard'
};

$("#phoneRegistered").text(localStorage.phone);

var registerData = function(data){
	localStorage.phone = data.phone;
	localStorage.code = data.code;
};

const loadPage = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('#btn-init').click(nextPage1);
	$('#btn-next').click(nextPage2);
	$('#btn-next2').click(nextPage5);
	$("#formPhone").submit(validate);
	$("#formCode").submit(validate);
	$("#phoneNumber").keyup(digits);
};

const nextPage1 = function(){
	console.log("next");
	window.location.href="views/validate.html";
};

const nextPage2 = function(){
	console.log("next");
	$.post(api.user,{
		"phone": $("#phoneNumber").val(),
		"terms": !($("#btn-next")[0].disabled)
	}).then(function (response){
		console.log(response.data);
		alert("Código de Validación: " + response.data.code);
		registerData(response.data);
		window.location.href = "code.html ";
	}).catch(function (error) {
        console.log(error);
        alert("Teléfono no válido, ya está registrado");
    })	
	
};

const nextPage5 = function(){
	console.log("next");
	$.post(api.url,{
		"phone": $("#phoneNumber").val(),
		"terms": !($("#btn-next")[0].disabled)
	}).then(function (response){
		console.log(response.data);
		alert("Código de Validación: " + response.data.code);
		registerData(response.data);
		window.location.href = "code.html ";
	}).catch(function (error) {
        console.log(error);
        alert("Teléfono no válido, ya está registrado");
    })	
	
};


const validate = function(e){
	e.preventDefault();
};

const digits = function(){
	var digitNumbers = $("#phoneNumber").val().length;	
	if (digitNumbers == 10) {
		$("#term-conditions").click(termsValidate);	
	}
};

const termsValidate = function(){
	var terms = $("#btn-next")[0].disabled;
	if (terms) {
		$("#btn-next")[0].disabled = false;
	} else {
		$("#btn-next")[0].disabled = true;
	}
};

const userData = function(){
	var userName = $("#userName").required;
	var userMail = $("#userMail").required;
	var userPass = $("#userPass").required;
	if (userName && userMail && userPass) {
		$("#btn-next2")[0].disabled = false;
	} else {}
};




$(document).ready(loadPage);