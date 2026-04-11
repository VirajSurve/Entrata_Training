function showVariables(){

    // var example
    var city="Pune";
    var city="Mumbai"; //redeclaration allowed
    city="Chennai" //reassignment allowed

    // let example
    let age=21;
    // let age=22; //redeclaration not allowed
    age=23; //reassignment allowed

    // const example
    const country="India";
    // const country = "USA"; //redeclaration not allowed
    // country = "UAE"; //reassignment allowed

    // dynamic typing example
    let value=10;
    value="Now I am a string";

    document.getElementById("output").innerHTML=
        "var city: "+ city + "<br>" +
        "let age: " + age + "<br>" +
        "const country: " + country + "<br>" +
        "dynamic value: " + value;

    scopeExample();
}

function scopeExample(){

    if(true){
        var a="I am var"; //function scoped
        let b="I am let"; //block scoped
        const c="I am const"; //block scoped
    }

    console.log(a); // works
    console.log(b); //error
    console.log(c); //error
}