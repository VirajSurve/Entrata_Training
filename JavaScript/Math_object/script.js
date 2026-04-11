//ROUNDING METHODS

function roundDemo() {

    let num=4.7;

    let result=
        "Original Number: "+num+"<br>"+
        "Math.round(): "+Math.round(num)+"<br>"+
        "Math.floor(): "+Math.floor(num)+"<br>"+
        "Math.ceil(): "+Math.ceil(num)+"<br>"+
        "Math.trunc(): "+Math.trunc(num);

    document.getElementById("output").innerHTML=result;
}



//POWER & ROOT METHODS

function powerDemo() {

    let result=
        "2^3 using Math.pow(): "+Math.pow(2,3)+"<br>"+
        "Square root of 25: "+Math.sqrt(25)+"<br>"+
        "Cube root of 27: "+Math.cbrt(27);

    document.getElementById("output").innerHTML=result;
}



//MIN / MAX METHODS

function minMaxDemo() {

    let result=
        "Minimum value: "+Math.min(5,2,9,1)+"<br>"+
        "Maximum value: "+Math.max(5,2,9,1);

    document.getElementById("output").innerHTML=result;
}



//RANDOM NUMBER METHODS

function randomDemo() {

    let randomNumber=Math.random();

    let result=
        "Random number (0 to 1): "+randomNumber+"<br>"+
        "Random number (1 to 10): "+(Math.floor(Math.random()*10)+1);

    document.getElementById("output").innerHTML=result;
}



//OTP GENERATOR (REAL-WORLD EXAMPLE)

function otpGenerator() {

    let otp=Math.floor(1000+Math.random()*9000);

    document.getElementById("output").innerHTML=
        "Generated OTP: "+otp;
}



//DICE SIMULATOR

function diceSimulator() {

    let dice=Math.floor(Math.random()*6)+1;

    document.getElementById("output").innerHTML=
        "Dice rolled: "+dice;
}