let targetTime=null;
let timer=null;
const timerDisplay=document.getElementById('timerDisplay');
const datetimeInput=document.getElementById('datetimeInput');

function showMessage(message,isError=false){
    timerDisplay.textContent=message;
    if(isError){
        timerDisplay.classList.add('error');
    } else {
        timerDisplay.classList.remove('error');
    }
}

function submitDateTime(){
    const input=datetimeInput.value;
    if(!input){
        showMessage('Please select a valid date and time.', true);
        return;
    }

    targetTime=new Date(input);

    if(targetTime<new Date()){
        showMessage('Cannot set a countdown for a past date.', true);
        targetTime=null;
        return;
    }
    showMessage('Date set. Press Start to begin countdown.');
    updateDisplay();
}

function startTimer(){
    if(!targetTime){
        showMessage('Please submit a date and time first.', true);
        return;
    }
    clearInterval(timer);
    updateDisplay();
    timer=setInterval(updateDisplay,1000);
}

function resetTimer(){
    clearInterval(timer);
    targetTime=null;
    datetimeInput.value='';
    showMessage('00:00:00');
}

function updateDisplay(){
    if(!targetTime) return;

    const now=new Date();
    const diff=targetTime-now;

    if(diff<=0){
        clearInterval(timer);
        showMessage("Time's Up!");
        return;
    }

    let years=targetTime.getFullYear()-now.getFullYear();
    let months=targetTime.getMonth()-now.getMonth();
    let days=targetTime.getDate()-now.getDate();
    let hours=targetTime.getHours()-now.getHours();
    let minutes=targetTime.getMinutes()-now.getMinutes();
    let seconds=targetTime.getSeconds()-now.getSeconds();

    if(seconds<0){
        minutes--;
        seconds+=60;
    }
    if(minutes<0){
        hours--;
        minutes+=60;
    }
    if(hours<0){
        days--;
        hours+=24;
    }
    if(days<0){
        months--;
        const daysInPreviousMonth=new Date(targetTime.getFullYear(),targetTime.getMonth(),0).getDate();
        days+=daysInPreviousMonth;
    }
    if(months<0){
        years--;
        months+=12;
    }

    const displayParts=[];
    if(years>0){
        displayParts.push(`${years} year${years>1?'s':''}`);
    }
    if(months>0){
        displayParts.push(`${months} month${months>1?'s':''}`);
    }
    if(days>0){
        displayParts.push(`${days} day${days>1?'s':''}`);
    }

    const timeString=
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;

    if(displayParts.length>0){
        showMessage(`${displayParts.join(', ')}, ${timeString}`);
    } else {
        showMessage(timeString);
    }
}