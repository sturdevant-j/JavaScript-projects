var firstName = "Sunny", lastName = "Blue";

var firstName = firstName.fontcolor("yellow");
document.write(firstName);

function My_First_Function() {
    var lastName = "Blue";
    var result = lastName.fontcolor("indigo");
    document.getElementById("indigo_text") .innerHTML = result;

}

document.getElementById("Good_Morning");


// use concatenate to display string element, 

function myFunction() {
    var sentence = "Welcome to my JavaScript practice page";
    sentence += " please enjoy.";
    document.getElementById("concatenate").innerHTML = sentence;
}

function newFunction(p1, p2) {
    document.getElementById("multiplication").innerHTML = p1 * p2;
  }
  