// IMPORT THE MODULE
import { add, sub, multiply, divide } from "./modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

let again = "y";
let result;
do {
  let NUMBER1 = parseFloat(prompt("Enter first number"));
  let NUMBER2 = parseFloat(prompt("Enter second number"));
  // CHECK TO SEE WHAT OPERATION THEY'RE USING
  let operation = prompt(`What is the operator? (+,-,* or /)`);

  // CALL THE APPROPRIATE FUNCTION
  switch (operation) {
    case "+":
     result = add(NUMBER1, NUMBER2);
      break;
    case "-":
     result = sub(NUMBER1, NUMBER2);
      break;
    case "*":
     result = multiply(NUMBER1, NUMBER2);
      break;
    case "/":
     result = divide(NUMBER1, NUMBER2);
      break;
  }
  alert(`${NUMBER1} ${operation} ${NUMBER2} = ${result}`);

  again = prompt("Do you want to calculate again? (y/n)");
} while (again === "y");

alert("Thanks... ");
