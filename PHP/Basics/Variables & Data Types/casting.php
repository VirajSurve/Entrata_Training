<?php

    $num = "100";

    echo "Original type: ";
    var_dump($num);

    $num = (int) $num;

    echo "After casting: ";
    var_dump($num);

?>