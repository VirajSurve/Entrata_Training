<!DOCTYPE html>
<html>
<head>
    <title>PHP Magic Methods Example</title>
</head>
<body>

<h2>PHP Magic Methods Demonstration</h2>

<?php

class Student{

    public $name;
    private $data=[];

    public function __construct($name){
        $this->name=$name;
        echo "Constructor called for ".$this->name."<br>";
    }

    public function __destruct(){
        echo "Destructor called for ".$this->name."<br>";
    }

    public function __toString(){
        return "Student name is ".$this->name;
    }

    public function __set($key,$value){
        $this->data[$key]=$value;
    }

    public function __get($key){
        return $this->data[$key];
    }
}

$student=new Student("Viraj");

echo "<h3>Using __toString()</h3>";
echo $student."<br>";

echo "<h3>Using __set()</h3>";
$student->city="Pune";

echo "<h3>Using __get()</h3>";
echo "City: ".$student->city."<br>";

?>
</body>
</html>