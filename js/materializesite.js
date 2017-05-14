var enterCount = 0;

$(document).ready(function () { 
	console.log("Loaded");
});

$(document).keypress(function(e) {
    enterCount++;
	console.log("Enter detected");
	if(enterCount == 10)
		$("#meme").removeClass("hide");
	if(enterCount == 11)
		$("#meme").addClass("hide");
});