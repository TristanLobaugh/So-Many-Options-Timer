# So Many Options Timer

### Countdown timer with 3 options for the user to choose from using CSS, HTML and native javascript single page app.

## Countdown time that allows the user to set any date and time to countdown to and then choose between 3 different options for the visual countdown.

#### 

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Demo

[Live Demo](http://tristanlobaugh.com/so_many_options_timer)

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/so_many_options_timer/master/img/screen_shot.png)

### Option 1:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/so_many_options_timer/master/img/screen_shot2.png)

### Option 2:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/so_many_options_timer/master/img/screen_shot3.png)

### Option 3:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/so_many_options_timer/master/img/screen_shot4.png)

##Code Examples

### Gets the current time plus secsonds and assigns it to the time-picker
```
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
```

### Code allows for the different background images to be changed based on the users selection
```
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
```

## To Do