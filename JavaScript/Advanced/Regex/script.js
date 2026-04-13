//REGEX CREATION

// Literal syntax
let pattern1=/JavaScript/;

// Constructor syntax
let pattern2=new RegExp("Training");

console.log(pattern1);
console.log(pattern2);


//test() METHOD

function testMethod() {

    let text="JavaScript Training Session";

    let result=/JavaScript/.test(text);

    document.getElementById("output").innerHTML =
        "test() result: "+result;
}


//match() METHOD

function matchMethod() {

    let text="Learn JavaScript and Java";

    let result=text.match(/Java/g);

    document.getElementById("output").innerHTML =
        "match(): "+result;
}


//replace() METHOD

function replaceMethod() {

    let text="JavaScript is powerful";

    let result=text.replace(/powerful/,"awesome");

    document.getElementById("output").innerHTML =
        "replace(): "+result;
}


//search() METHOD

function searchMethod() {

    let text="Frontend uses JavaScript";

    let result=text.search(/JavaScript/);

    document.getElementById("output").innerHTML =
        "search() index: "+result;
}


//split() METHOD

function splitMethod() {

    let text="HTML,CSS,JavaScript,PHP";

    let result=text.split(/,/);

    document.getElementById("output").innerHTML =
        "split(): "+result;
}

//REGEX FLAGS

let message="hello Hello HELLO";

console.log(message.match(/hello/i));   // ignore case
console.log(message.match(/hello/g));   // global search
console.log(message.match(/hello/gi));  // global + ignore case

//CHARACTER CLASSES

console.log(/[abc]/.test("a"));
console.log(/[0-9]/.test("5"));
console.log(/[a-z]/.test("x"));
console.log(/[A-Z]/.test("X"));
console.log(/[A-Za-z]/.test("M"));

console.log(/\d/.test("9"));
console.log(/\w/.test("A"));
console.log(/\s/.test(" "));

//ANCHORS

console.log(/^Java/.test("JavaScript"));
console.log(/Script$/.test("JavaScript"));

//QUANTIFIERS

console.log(/a+/.test("aaa"));
console.log(/a*/.test(""));
console.log(/a?/.test("a"));
console.log(/a{2}/.test("aa"));
console.log(/a{2,4}/.test("aaa"));

//GROUPING

let text="I like cats and dogs";

console.log(text.match(/(cats|dogs)/g));

//ALTERNATION

console.log(/Java|PHP/.test("Java"));
console.log(/Java|PHP/.test("PHP"));

//EXTRACTION EXAMPLE

let sentence="Order number: 45678";

console.log(sentence.match(/\d+/));