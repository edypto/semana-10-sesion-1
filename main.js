// function declarion

// function sum(a, b) {
//     return a + b;
//   }



  //funcion por expresion
//   const sum = function(a, b) {
//     return a + b;
//   };





//   function add(a, b) {
//     return a + b;
//   }
  
//   const result = add(3, 5);
//   console.log(result); // Output: 8



//   const sum = (a, b) => a + b;
//   console.log(sum(6,6))



function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function introduceYourself(name) {
    greet(`I am ${name}`);
  }
  
  introduceYourself("Alice"); // Output: Hello, I am Alice!
  




  function numeroPareImpar(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];
  
    for (const number of numbers) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      } else {
        oddNumbers.push(number);
      }
    }
  
    return {
      even: evenNumbers,
      odd: oddNumbers,
    };
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = numeroPareImpar(numbers);
  
  console.log("Even numbers:", result.even);
  console.log("Odd numbers:", result.odd);