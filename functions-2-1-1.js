/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

// const maxOfTwoNumbers = (a,b) => {
//   // ADD YOUR CODE HERE
//     if(a>b)
//     return a;
    
//     else 
//      return b;
// };

// console.log(maxOfTwoNumbers(2,3));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
// const maxOfThree = (a,b,c) => {
//   // ADD YOUR CODE HERE
//   if(a>b && a>c){
//     return a;
//    }
//    if(b>a && b>c){
//     return b;
//    }
//    if(c>a && c>b){
//     return c;
//    }


//   }


// console.log(maxOfThree(3,2,8));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
// const isCharacterAVowel = (i) => {

//   // ADD YOUR CODE HERE
//   let arr = ["a","e","i","o","u"];
//   let count=0;
 
//   for(a=0;a<arr.length;a++){
//     if(i.toUpperCase() == arr[a].toUpperCase()){
//     console.log(`${i} is a vowel`);
//     count =1;
//     }
//   }
//     if(count!=1)
//     console.log(`${i} is  not a vowel`)

  
// };
// isCharacterAVowel("E");

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

// sumArray = (arr) => {
//   // ADD YOUR CODE HERE
//   let sum=0;
//   for(i=0;i<arr.length;i++){
//      sum = sum+arr[i];
//   }
//   console.log(sum);
// };
// sumArray([6,2,3,4]);

// multiplyArray =(arr1)=>{
//   let sum1=1;
//   for(i=0;i<arr1.length;i++){
//     sum1 = sum1 * arr1[i];
//  }
//  console.log(sum1);
// };

// multiplyArray([2,3,5,6]);

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
 
//  function func1(a, b, c) {
//   console.log(arguments.length);
// }
// func1(1)
 /*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

//  reverseString = (str) => {
// //   // ADD YOUR CODE HERE
//   const arr = Array.from(str);// converts string to array
//   const arr1 = arr.reverse(); //reverses the array
//   const str1 = arr1.join(""); // converts array to string
//   console.log(str1);
// };
// reverseString("jag testar")
/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
// findLongestWord = (arr) => {
//   // ADD YOUR CODE HERE

//     max = "";
//     for(i=0;i<arr.length;i++){
//       if(arr[i].length>max.length){
//         max=arr[i];
//       }

//     }
//     console.log(max);
//  };

//   findLongestWord(["The","longest","word","counting"])

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
//  filterLongWords = (arr,count) => {
// //   // ADD YOUR CODE HERE
//   let arr1=[];
//       for(i=0;i<arr.length;i++){
//        if(arr[i].length>count){
//         arr1.push(arr[i]);
//        }
//       }
//       console.log(arr1);
//  };
//  filterLongWords(["beautiful","long","there","learning"],5)

/*
9. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
*/
 
    // String.prototype.reverseString = function(str){
   
    //      const arr = Array.from(str);// converts string to array
    //     const arr1 = arr.reverse(); //reverses the array
    //     const str1 = arr1.join(""); // converts array to string
    //     console.log(str1);
    //   };
    //   "Per Scholas".reverseString("jag testar");


/*
10. Write a function that takes a string as argument and returns an object where:
the keys are the characters that occur in the string
the values are the number of occurrences for each letter, regardless of the case*/
     