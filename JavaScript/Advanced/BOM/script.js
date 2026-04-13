// WINDOW OBJECT

let timeoutId=null;
let intervalId=null;

function setOutput(text) {
    document.getElementById("output").innerHTML=text;
}

// alert(), confirm(), prompt()
function showAlert() {
    window.alert("This is an alert box!");
}

function showConfirm() {
    const result=window.confirm("Do you want to continue?");
    setOutput("Confirm result: " + result);
}

function showPrompt() {
    const name=window.prompt("Enter your name:");
    setOutput("Hello " + (name || "Guest"));
}

// NAVIGATOR OBJECT
function showNavigator() {
    const info=
        "Browser Name: " + navigator.appName + "<br>" +
        "Browser Version: " + navigator.appVersion + "<br>" +
        "Platform: " + navigator.platform + "<br>" +
        "Language: " + navigator.language + "<br>" +
        "Online: " + navigator.onLine + "<br>" +
        "Cookies Enabled: " + navigator.cookieEnabled;
    setOutput(info);
}

// LOCATION OBJECT
function showLocation() {
    const info=
        "URL: " + location.href + "<br>" +
        "Hostname: " + location.hostname + "<br>" +
        "Pathname: " + location.pathname + "<br>" +
        "Protocol: " + location.protocol;
    setOutput(info);
}

function reloadPage() {
    location.reload();
}

function goToExample() {
    location.assign("https://www.google.com");
}

// HISTORY OBJECT
function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

function showHistoryLength() {
    setOutput("History length: " + history.length);
}

// SCREEN OBJECT
function showScreenInfo() {
    const info=
        "Screen Width: " + screen.width + "<br>" +
        "Screen Height: " + screen.height + "<br>" +
        "Available Width: " + screen.availWidth + "<br>" +
        "Available Height: " + screen.availHeight;
    setOutput(info);
}

// TIMING FUNCTIONS
function startTimer() {
    timeoutId=setTimeout(function () {
        setOutput("This message appeared after 3 seconds.");
    }, 3000);
}

function stopTimer() {
    clearTimeout(timeoutId);
    setOutput("Timer stopped.");
}

function startInterval() {
    if (intervalId) {
        setOutput("Interval is already running.");
        return;
    }
    intervalId=setInterval(function () {
        console.log("Interval running every 5 seconds");
    }, 5000);
    setOutput("Interval started. Check console every 5 seconds.");
}

function stopInterval() {
    clearInterval(intervalId);
    intervalId=null;
    setOutput("Interval stopped.");
}

// window.open()
function openWindow() {
    window.open("https://www.google.com", "_blank");
}