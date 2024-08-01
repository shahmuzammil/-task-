// Array.every
// it checks the element of array and returns true if all follows the rule else it returns false

var isEven = (no) => {
    return no % 2 === 0;
  };
  console.log(isEven(2));
  console.log(isEven(11));
  
  // Array.every example
  var array = [2, 4, 9, 10];
  var result = array.every(isEven);
  console.log("Result " + result);
  
  var array1 = [5, 10, 20, 100];
  console.log(array1.every((x) => x % 5 === 0));