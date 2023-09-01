// function isPalindrome(x) {
//     let strX = x.toString().toLowerCase();
//     let reversedStrX = strX.split('').reverse().join('');
//     if (strX === reversedStrX) {
//       return 'true';
//     } else {
//       return 'false';
//     }
//   }

// const result = isPalindrome("Bob");
// console.log(result);


// function sumOfDifferences(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }
//     var numArray = [arr];
//     numArray.sort(function(a,b) {
//       return a-b;
//     });
//   }
//   console.log(numArray);

//   let arr = [1,4,7,2]
//   sumOfDifferences(arr)


// function sumOfDifferences(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }

//     let sortedArr = arr.sort((a, b) => b - a);
//     let sum = 0;

//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       sum += sortedArr[i] - sortedArr[i + 1];
//     }
//     console.log(sum)
//     return sum;
//   }

//   sumOfDifferences([1, 2, 10])


// function solution(nums){
//     if (!nums || nums.length === 0) {
//         return [];
//     }
//     let sortedNums = nums.sort((a,b) => (a-b));
//     console.log(sortedNums);
//     return sortedNums;
// }

// let nums = [3,1,2];
// solution(nums)


// function greet() {
//     console.log("hello world!");
//     return "hello world!";
//   }

// greet()


// function greet(name) {
//   console.log("Hello "+ name + "!");
// }
// greet("Steve");

// class Fighter {
//   constructor(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//   }
// }


// function declareWinner(fighter1, fighter2, firstAttacker) {
//   while (fighter1.health > 0 && fighter2.health > 0) {
//     if (fighter1.name === firstAttacker) {
//       fighter2.health -= fighter1.damagePerAttack;
//       if (fighter2.health <= 0) {
//         return fighter1.name;
//       }
//       fighter1.health -= fighter2.damagePerAttack;
//       if (fighter1.health <= 0) {
//         return fighter2.name;
//       }
//     } else {
//       fighter1.health -= fighter2.damagePerAttack;
//       if (fighter1.health <= 0) {
//         return fighter2.name;
//       }
//       fighter2.health -= fighter1.damagePerAttack;
//       if (fighter2.health <= 0) {
//         return fighter1.name;
//       }
//     }
//   }
// }


// var capitals = function (word) {
//   let alphaList = [];
// 	let newWord = word.split('');
//   for (let i=0; i<newWord.length; i++) {
//     if (newWord[i] === newWord[i].toUpperCase()) {
//       alphaList.push(i);
//     }
//   }
//   console.log(alphaList)
//   return alphaList
// };

// let result = capitals("CodEWaRs");
// console.log(result);


// var isSquare = function(n){
//   return n >= 0 && Math.sqrt(n) % 1 === 0;
// };

// let result = isSquare(16);
// console.log(result)


// function binToDec (bin) {
//   var intNum = Number(bin);
//   return parseInt(intNum, 2)
// }

// let result = binToDec("101010")
// console.log(result)


// function position(letter){
//   let letterIndex =
//   return `Position of alphabet: ${letterIndex}`
//   }


// function SeriesSum(n) {
//   let total = 0;
//   for (let i = 0; i < n.length; i++) {
//     total += n[i];
//   }
//   let rounded = total.toFixed(2);
//   console.log(rounded);
//   return rounded;
// }

// let n = [1, 2, 3.5];
// SeriesSum(n);



// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   if (enteredCode === correctCode && currentDate <= expirationDate) {
//     console.log(true)
//     return true;
//   }
//   else{
//     console.log(false)
//     return false
//   }
// }

// checkCoupon('123','123','September 5, 2014','October 1, 2014')


// const binaryArrayToNumber = arr => {
//   let result = 0;
//   for (let i=0; i < arr.length; i++) {
//     result = result * 2 + arr[i];
//   }
//   return result
// }

// let test = binaryArrayToNumber([0,1,1,0])
// console.log(test)


// function capitalize(s){
//   const evenList = [];
//   const oddList = [];

//   for (let i=0;i<s.length;i++) {
//     if (i%2===0) {
//       evenList.push(s[i].toUpperCase());
//     }
//     else {
//       evenList.push(s[i]);
//     }
//       if (i%2!==0) {
//         oddList.push(s[i].toUpperCase());
//       }
//       else {
//         oddList.push(s[i])
//       }
//   }
//   console.log(evenList.join(''), oddList.join(''));
//   return [evenList.join(''), oddList.join('')]
// };

// let result = capitalize("testing")
// console.log(result)
// return result


// function sumDigits(number) {
//   let count = 0; // Initialize a variable to keep track of the sum

//   let splitNumber = Math.abs(number).toString(); // Convert the absolute value of the number to a string
//   for (let i = 0; i < splitNumber.length; i++) {
//     let splitNumberDigit = parseInt(splitNumber[i]); // Parse the digit
//     count += splitNumberDigit; // Add the digit to the sum
//   }
//   console.log(count)
//   return count; // Return the final sum
// }

// let number = -52663
// sumDigits(number)



// function noBoringZeros(n) {
//   let reversed = n.toString().split("").reverse();
//   for (let i = 0; i < reversed.length; i++) {
//     if (reversed[i] !== "0") {
//       break;
//     }
//     reversed.splice(i, 1);
//     i--;
//   }
//   let result = parseInt(reversed.reverse().join("")) || 0;
//   console.log(result);
//   return result;
// }


// let n = [1234500];
// noBoringZeros(n)



// function findOdd(A) {
//   let countDict = {};
//   for (let i=0; i<A.length; i++) {
//   if (!(A[i] in countDict)) {
//     countDict[A[i]] = 1;
//   }
//     else {
//       countDict[A[i]]++;
//     }
//     }
//   for (let i=0;i<A.length;i++) {
//     if (countDict[A[i]] % 2 !== 0) {
//       console.log(A[i]);
//       return A[i];
//     }
//   }
// }

// let A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
// findOdd(A)
