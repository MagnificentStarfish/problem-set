// function isPalindrome(x) {
//     let strX = x.toString().toLowerCase();
//     let reversedStrX = strX.split('').reverse().join('');
//     if (strX === reversedStrX) {
//       return 'true';
//     } else {
//       return 'false';
//     }
//   }
// const result = isPalindrome("RAceCArt");
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


// function findUniq(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   if (sortedArr[0] !== sortedArr[1]) {
//     console.log(sortedArr[0]);
//     return sortedArr[0];
//   }
//   else {
//     console.log(sortedArr[sortedArr.length - 1]);
//     return sortedArr[sortedArr.length - 1];
//   }
// }


// let arr = [1,1,1,1,2,1,1,1];
// findUniq(arr)


// function arrayDiff(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (b[j] === a[i]) {
//         a.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   console.log(a);
//   return a;
// }

// let a = [1,2];
// let b = [2];
// arrayDiff(a, b)


// function arrayDiff(a, b) {
//   let result = a.filter(item => !b.includes(item));
//   console.log(result);
//   return result;
// }


// // let a = [1,2];
// // let b = [2];
// // arrayDiff(a, b)



// function diamond(n) {
//   if (n % 2 === 0 || n <= 0) {
//     return null;
//   }
//   let result = '';
//   for (let i = 1; i <= n; i += 2) {
//     const spaces = ' '.repeat((n - i) / 2);
//     const stars = '*'.repeat(i);
//     result += spaces + stars + '\n';
//   }
//   for (let i = n - 2; i >= 1; i -= 2) {
//     const spaces = ' '.repeat((n - i) / 2);
//     const stars = '*'.repeat(i);
//     result += spaces + stars + '\n';
//   }
//   console.log(result);
//   return result;
// }

// let n = 7;
// diamond(n)


// function tribonacci(signature, n) {
//   if (n === 0) {
//     return [];
//   }
//   while (signature.length < n) {
//     const nextNumber = signature.slice(-3).reduce((sum, num) => sum + num, 0);
//     signature.push(nextNumber);
//   }
//   let result = signature.slice(0, n);
//   console.log(result);
//   return result;
// }


// let signature = [1,1,1];
// let n = 10;
// tribonacci(signature, n)


// function multiTable(number) {
//   let table = '';

//   for (let i = 1; i <= 10; i++) {
//     const product = i * number;
//     table += `${i} * ${number} = ${product}\n`;
//   }
//   console.log(table);
//   return table.trim(); // .trim() removes the leading and trailing white space
// } //  Only works with the trim method, but it looks some on the terminal

// let number = 5;
// multiTable(number)


// helloWorld = function() {
//   let str = "Hello World!";
//   console.log( str );
// }

// helloWorld()


// function encrypt(text, n) {
//   if (text === "" || n <= 0) {
//     return text;
//   }
//   let counter = n;
//   while (counter > 0) {
//  let newText = '';
//   for (let i=1;i<text.length;i+=2){
//     newText += text[i];
//   }
//   for (let i=0;i<text.length;i+=2) {
//     newText += text[i];
//   }
//   text=newText;
//   counter -=1;
//   console.log(newText);
// }
//   return text;
// }

// let text = "012345";
// let n = 3;

// encrypt(text, n)


// function decrypt(encryptedText, n) {
//   if (encryptedText === "" || n <= 0) {
//     return encryptedText;
//   }
//   for (let i=0; i<n; i++){
//     let newText = "";

//   const mid = Math.ceil(encryptedText.length / 2);
//     const oddChars = encryptedText.slice(0, mid);
//     const evenChars = encryptedText.slice(mid);

//     for (let j=0; j<evenChars.length; j++) {
//       newText += evenChars[j] + oddChars[j];
//     }

//     if (oddChars.length > evenChars.length) {
//       newText += oddChars.slice(-1);
//     }
//     encryptedText = newText;
//   }
//   console.log(encryptedText);
//   return encryptedText;
// }

// let encryptedText = "13024";
// let n = 2;

// decrypt(encryptedText, n)


// function queueTime(customers, n) {
//   console.log("queueTime function is being executed.");

//   try {
//     if (!customers || customers.length === 0) {
//       console.log("No customers in the queue.");
//       return 0;
//     }

//     if (n <= 0) {
//       console.log("Invalid number of tills.");
//       return "Invalid number of tills.";
//     }

//     if (n === 1) {
//       const total = customers.reduce((sum, time) => sum + time, 0);
//       console.log("Total time for one till:", total);
//       return total;
//     } else {
//       const tills = Array(n).fill(0);
//       for (const time of customers) {
//         const minTill = tills.indexOf(Math.min(...tills));
//         tills[minTill] += time;
//       }

//       const result = tills.reduce((sum, time) => sum + time, 0);
//       console.log("Total time for all tills:", result);
//       return result;
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     return "An error occurred.";
//   }
// }

// let customers = [2];
// let n = -1;

// queueTime(customers, n);


// function foo() {
//   return bar();
//   function bar() {
//   return 5;
//   }
//   function bar() {
//   return 10;
//   }
//   }
//   console.log(foo());

//   foo()


// var isAnagram = function(test, original) {
//   let sortedTest = test.toLowerCase().split('').sort();
//   // If you do test.toLowerCase().split('').sort().join('');
//   // Then you can just compare sortedtest === sortedOriginal and not JSON.stringify it
//   let sortedOriginal = original.toLowerCase().split('').sort();
//   if (JSON.stringify(sortedTest) === JSON.stringify(sortedOriginal)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };


// let test = 'bucket';
// let original = 'tuckeb';

// let result = isAnagram(test, original);
// console.log(result)



// function XO(str) {
//   let xCounter = 0;
// let oCounter = 0;
// let splitString = str.toLowerCase().split('');
// for (let i=0; i<splitString.length; i++) {
//   if (splitString[i] === "o") {
//     oCounter++;
//   }
//  if (splitString[i] === "x") {
//    xCounter++;
//  }
// }
// return xCounter === oCounter;
// }


// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }


// let str = 'xoxoXxoOortersdft'
// console.log(XO(str));


// var uniqueInOrder = function(iterable) {
//   if (!iterable) {
//     return [];
//   }
//   const str = typeof iterable === 'string' ? iterable : String(iterable);
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) {
//       result.push(str[i]);
//     }
//   }
//   console.log(result);
//   return result;
// }


// let iterable = [1,2,2,3,4,4,4,5]
// uniqueInOrder(iterable)



// function comp(array1, array2){
//     if (!array1 || !array2 || array1.length !== array2.length) {
//       return false;
//     }
//     let squaredArray = [];

//     for (let i=0; i<array1.length; i++) {
//       squaredArray.push(array1[i] ** 2)
//     }

//     let sorted1 = squaredArray.sort((a,b) => a-b);
//     let sorted2 = array2.sort((a,b) => a-b);

//     for (let i=0; i<sorted1.length; i++) {
//       if (sorted1[i] !== sorted2[i]) {
//         return false;
//       }
//       }
//         return true;
//       }


// let array1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(array1, array2)



// function printerError(s) {
//     let errorList = "abcdefghijklm";
//   let newList = s.split('');
//   let errorCount = 0;
//   for (let i=0; i<newList.length; i++) {
//     if (!errorList.includes(newList[i])) {
    //       errorCount ++;
    //     }
//   }
//   console.log(errorCount + '/' + s.length);
//   return errorCount + '/' + s.length;
// }

// let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
// printerError(s)


// function getPINs(observed) {
//     const adjacentDigits = {
//       '0': ['0', '8'],
//       '1': ['1', '2', '4'],
//       '2': ['1', '2', '3', '5'],
//       '3': ['2', '3', '6'],
//       '4': ['1', '4', '5', '7'],
//       '5': ['2', '4', '5', '6', '8'],
//       '6': ['3', '5', '6', '9'],
//       '7': ['4', '7', '8'],
//       '8': ['5', '7', '8', '9', '0'],
//       '9': ['6', '8', '9'],
//     };

  //   const combos = [''];

  //   for (let i = 0; i < observed.length; i++) {
  //     const digit = observed[i];
  //     const adjacent = adjacentDigits[digit];

  //     const newCombos = [];

  //     for (const combo of combos) {
  //       for (const adj of adjacent) {
  //         newCombos.push(combo + adj);
  //       }
  //     }

  //     combos.length = 0;
  //     combos.push(...newCombos);
  //   }
  // console.log(combos)
  //   return combos;
  // }


  // let observed = "369"
  // getPINs(observed)



//   function twoSort(s) {
//      let sortedWords = s.sort();
//      let firstWord = sortedWords[0];
//      let result = ''
//      for (let i=0; i<firstWord.length-1; i++) {
//        result += firstWord[i] + '***'
//      }
//      result += firstWord[firstWord.length-1];
//    console.log(result);
//      return result
//    }
// let s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
//   twoSort(s)


//   function twoHighest(arr) {
//     if (arr.length === 0) {
//       return [];
//     }
//     if (arr.length === 1) {
//       return arr;
//     }
//     let newList = [];
//     let sortedList = arr.sort((a, b) => b - a);

//     console.log(sortedList);

//     newList.push(sortedList[0]);

//     for (let i = 1; i < sortedList.length; i++) {
//       if (sortedList[i] === sortedList[0]) {
//         continue;
//       } else {
//         newList.push(sortedList[i]);
//       }
//     }

//     console.log(newList);
//     return newList.slice(0, 2);
//   }

//   let arr = [1, 2, 2];
//   twoHighest(arr)


function charConcat(string) {
  if (!string || string.length === 0) {
    return null;
  }

  let count = 1;
  let result = '';

  const middle = Math.floor(string.length / 2);

  for (let i = 0; i < middle; i++) {
    result += string[i] + string[string.length - 1 - i] + count;
    count++;
  }
  console.log(result);
  return result;
}

let string = 'abcdef';
charConcat(string)
