var validCard = false;

const digitsCard = function(){
	var digitCard = $("#cardNumber").val();
	if (digitCard.length > 0) {
		if (digitCard.length == 16) {
			localStorage.cardNumber = digitCard;
			$("#numberValidation").text("Valid Card").addClass("green-text").removeClass("red-text");
			validCard = true;
		} else if (digitCard.length > 16) {
			$("#numberValidation").text("Wrong Card").addClass("red-text").removeClass("green-text");
			$("#btn-next3")[0].disabled = true;
			validCard = false;
		} else {
			$("#numberValidation").text("missing numbers").removeClass("green-text", "red-text");
			$("#btn-next3")[0].disabled = true;
			validCard = false;
		}
	}
};

const digitsMonth = function(){
	var digitMonth = $("#cardMonth").val();
	if (digitMonth > 00 && digitMonth < 12) {
		localStorage.cardMonth = digitMonth;
		$("#monthValidation").text(".").removeClass("red-text");
	}	else{
		$("#monthValidation").text("Wrong").addClass("red-text");
		$("#btn-next3")[0].disabled = true;
	}
};

const digitsYear = function(){
	var digitYear = $("#cardYear").val();
	if (digitYear > 16 && digitYear < 24) {
		localStorage.cardYear = digitYear;
		$("#yearValidation").text(".").removeClass("red-text");
		console.log(1);
		if (localStorage.cardMonth !=0) {
			console.log(validCard === true);
			if (validCard === true) {
				$("#btn-next3")[0].disabled = false;
			}
		}
	} else{
		$("#yearValidation").text("Wrong").addClass("red-text");
		$("#btn-next3")[0].disabled = true;
	}
};

$("#cardNumber").keyup(digitsCard);
$("#cardMonth").keyup(digitsMonth);
$("#cardYear").keyup(digitsYear);
