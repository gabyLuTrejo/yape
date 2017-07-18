console.log("js gulp-watch");

$(document).ready(function(){
	$('.carousel').carousel();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
});



/*function getJSON(url){
	return new Promise(function(resolve,reject){
    	var ajax = new XMLHttpRequest();
		ajax.open("GET",url);
      	ajax.send();
      	ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
              resolve(JSON.parse(ajax.responseText));
            }
		}
	});
}

getJSON("api/")
.then(function (message) {
	console.log(message)
})*/