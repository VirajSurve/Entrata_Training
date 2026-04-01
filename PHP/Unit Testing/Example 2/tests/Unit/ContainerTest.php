<?php

use Core\Container;

test('it can resolve something out of container', function () {
    //arrange (Input)
    $container=new Container();

    $container->bind('foo',fn()=> 'bar');

    //act (Output)
    $result=$container->resolve('foo');

    //assert/expect (Checking)
    expect($result)->toEqual('bar');
});
