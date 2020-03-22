// while loop
function call_loop() {
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br> " + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

// string length property
function stringLength() {
    var str = "Good Day!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

// for loop
var instruments = ["guitar", "tamborine", "piano", "bass", "violin", "trumpet", "flute"];
var content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

// array
function array_function() {
    var cat_picture = [];
    cat_picture[0] = "playing";
    cat_picture[1] = "sleeping";
    cat_picture[2] = "purring";
    cat_picture[3] = "eating";
    document.getElementById("array").innerHTML = "In this photo, the cat is " +
        cat_picture[2] + ".";
}

// const 
function constant_function() {
    const grocery_item = { type: "fruit", kind: "apple", color: "green" };
    grocery_item.color = "red";
    grocery_item.price = "$2.00";
    document.getElementById("constant").innerHTML = "The price of the " + //concatenate 
        grocery_item.type + " was " + grocery_item.price;
}

// let 
function let_function() {

    var Y = 16;
    document.getElementById("let_1").innerHTML = Y;
    {
        let Y = 22;
        document.getElementById("let_2").innerHTML = Y;
    }
    document.getElementById("let_3").innerHTML = Y;
}


// return statement 
function square(X) {
    return X * X;
}
var one = square(3);


// object and let 
function cat() {
    let kitty = {
        name: "Tut",
        breed: "persian",
        age: "5",
        color: "black",
        description: function () {
            return "The cat is a " + this.color + " " + this.breed + " " + this.name + " " + this.age;
        }
    };
    document.getElementById("kitty_object").innerHTML = kitty.description();
}

// continue
function continue_function() {
    let even = "";
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) continue;
        even += i + "<br>"; //add each number to even
    }
    document.getElementById("even").innerHTML = even;

}

//break
function break_function() {
    let numbers = "";
    let i = 1;
    while (i < 10) {
        if (i == 6) break; //breaks the loop
        numbers += i + "<br>";
        i++; //changes i to the next number
    }
    document.getElementById("break").innerHTML = numbers;

}