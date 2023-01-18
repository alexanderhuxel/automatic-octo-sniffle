<?php

function increaseItem(){
$currentNumber = $_GET['currentNumber'];
$currentNumber = $currentNumber + 1;

return checkNumber($currentNumber);
}

function checkNumber($number){
        if ($number % 3 == 0 && $number % 5 == 0):
            return "Fizz Buzz";
        elseif ($number % 3 == 0):
            return "Fizz";
        elseif ($number % 5 == 0) :
            return "Buzz";
        else: 
            return $number;
        endif;
    }

    function getList($length){

$list = [];

for ($i=1; $i < $length +1; $i++) { 
$list[] = checkNumber($i);
}

$result = false;
$result = implode(",", $list);

        return $result;
    }

    if(isset($_GET['function'])):
        if($_GET['function'] === 'list'):
            echo(getList($_GET['length']));
        endif;

        if($_GET['function'] === 'increaseItem' && $_GET['currentNumber']):
        echo(increaseItem());
        endif;

    endif;