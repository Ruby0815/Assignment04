//STEP 1
let number = 6;
function halfNumber(no){
result = no/2;
return result;
}
//halfNumber(number);
console.log("Half of "+ number +" is: "+halfNumber(6));
//STEP 2
let sq=3;
function squareNumber(number){
let result=number*number;
return result;
}
//console.log(`The result of squaring the number ${sq} is ${9}.`);
console.log(`The result of squaring the number ${sq} is ${squareNumber(3)}.`);
//STEP 3
let no1 = 2;
let no2 = 4;
function percentOf(number1, number2) {
  let percent = (number1 / number2) * 100;
  //return percent;
  console.log(`${no1} is ${percent}% of ${no2}.`);
 
}
percentOf(no1, no2);
// console.log(`${no1} is ${percent}% of ${no2}.`);
 
// function percentOf(number1, number2) {
//   let percent = (number1 / number2) * 100;
//   console.log(`${number1} is ${percent}% of ${number2}.`);
// }

// // Example usage:
// percentOf(2, 4);

//STEP 4
let mo1=2;
let mo2=10;
function findModulus(a1,a2){
   let modulus=a1 % a2;
   console.log(`${modulus} is the modulus of ${mo1} and ${mo2}.`
   )
    }
    findModulus(mo1, mo2);
    // console.log(`${modulus} is the modulus of ${mo1} and ${mo2}.`
    // )

//STEP 5
function sumOfNumbers() {
    const input = prompt("Enter numbers separated by commas:");
    const numbersArray = input.split(',').map((num) => parseFloat(num));
    
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
    }
  
    return sum;
  }
  const sum = sumOfNumbers();
console.log(`The sum of the entered numbers is ${sum}.`);