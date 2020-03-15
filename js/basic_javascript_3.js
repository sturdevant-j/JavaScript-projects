// Write your own function
function myFunction(p1, p2) {
  document.getElementById("math").innerHTML = p1 - p2;  
  }
  
  // Write a multiplication function
  function secondFunction(p1, p2) {
    document.getElementById("math1").innerHTML = p1 * p2;  
    }

// write a division equation
    function thirdFunction(p1, p2) {
      document.getElementById("math2").innerHTML = p1 / p2;  
      }

    // write multiple math equations in a function
    function fourthFunction() {
      var simple_Math = (1 + 2) * 10 / 2 -5;
      document.getElementById("math3") .innerHTML = "1 plus 2, multiplied by ten divided in half and then subtracted by 5 equals " + simple_Math
    }
// modus operator function
    function fifthFunction() {
      var simple_Math= 25 % 6;
      document.getElementById("math4") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
    }

    // negation operator function
    function sixthFunction() {
      var x = 10;
      document.getElementById("math5") .innerHTML = -x;
    }

    // increment function
    function seventhFunction() {
      var x = 5;
      x++;
      document.getElementById("math6") .innerHTML = x; 
    }
   

    // decrement function 
    function eigthFunction() {
      var x = 5.25;
      x--;
      document.getElementById ("math7") .innerHTML = x; 
    }

    // random number alert 
    window.alert (Math.random());

  // math object and math object method
  function ninthFunction() {
    var simple_Math = Math.round(4.4);
    document.getElementById("math8").innerHTML = simple_Math;
  }
  
