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
	// console.log(quoteResult)
	document.getElementById("quote").innerHTML = ("&ldquo;" + quoteResult + "&rdquo;");
	String(quoteResult);


////////////////// Length to change color
	var length = quoteResult.length;
	console.log(length)
	if (length >= 90) {
		canvas.style.background = "#21083f";
		document.getElementById("mountain").src = "images/mountain02.svg";


		// console.log(waves)
		// console.log(waves[0].fillStyle)
		waves[0].fillStyle = "#e39590";
		waves[1].fillStyle = "#fbb098";
		waves[2].fillStyle = "#d87e7c";

		
		sun.style.background = "#1d0056";
		sun_ray.style.background = "#30117c";
		quote.style.textTransform = "uppercase";
		quote.style.color = "#ffff00";
		quote.style.textShadow = "none";

	} else if (length >= 40) {
		canvas.style.background = "#ffc5e6";
		document.getElementById("mountain").src = "images/mountain03.svg";


		// console.log(waves)
		// console.log(waves[0].fillStyle)
		waves[0].fillStyle = "#6effbf";
		waves[1].fillStyle = "#71ffd3";
		waves[2].fillStyle = "#88ff73";

		
		sun.style.background = "#fcf2db";
		sun_ray.style.background = "#fcf5e8";
		quote.style.color = "#0000fe";
		quote.style.textShadow = "none";

	}

///////////////



if (quoteResult.indexOf("c") >= 0) {
    console.log("cursive")
    quote.style.fontFamily = "'Allura', cursive";
    quote.style.textTransform = "none";
    quote.style.fontWeight = "600";

} else if (quoteResult.indexOf("k") >= 0) {
    console.log("serif")
    quote.style.fontFamily = "'Playfair Display', serif";

}


TweenMax.to(quote, 1.5, {ease: Sine.easeInOut, y:20, repeat:-1, yoyo:true})

})
.catch(function(error){
	console.log("error message:", error)
})


/////////////

var title = document.querySelector("#title")
var by = document.querySelector("#by")


title.addEventListener("mouseover", function(){
	by.style.display = "block"
})

title.addEventListener("mouseout", function(){
	by.style.display = "none"
})

/////////////////


var dateApi;
// http://worldclockapi.com/api/json/est/now
fetch(`http://worldtimeapi.org/api/ip`)
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	// console.log("date: ", jsonResults)
	var date = jsonResults.datetime;
	// console.log(date)
	String(date);
	var dateLength = date.length;
	var justDate = "";
	String(justDate);

	if (dateLength > 10) {
		justDate = date.substring(0, 10);
	}
	// console.log(justDate)
	document.getElementById("date").innerHTML = (justDate);


})
.catch(function(error){
	console.log("error message:", error)
})
