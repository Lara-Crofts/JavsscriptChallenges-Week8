// MEDIUM
// CHALLENGE 2


// Write a function that will allow you to calculate how many slices of pizza x 
//each person y would get if they shared evenly. The function should return an interpolated
// string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal
// in case there is no way to split the pizza evenly.

// notes: interpolated string is where you can use placeholders to inject variables into a string.



//javascript function is called sharePizza, which is global scope which console.log calls are made
// function sharePizza takes 3 parameters. will calculate how many pizza slices each person would get
function sharePizza(totalSlices, numOfPeople) {

// if statement, will return error 
    if (numOfPeople <= 0) {
      return "Invalid input number: Number of people needs to be greater than 0";
    }
  
    // stored here 
    const slicesPerPerson = totalSlices / numOfPeople;
  //need to use backtick `` and $, which allows us to insert the values of variable into the string
  //.fixedto(2) method used to format value output by exactly **2 decimal places
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza`;
  }
  
  console.log(sharePizza(8, 2));  // Output: Each person gets 4.00 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3));  // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(21, 20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(10, 3));  // Output: Each person gets 3.33 slices of pizza; from our 10 slice pizza
  

  //interloped strinig is text that is created using the ${} syntax & contains the calculated values 