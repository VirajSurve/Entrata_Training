<?php

use Core\Validator;

it('validates a string',function(){
    expect(Validator::string('viraj'))->toBeTrue();
    expect(Validator::string(false))->toBeFalse();
    expect(Validator::string(''))->toBeFalse();
});

it('Validates a string with minimum length',function(){
    expect(Validator::string('viraj',20))->toBeFalse();
});

test('validates an email',function(){
    expect(Validator::email('xyzer'))->toBeFalse();
    expect(Validator::email('viraj@gmail.com'))->toBeTrue();
});

test('validates a number greater than a given amount',function(){
    expect(Validator::greaterThan(10,100))->toBeFalse();
    expect(Validator::greaterThan(10,1))->toBeTrue();
});
