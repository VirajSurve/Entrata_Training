//Creating an object

let student = {
    name:"Viraj",
    age:21,
    course:"Computer Engineering",
    //Method inside object
    greet:function () {
        return "Hello, my name is " + this.name;
    },
    //Array inside object
    subjects:["DBMS","JavaScript","PHP"],
    //Nested object
    address:{
        city:"Pune",
        state:"Maharashtra"
    }
};

//Access object properties
function showStudent() {
    document.getElementById("output").innerHTML =
        "Name: "+student.name+"<br>" +
        "Age: "+student.age+"<br>" +
        "Course: "+student.course+"<br>" +
        student.greet();
}

//Update object property
function updateAge() {
    student.age=22;
    document.getElementById("output").innerHTML="Updated Age: "+student.age;
}

//Access array inside object
function showSubjects() {
    document.getElementById("output").innerHTML="Subjects: "+student.subjects.join(", ");
}

//Access nested object
function showAddress() {
    document.getElementById("output").innerHTML=
        "City: "+student.address.city+"<br>" +
        "State: "+student.address.state;
}

//Loop through object properties
for (let key in student) {
    console.log(key+": "+student[key]);
}

//Constructor function example
function Employee(name, role){
    this.name=name;
    this.role=role;
}

let emp1=new Employee("Rahul","Developer");

console.log(emp1.name);
console.log(emp1.role);

//Object utility methods
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//Object destructuring
let {name,age}=student;

console.log(name);
console.log(age);

//Add and delete properties dynamically
function addDeleteProperty() {
    student.email="viraj@example.com";
    let afterAdd="After adding email: "+JSON.stringify(student);
    delete student.email;
    let afterDelete="After deleting email: "+JSON.stringify(student);
    document.getElementById("output").innerHTML=afterAdd+"<br><br>"+afterDelete;
}

//Property checks
function checkProperties() {
    let hasNameIn=("name" in student);
    let hasPhoneIn=("phone" in student);
    let hasOwnCourse=student.hasOwnProperty("course");
    document.getElementById("output").innerHTML=
        "'name' in student: "+hasNameIn+"<br>"+
        "'phone' in student: "+hasPhoneIn+"<br>"+
        "hasOwnProperty('course'): "+hasOwnCourse;
}

//Optional chaining and nullish coalescing
function optionalAndNullish() {
    let pin=student.address?.pinCode??"Not available";
    document.getElementById("output").innerHTML=
        "City using optional chaining: "+(student.address?.city)+"<br>"+
        "Pin using nullish coalescing: "+pin;
}

//Clone and merge objects
function cloneAndMerge() {
    let cloned={...student};
    let updated={...student,age:23,semester:8};
    let merged=Object.assign({},student,{college:"Entrata"});
    document.getElementById("output").innerHTML=
        "Cloned name: "+cloned.name+"<br>"+
        "Updated age: "+updated.age+", semester: "+updated.semester+"<br>"+
        "Merged college: "+merged.college;
}

//Shallow vs deep copy
function shallowVsDeepCopy() {
    let shallowCopy={...student};
    let deepCopy=JSON.parse(JSON.stringify(student));
    shallowCopy.address.city="Mumbai";
    deepCopy.address.city="Nashik";
    document.getElementById("output").innerHTML=
        "Original city after shallow change: "+student.address.city+"<br>"+
        "Deep copy city: "+deepCopy.address.city+"<br>";
    student.address.city="Pune";
}

//JSON methods
function jsonDemo() {
    let jsonText=JSON.stringify(student);
    let parsed=JSON.parse(jsonText);
    document.getElementById("output").innerHTML=
        "JSON String: "+jsonText+"<br><br>"+
        "Parsed Name: "+parsed.name+", Parsed Course: "+parsed.course;
}

//Getter and setter example
let person={
    firstName:"Viraj",
    lastName:"Kulkarni",
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    set fullName(value){
        let parts=value.split(" ");
        this.firstName=parts[0]||"";
        this.lastName=parts[1]||"";
    }
};

function getterSetterDemo() {
    person.fullName="Aarav Patil";
    document.getElementById("output").innerHTML=
        "Getter result: "+person.fullName+"<br>"+
        "First Name after setter: "+person.firstName+"<br>"+
        "Last Name after setter: "+person.lastName;
}

//Prototype example
function Animal(type){
    this.type=type;
}

Animal.prototype.sound=function(){
    return "This "+this.type+" makes a sound.";
};

function prototypeDemo() {
    let dog=new Animal("dog");
    document.getElementById("output").innerHTML=
        "Animal type: "+dog.type+"<br>"+
        "Prototype method: "+dog.sound();
}

//Class syntax example
class Car{
    constructor(brand){
        this.brand=brand;
    }

    details(){
        return "Car brand is "+this.brand;
    }
}

function classDemo() {
    let myCar=new Car("Toyota");
    document.getElementById("output").innerHTML=myCar.details();
}

//Object.freeze and Object.seal
function freezeSealDemo() {
    let frozenObj={name:"Frozen"};
    Object.freeze(frozenObj);
    frozenObj.name="Changed";
    frozenObj.newProp="test";

    let sealedObj={name:"Sealed"};
    Object.seal(sealedObj);
    sealedObj.name="Updated";
    sealedObj.newProp="test";

    document.getElementById("output").innerHTML=
        "Frozen object name: "+frozenObj.name+"<br>"+
        "Frozen object newProp: "+frozenObj.newProp+"<br>"+
        "Sealed object name: "+sealedObj.name+"<br>"+
        "Sealed object newProp: "+sealedObj.newProp;
}