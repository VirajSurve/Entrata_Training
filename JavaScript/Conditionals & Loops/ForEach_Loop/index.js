function runLoops() {

    let result="";
    result+="<br><b>forEach Loop (Array):</b><br>";
    let fruits=["Apple", "Banana", "Mango"];

    fruits.forEach(function(fruit) {
        result+=fruit+"<br>";
    });

    document.getElementById("output").innerHTML = result;
}