// ADD A PRIVATE FUNCTION CALLED CALCULATE
function CALCULATE(){
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
  

}
//CALCULATE();

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

export function add(no1, no2) {
  return no1 + no2; 
  
}
// SUBTRACT FUNCTION
export function sub(no1, no2) {
  return no1 - no2;
  
    
  }
// MULTIPLY FUNCTION
export function multiply(no1, no2) {
  return no1 * no2;
    
  }
// DIVIDE FUNCTION
export function divide(no1, no2) {
  return no1 / no2;
    
  }
// EXPORT THE FOUR PUBLIC FUNCTIONS
//export function add(no1, no2);
// export function sub(no1, no2);
// export function multiply(no1, no2);
// export function divide(no1, no2);