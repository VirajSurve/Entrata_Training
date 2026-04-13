function showOperators(){

    let output="";

    //Arithmetic Operators
    let a=10;
    let b=5;

    output+="Addition: "+(a+b)+"<br>";
    output+="Subtraction: "+(a-b)+"<br>";
    output+="Multiplication: "+(a*b)+"<br>";
    output+="Division: "+(a/b)+"<br>";
    output+="Modulus: "+(a%b)+"<br>";
    output+="Exponentiation: "+(a**2)+"<br><br>";

    //Assignment Operators
    let x=10;
    x+=5;
    output+="x="+x+"<br>";
    output+="Assignment (x += 5): "+x+"<br>";
    x=10;
    x-=5;
    output+="Assignment (x -= 5): "+x+"<br>";
    x=10;
    x*=5;
    output+="Assignment (x *= 5): "+x+"<br>";
    x=10;
    x/=5;
    output+="Assignment (x /= 5): "+x+"<br>";
    x=10;
    x%=3;
    output+="Assignment (x %= 3): "+x+"<br>";
    x=10;
    x**=2;
    output+="Assignment (x **= 2): "+x+"<br><br>";

    //Comparison Operators
    output+="Equal (5=='5'): "+(5=='5')+"<br>";
    output+="Not Equal (5!='5'): "+(5!='5')+"<br>";
    output+="Strict Equal (5==='5'): "+(5==='5')+"<br>";
    output+="Strict Not Equal (5!=='5'): "+(5!=='5')+"<br>";
    output+="Greater Than: "+(a>b)+"<br>";
    output+="Greater Than Equal to: "+(a>=b)+"<br>";
    output+="Less Than: "+(a<b)+"<br>";
    output+="Less Than Equal to: "+(a<=b)+"<br><br>";

    //Logical Operators
    output+="Logical AND: "+(a>5&&b<10)+"<br>";
    output+="Logical OR: "+(a<5||b<10)+"<br>";
    output+="Logical NOT: "+!(a==b)+"<br>";
    output+="Nullish Coalescing (null ?? 'default'): "+(null??'default')+"<br><br>";

    //Unary Operators
    let num=10;
    output+="Unary Plus (+num): "+(+num)+"<br>";
    output+="Unary Minus (-num): "+(-num)+"<br>";
    num++;
    output+="Unary Increment (num++): "+num+"<br>";
    num--;
    output+="Unary Decrement (num--): "+num+"<br>";
    output+="Typeof num: "+(typeof num)+"<br><br>";

    //Bitwise Operators
    output+="Bitwise AND (5&1): "+(5&1)+"<br>";
    output+="Bitwise OR (5|1): "+(5|1)+"<br>";
    output+="Bitwise XOR (5^1): "+(5^1)+"<br>";
    output+="Bitwise NOT (~5): "+(~5)+"<br>";
    output+="Left Shift (5<<1): "+(5<<1)+"<br>";
    output+="Right Shift (5>>1): "+(5>>1)+"<br>";
    output+="Unsigned Right Shift (5>>>1): "+(5>>>1)+"<br><br>";

    // Ternary Operator
    output+="Ternary Result: "+((a>b)?"a is greater":"b is greater");

    document.getElementById("output").innerHTML=output;
}