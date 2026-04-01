<?php

use Illuminate\Support\Collection;

const BASE_PATH = __DIR__ . '/../';
require BASE_PATH.'/vendor/autoload.php';

$numbers=new Collection([
    1,2,3,4,5,6,7,88,9,10
]);

if($numbers->contains(10)){
    echo "it contains 10";
}

$lessthanorequalto5=$numbers->filter(function ($numbers){
    return $numbers<=5;
});

echo $lessthanorequalto5;
