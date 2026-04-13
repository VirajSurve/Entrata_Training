function showMessage(text) {
	document.getElementById("output").innerHTML=text;
}

function setCookie(name,value,maxAgeSeconds) {
	document.cookie=name+"="+value+"; max-age="+maxAgeSeconds+"; path=/";
}

//SET COOKIE
function setUserCookie() {
	let username=document.getElementById("username").value;
	setCookie("username",username,3600);
	showMessage("Cookie set successfully!");
}

//GET COOKIE
function getUserCookie() {
	showMessage("Stored Cookies: "+document.cookie);
}

//DELETE COOKIE
function deleteUserCookie() {
	setCookie("username","",0);
	showMessage("Cookie deleted successfully!");
}

//COOKIE WITH EXPIRY DATE
function setExpiryCookie() {
	let date=new Date();
	date.setTime(date.getTime()+(24*60*60*1000));
	let expires="expires="+date.toUTCString();
	document.cookie="user=Viraj;"+expires+";path=/";
	showMessage("Expiry cookie set for 1 day.");
}

//READ SPECIFIC COOKIE
function getCookieValue(name) {
	let cookieArray=document.cookie.split(";");
	for (let i=0; i<cookieArray.length; i++) {
		let cookie=cookieArray[i].trim();
		if (cookie.startsWith(name+"=")) {
			return cookie.substring(name.length+1);
		}
	}
	return "Cookie not found";
}

function showSpecificCookie() {
	let usernameValue=getCookieValue("username");
	showMessage("username cookie: "+usernameValue);
}

//MULTIPLE COOKIES + PATH
setCookie("theme","dark",86400);
setCookie("language","english",86400);
document.cookie="location=Pune; path=/";
