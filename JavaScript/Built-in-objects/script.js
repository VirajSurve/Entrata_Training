//STRING OBJECT
function stringDemo() {

    let text="JavaScript Training";

    let result=
        "Original String: "+text+"<br>"+
        "Length: "+text.length+"<br>"+
        "Uppercase: "+text.toUpperCase()+"<br>"+
        "Lowercase: "+text.toLowerCase()+"<br>"+
        "Includes 'Script': "+text.includes("Script")+"<br>"+
        "Replace word: "+text.replace("Training","Session")+"<br>"+
        "Substring (0-10): "+text.substring(0,10);

    document.getElementById("output").innerHTML=result;
}



//DATE OBJECT
function dateDemo() {

    let today=new Date();

    let result=
        "Current Date: "+today+"<br>"+
        "Year: "+today.getFullYear()+"<br>"+
        "Month: "+(today.getMonth()+1)+"<br>"+
        "Day: "+today.getDate()+"<br>"+
        "Hours: "+today.getHours()+"<br>"+
        "Minutes: "+today.getMinutes()+"<br>"+
        "Seconds: "+today.getSeconds();

    document.getElementById("output").innerHTML=result;
}



//ARRAY OBJECT
function arrayDemo() {

    let fruits=["Apple","Banana","Mango"];

    fruits.push("Orange");
    fruits.pop();
    fruits.unshift("Grapes");
    fruits.shift();

    let mapped=fruits.map(fruit=>fruit.toUpperCase());

    let result=
        "Array Elements: "+fruits.join(", ")+"<br>"+
        "Array Length: "+fruits.length+"<br>"+
        "Mapped Uppercase Array: "+mapped.join(", ");

    document.getElementById("output").innerHTML=result;
}



//BOOLEAN OBJECT
function booleanDemo() {

    let isStudent=true;
    let hasJob=false;

    let result=
        "Is Student: "+isStudent+"<br>"+
        "Has Job: "+hasJob+"<br>"+
        "Boolean(0): "+Boolean(0)+"<br>"+
        "Boolean(1): "+Boolean(1)+"<br>"+
        "Boolean('text'): "+Boolean("text");

    document.getElementById("output").innerHTML=result;
}


//ADVANCED ARRAY METHODS
let numbers=[10,20,30,40];

console.log(numbers.filter(n=>n>20));
console.log(numbers.reduce((sum,n)=>sum+n,0));


//ADDITIONAL STRING METHODS
console.log("Hello World".startsWith("Hello"));
console.log("Hello World".endsWith("World"));
console.log("Hello World".split(" "));


//CUSTOM DATE FORMATTING EXAMPLE
let now=new Date();

let formattedDate=
    now.getDate()+"/"+
    (now.getMonth()+1)+"/"+
    now.getFullYear();

console.log("Formatted Date:",formattedDate);