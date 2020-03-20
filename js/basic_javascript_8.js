// concat method
function completeSentence() {
    var part_1 = "Welcome" ;
    var part_2 = " to my ";
    var part_3 = "JavaScript project";
    var part_4 = " webpage";
    var wholeSentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
}
// slice method
function sliceMethod() {
    var str = "Hello. Welcome to my webpage";
    var res= str.slice(0,5);
    document.getElementById("slice").innerHTML = res;
}

// uppercase method
function uppercaseMethod() {
    var str = "hello everyone!";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}
   
// search method
function searchMethod() {
    var str = "My favorite color to paint with is phthalo green"
    var n = str.search ("green");
    document.getElementById("search").innerHTML = n;
}

// toString method
function toStringMethod() {
    var X =92;
    document.getElementById("to_string").innerHTML = X.toString(); 
}   

    // toPrecision method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); 
}

// toFixed method
function toFixed_Method() {
    var num = 5.6874;
    var n = num.toFixed(2);
    document.getElementById("to_fixed").innerHTML = n;
}

// valueOf method
function valueOf_Method() {
    var str = "Good Morning!";
    var res = str.valueOf();
    document.getElementById("valueOf").innerHTML = res;
}
