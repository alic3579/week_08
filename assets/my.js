var canvas = document.querySelector(`canvas`);


//////

var sun_ray = document.getElementById('sun_ray')
TweenMax.to(sun_ray, 1, {ease: Sine.easeInOut, scale:1.3, repeat:-1, yoyo:true})


//////////////////

fetch('https://api.kanye.rest/')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	// console.log("results: ", jsonResults)
	var quoteResult = jsonResults.quote;
	console.log(quoteResult)
	document.getElementById("quote").innerHTML = ("&ldquo;" + quoteResult + "&rdquo;");



	var length = quoteResult.length;
	console.log(length)
	if (length >= 100) {
		canvas.style.background = "#21083f";
		document.getElementById("mountain").src = "images/mountain02.svg";


		// console.log(waves)
		// console.log(waves[0].fillStyle)
		waves[0].fillStyle = "#e39590";
		waves[1].fillStyle = "#fbb098";
		waves[2].fillStyle = "#d87e7c";



	}


})
.catch(function(error){
	console.log("error message:", error)
})


var dataURL = canvas.toDataURL();
console.log(dataURL)


