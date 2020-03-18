function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <18) ? "You are not old enough" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote ";

}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "hite and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " -colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Fashion(Color, Style, Size,) {
    this.Fashion_Color = Color;
    this.Fashion_Style = Style;
    this.Fashion_Size = Size;
}

var Emily = new Fashion("red", "blouse", "Medium"); 
var Sasha = new Fashion ("black", "dress", "Small");
var Judy = new Fashion ("pink", "scarf", "One Size");

function myFunction_2() {
    document.getElementById("Keywords_and_Constructors_2").innerHTML = "Emily wears a " + Emily.Fashion_Color + "-colored " + Emily.Fashion_Style + " in a size " + Emily.Fashion_Size;
}


function currentDate() {
    document.getElementById("Nested_Function").innerHTML = date();
    function date() {
        return new Date();

    }

}