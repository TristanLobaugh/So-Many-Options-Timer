

// toggles the "Choose an Option Button" options to show and display
function myOptions()	{
	document.getElementById("my-drop-down").classList.toggle("show");
}
// If user clicks anywhere else on the window other than the .drop-down-button it will remove the display from the content class removing it.
window.onclick = function(event)	{
	if(!event.target.matches(".drop-down-button"))	{
		var dropDown = document.getElementsByClassName("content");
		for (var i = 0; i < dropDown.length; i++)	{
			var openDropDown = dropDown[i];
			if(openDropDown.classList.contains("show"))	{
				openDropDown.classList.remove("show");
			}
		}
	}
}

function add(id)	{
	var value = document.getElementById(id).innerHTML;
	value++;
	document.getElementById(id).innerHTML = value;
}

function subtract(id)	{
	var value = document.getElementById(id).innerHTML;
	value--;
	document.getElementById(id).innerHTML = value;
}

function reset()	{
	var now = Date.now();
	var plusMin = now + (60*1000); // 1 minutes in milliseconds
	var newDate = new Date(plusMin);
	var sec = newDate.getSeconds();
	var min = newDate.getMinutes();
	var hr = newDate.getHours();
	var dd = newDate.getDate();
	var mm = newDate.getMonth()+1; //January is 0!
	var yyyy = newDate.getFullYear();

	year.innerHTML = yyyy;
	month.innerHTML = mm;
	day.innerHTML = dd;
	hour.innerHTML = hr;
	minute.innerHTML = min;
	second.innerHTML = sec;
}


reset();

