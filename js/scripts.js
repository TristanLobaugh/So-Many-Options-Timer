var endTimeStamp;
// var endTime = new Date(2016,2,5,17,0,0); will get this from the individual timeTill variables
// var endTimeStamp = Date.parse(endTime);
var timer = document.getElementById("countdown-wrapper");
var weeks = document.getElementById("weeks");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var countItDown;

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
		if(id === "second" && value == 59)	{
			document.getElementById("minute").innerHTML = parseInt(document.getElementById("minute").innerHTML) + 1;
			document.getElementById("second").innerHTML = 0;
		}
		else if(id === "minute" && value == 59)	{
			document.getElementById("hour").innerHTML = parseInt(document.getElementById("hour").innerHTML) + 1;
			document.getElementById("minute").innerHTML = 0;
		}
		else if(id === "hour" && value == 23)	{
			document.getElementById("day").innerHTML = parseInt(document.getElementById("day").innerHTML) + 1;
			document.getElementById("hour").innerHTML = 0;
		}
		else if(id === "day" && value == 31)	{
			document.getElementById("month").innerHTML = parseInt(document.getElementById("month").innerHTML) + 1;
			document.getElementById("day").innerHTML = 1;
		}
		else if(id === "month" && value == 12)	{
			document.getElementById("year").innerHTML = parseInt(document.getElementById("year").innerHTML) + 1;
			document.getElementById("month").innerHTML = 1;
		}
		else{
			value++;
			document.getElementById(id).innerHTML = value;
		}
		
}

function subtract(id)	{
	var value = document.getElementById(id).innerHTML;
		if(id === "second" && value == 0)	{
			document.getElementById("minute").innerHTML = parseInt(document.getElementById("minute").innerHTML) - 1;
			document.getElementById("second").innerHTML = 59;
		}
		else if(id === "minute" && value == 0)	{
			document.getElementById("hour").innerHTML = parseInt(document.getElementById("hour").innerHTML) - 1;
			document.getElementById("minute").innerHTML = 59;
		}
		else if(id === "hour" && value == 0)	{
			document.getElementById("day").innerHTML = parseInt(document.getElementById("day").innerHTML) - 1;
			document.getElementById("hour").innerHTML = 23;
		}
		else if(id === "day" && value == 1)	{
			document.getElementById("month").innerHTML = parseInt(document.getElementById("month").innerHTML) - 1;
			document.getElementById("day").innerHTML = 31;
		}
		else if(id === "month" && value == 1)	{
			document.getElementById("year").innerHTML = parseInt(document.getElementById("year").innerHTML) - 1;
			document.getElementById("month").innerHTML = 12;
		}
	else{
		value--;
		document.getElementById(id).innerHTML = value;
	}
}
// Gets the current time plus secsonds and assigns it to the time-picker.
function initTime()	{
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

function getPickedDate()	{
	var year = document.getElementById("year").innerHTML;
	var month = (document.getElementById("month").innerHTML) - 1;
	var day = document.getElementById("day").innerHTML;
	var hour = document.getElementById("hour").innerHTML;
	var minute = document.getElementById("minute").innerHTML;
	var second = document.getElementById("second").innerHTML;

	var dateChosen = new Date(year, month, day, hour, minute, second);
	var timeLeft = dateChosen - Date.now();
	console.log(timeLeft);

	return timeLeft;
}


function clearTop()	{
	document.getElementById("intro").style.display = "none";	
	document.getElementById("time-picker-wrapper").style.display = "none";
	document.getElementById("drop-down").style.display = "none";
	document.getElementById("countdown-timer").style.display = "block";
	document.getElementById("pause-button").style.display = "block";

}

function transitionTrap()	{
	var timeTillTrap = getPickedDate();
	clearTop();
	document.getElementById("trap-header").style.display = "block";
	document.body.style.backgroundImage = "url(./img/death_star.jpg";
	endTimeStamp = timeTillTrap;
	countItDown = setInterval( function() {countDownTimer(); }, 1000);
}

function transitionTime()	{
	var timeTillLighting = getPickedDate();
	clearTop();
	document.getElementById("lighting-header").style.display = "block";
	document.body.style.backgroundImage = "url(./img/backtothefuture.jpg";
	endTimeStamp = timeTillLighting;
	countItDown = setInterval( function() {countDownTimer(); }, 1000);
}

function transitionShuttle()	{
	var timeTillLaunch = getPickedDate();
	clearTop();
	document.getElementById("launch-header").style.display = "block";
	document.body.style.backgroundImage = "url(./img/shuttle.jpg";
	endTimeStamp = timeTillLaunch;
	countItDown = setInterval( function() {countDownTimer(); }, 1000);
}

function countDown(sentDate2)	{
	endTimeStamp = endTimeStamp - 1000;
	var timeStampInSeconds = endTimeStamp / 1000;
	var seconds = Math.floor(timeStampInSeconds % 60);
	var minutes = Math.floor((timeStampInSeconds / 60) % 60);
	var hours = Math.floor(timeStampInSeconds / (60 * 60) % 24);
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));

	var timeObject = {
			weeks: weeks,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			timeDifference: endTimeStamp
	};
	return timeObject;
}

function countDownTimer(sentTimeLeft){
		var timeObjectReturned = countDown();
		if(timeObjectReturned.timeDifference <= 0)	{
			document.getElementById("countdown-timer").style.display = "none";
			clearInterval(countItDown);
			if(document.getElementById("trap-header").style.display === "block")	{
				document.getElementById("trap-header").style.display = "none";
				document.body.style.backgroundImage = "url(./img/deathstar.gif";
			}else if(document.getElementById("lighting-header").style.display === "block") {
				document.getElementById("lighting-header").style.display = "none";
				document.body.style.backgroundImage = "url(./img/clocktower.gif";
			}else if(document.getElementById("launch-header").style.display === "block") {
				document.getElementById("launch-header").style.display = "none";
				document.body.style.backgroundImage = "url(./img/shuttle.gif";
			}
		}else	{
			weeks.innerHTML = timeObjectReturned.weeks;
			days.innerHTML = timeObjectReturned.days;
			hours.innerHTML = timeObjectReturned.hours;
			minutes.innerHTML = timeObjectReturned.minutes;
			seconds.innerHTML = timeObjectReturned.seconds;
	}
}

function pauseTimer()	{
	clearInterval(countItDown);
}


initTime();

