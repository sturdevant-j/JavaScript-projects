// global variable 
var catName = "Sasha";
function myCat() {
    document.getElementById("cat").innerHTML = "The name of my cat is " + catName;
}

// local variable 
function portlandFlower() {
    var flowerName = "Rose";
    document.getElementById("flower").innerHTML = "Portland Oregon's trademark flower is a " + flowerName;
}

// function with an error 
function errorFunction() {
    document.getElementById("id").innerHTML = "Have a good week";
}

// Date()getHours() method (only returns when it's morning)
function dateGetHours() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "Good Morning";
    }   
}

// if statement 
function weekday() {
    var text;
    if (new Date().getDay() == 5) {
        text = "TGIF";   
    } else {
        text = "Have a nice week"; 
    } 
    document.getElementById("weekend").innerHTML = text; 
}

// else statement 
function Name_Function() {
    var Message;
    var Name = document.getElementById("Name").value;
    if (Name == "Judy")  {
        Message = "Hello Judy";
    }
    else {
        Message = "You are not Judy";
    }
    document.getElementById("What_is_your_name?").innerHTML = Message;
}

// else if statements 
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time!";   
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is evening time.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}