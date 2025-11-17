// Type Casting and Constant Variables :

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(typeof x, "-->", x);
// console.log(typeof y, "-->", y);
// console.log(typeof z, "-->", z);

// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(typeof x, "-->", x);
// console.log(typeof y, "-->", y);
// console.log(typeof z, "-->", z);

// let x = 0;
// let y = 0;
// let z = 0;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(typeof x , "-->" , x);
// console.log(typeof y , "-->" , y);
// console.log(typeof z , "-->" , z);

// -------------------------------------------------

// Constant (const) Variables :

const PI = 3.14159;
let radius;
let circumference;

// Targeting Elements by their IDs:
const myButton = document.getElementById("myButton");
const input = document.getElementById("inputField");
const output = document.getElementById("p");

myButton.onclick = function () {

  // Checks, if Input is Empty or not a Valid Number :

  if (input.value.trim() === "" || isNaN(input.value) || input.value < 0 ) {
    output.textContent = "Please enter a valid radius!";
    output.style.color = "#ff0000ff";         // red text for invalid input
    input.style.borderColor = "#ff0000ff";    // red border for invalid input

    resetFunction(input);        // clears input and focuses the input field again

    return;     // exits the function if input is invalid
  }

  // Calculating Circumference :

  radius = Number(input.value);
  circumference = (2 * PI * radius).toFixed(2);

  // Show result :

  output.textContent = `The circumference of a circle with radius ${radius} cm is ${circumference} cm.`;
  output.style.color = "#1e40af";             // blue for result
  input.style.borderColor = "#3b82f6";        // restore normal border color

  resetFunction(input);

};

function resetFunction(input) {
  input.value = "";     // clears input
  input.focus();        // auto-focus again
}
