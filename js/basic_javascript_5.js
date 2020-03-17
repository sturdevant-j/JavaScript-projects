function showInfinity () {
    document.getElementById("infinity_1") .innerHTML = 2E310;
}

function showNegativeInfinity () {
    document.getElementById("infinity_2") .innerHTML = -3E310;
}

// example of console log use
console.log(4+6);

// example of type coercion
function showTypeCoercion() {
    var X = "16"
    var Y = 5
    document.getElementById("typeCoercion") .innerHTML = (X + Y);   
}

// true output
function showTrueOutput () {
    var X = 10;
    var Y = 10;
    document.getElementById("true") .innerHTML = (X === Y);
}

// false output
function showFalseOutput () {
    var X = 12;
    var Y = 14;
    document.getElementById("false") .innerHTML = (X === Y);
}

// return false example with different data type but same value
function showSameValue () {
    var X = 16;
    var Y = "16";
    document.getElementById("false_1") .innerHTML = (X === Y);

}

// return false with same data type different value
function showSameData () {
    var X = 16;
    var Y = 17;
    document.getElementById("false_2") .innerHTML = (X === Y);

}
// return true && operator
function showAndOperator () {
    var X = 10 > 3;
    var Y = 6 > 3;
    document.getElementById("and") .innerHTML = (X && Y);

}
// return false && operator
function showAndOperator_2 () {
    var X = 10 < 3;
    var Y = 6 > 3;
    document.getElementById("and_2") .innerHTML = (X && Y);

}
// return true || operator
function showOrOperator () {
    var X = 5 > 10;
    var Y = 10 > 4;
    document.getElementById("or_1") .innerHTML = (X || Y);

}
// return false  || operator
function showOrOperator_2 () {
    var X = 2 > 10;
    var Y = 1 > 4;
    document.getElementById("or_2") .innerHTML = (X || Y);

}

// not operator display true
function not_FunctionShowTrue () {
    document.getElementById("not") .innerHTML = ! (5 > 10);
}

// not operator display false

function not_FunctionShowFalse() {
    document.getElementById("not_2") .innerHTML = ! (20 > 10);
}
