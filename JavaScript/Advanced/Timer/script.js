// setTimeout()
let timeoutID;

function showDelayedMessage(){
	timeoutID=setTimeout(function(){
		document.getElementById("output").innerHTML="Message displayed after 3 seconds";
	},3000);
}

// clearTimeout()
function stopDelayedMessage(){
	clearTimeout(timeoutID);
	document.getElementById("output").innerHTML="Delayed message cancelled";
}

// setInterval()
let counter=0;
let intervalID;

function startCounter() {
	if (intervalID){
		return;
	}
	intervalID=setInterval(function(){
		counter++;
		document.getElementById("output").innerHTML="Counter: "+counter;
	},1000);
}

// clearInterval()
function stopCounter(){
	clearInterval(intervalID);
	intervalID=null;
	document.getElementById("output").innerHTML="Counter stopped";
}

// Dynamic clock
let clockID;

function startClock() {
	if (clockID) {
		return;
	}
	clockID=setInterval(function(){
		let now=new Date();
		document.getElementById("clock").innerHTML="Time: "+now.toLocaleTimeString();
	},1000);
}

function stopClock() {
	clearInterval(clockID);
	clockID=null;
	document.getElementById("clock").innerHTML="Clock stopped";
}
