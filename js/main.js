var showRed = true;
var isNightMode;

$(document).ready(function () {
	console.log("Loaded");
	var d = new Date();
	console.log("Hour " + d.getHours().toString())
	if (d.getHours() > 18) {		//Toggle night mode	
		isNightMode = true;
		$('#nightToggle').bootstrapToggle('off');
		$("#main-sheet").attr("href", "https://bootswatch.com/darkly/bootstrap.min.css");
	}
	else {		//Toggle day mode
		isNightMode = false;
		$('#nightToggle').bootstrapToggle('on');
		$("#main-sheet").attr("href", "https://bootswatch.com/flatly/bootstrap.min.css");
	}

	changeSheet();

	$(function () {
		$('#nightToggle').change(function () {
			toggleButtonClick();
		})
	})
});

function enableSlant() {		//Toggle the red slant line
	if (showRed)
		$("#redslant").addClass("hidden");
	else if (!showRed)
		$("#redslant").removeClass("hidden");
	showRed = !showRed;
	console.log("Value of showRed set to " + showRed.toString());
}

function changeSheet(){
	if (!isNightMode)		//Toggle day mode
	{
		console.log("Setting Day Mode");
		$("#main-sheet").attr("href", "https://bootswatch.com/flatly/bootstrap.min.css");
		
	}
	else   //Toggle night mode
	{
		console.log("Setting Night Mode");
		$("#main-sheet").attr("href", "https://bootswatch.com/darkly/bootstrap.min.css");
		
	}
}

function toggleButtonClick() {
	isNightMode = !isNightMode;
	changeSheet();
}