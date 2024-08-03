// function majorityElement(nums: number[]): number | undefined {
//     let counter: { [key: number]: number } = {};
//     let target = nums.length / 2;
//     let result: number | undefined;

//     for (let i = 0; i < nums.length; i++) {
//         if (!counter[nums[i]]) {
//             counter[nums[i]] = 1;
//         } else {
//             counter[nums[i]]++;
//         }

//         if (counter[nums[i]] > target) {
//             result = nums[i];
//             break;
//         }
//     }

//     return result;
// };

// console.log(majorityElement([3, 2, 3])); // 3


// function createCounter(n: number): () => number {
//     return function(): number {
//         return n++;
//     }
// }

// let counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function sleep(millis: number): Promise<void> {
//     return new Promise<void>(resolve => setTimeout(resolve, millis));
// }

// sleep(1000).then(() => console.log('Slept for 1 second'));
// sleep(2000).then(() => console.log('Slept for 2 seconds'));



// declare global { // This is global scope and allows me to add a method to the Array prototype
//     interface Array<T> { // This is discouraged because it's modifying the global scope
//         last(): T | -1; // This is a method that returns the last element of the array or -1 if the array is empty
//     }
// }

// Array.prototype.last = function() {
//     if (this.length > 0) {
//         return this[this.length - 1];
//     } else {
//         return -1;
//     }
// }

// export {}; // This is to avoid the error "Cannot redeclare block-scoped variable 'Array'." because I'm redeclaring the Array interface

// console.log([1, 2, 3].last()); // 3


// type Fn = (accum: number, curr: number) => number

// function reduce(nums: number[], fn: Fn, init: number): number {
//     if (nums.length == 0) {
//         return init;
//     }
//     let val = init;
//     for (let i = 0; i < nums.length; i++) {
//         val = fn(val, nums[i]);
//     }
//     console.log(val);
//     return val;
// }

// reduce([1, 2, 3, 4, 5], (accum, curr) => accum + curr, 0); // 15
// reduce([1, 2, 3, 5, 19], (accum, curr) => accum * curr, 1); // 570


// type Fn = (n: number, i: number) => any

// function filter(arr: number[], fn: Fn): number[] {
//     let result = [];
//     for (let i=0; i<arr.length; i++) {
//         let fnResult: any = fn(arr[i], i);
//         if ((typeof fnResult === 'boolean' && fnResult) || (typeof fnResult === 'number' && fnResult !== 0)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// };


// console.log(filter([1, 2, 3, 4, 5], (n, i) => n % 2 === 0)); // [2, 4]


// type ToBeOrNotToBe = {
//     toBe: (val: any) => boolean;
//     notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//     return {
//         toBe: (otherVal: any) => {
//             if (otherVal === val) {
//                 return true;
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: (otherVal: any) => {
//             if (otherVal !== val) {
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             }
//         }
//     };
// };

// expect(1).toBe(1); // true
// expect(1).notToBe(2); // true
// try {
//     expect(1).toBe(2); // This will throw an error
// } catch (error) {
//     console.error(error.message); // This will log "Not Equal"
// }
// try {
//     expect(1).notToBe(1); // This will throw an error
// } catch (error) {
//     console.error(error.message); // This will log "Equal"
// }


// type ToBeOrNotToBe = {
//     toBe: (expected: any) => boolean;
//     notToBe: (unexpected: any) => boolean;
// };

// function expect(actual: any): ToBeOrNotToBe {
//     return {
//         toBe: (expected: any) => {
//             if (expected === actual) {
//                 console.log ("true");
//                 return true;
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: (unexpected: any) => {
//             if (unexpected !== actual) {
//                 console.log("true");
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             }
//         }
//     };
// };

// expect(1).toBe(1); // true
// expect(1).notToBe(2); // true


// type Counter = {
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }

// function createCounter(init: number): Counter {
//     let count = init;
//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         reset: () => count = init
//     };
// };

// let counter = createCounter(10);
// console.log(counter.increment()); // 11
// console.log(counter.increment()); // 12


// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//     let result: number[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         let temp = fn(arr[i], i);
//         result.push(temp);
//     }
//     return result;
// };

// console.log(map([1, 2, 3, 4, 5], (n, i) => n * 2)); // [2, 4, 6, 8, 10]
// console.log(map([1, 2, 3, 4, 5], (n, i) => n + 2)); // [3, 4, 5, 6, 7]


// type F = (x: number) => number;

// function compose(functions: F[]): F {
//     return (x: number) => {
//         let result = x;
//         for (let i = functions.length - 1; i >= 0; i--) {
//             result = functions[i](result);
//         }
//         return result;
//     };
// };

// let addTwo = (x: number) => x + 2;
// let multiplyByThree = (x: number) => x * 3;
// let addTwoThenMultiplyByThree = compose([addTwo, multiplyByThree]);
// console.log(addTwoThenMultiplyByThree(5)); // 21
// console.log(addTwoThenMultiplyByThree(10)); // 36


// function twoSum(nums: number[], target: number): number[] | undefined{
//     for (let i=0; i<nums.length; i++) {
//         for (let j = i + 1; j<nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]


// function isPalindrome(x: number): boolean {
//     let numString = x.toString();
//     let splitString = numString.split('').reverse().join('');
//     return numString === splitString;
// };

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false
// console.log(isPalindrome(-101)); // false


// function threeSum(nums: number[]): number[][] {
//     nums.sort((a, b) => a - b);
//     let result: number[][] = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let j = i + 1;
//         let k = nums.length - 1;
//         while (j < k) {
//             let sum = nums[i] + nums[j] + nums[k];
//             if (sum === 0) {
//                 result.push([nums[i], nums[j], nums[k]]);
//                 while (nums[j] === nums[j + 1]) j++;
//                 while (nums[k] === nums[k - 1]) k--;
//                 j++;
//                 k--;
//             } else if (sum < 0) {
//                 j++;
//             } else {
//                 k--;
//             }
//         }
//     }
//     return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([])); // []
// console.log(threeSum([0])); // []
// console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//     let result = Array(candies.length).fill(false);
//     let maxCandies = Math.max(...candies);
//     for (let i=0; i<candies.length; i++) {
//         if (candies[i] + extraCandies >= maxCandies) {
//             result[i] = true;
//         }
//     }
//     return result;
// };


// console.log(kidsWithCandies([1,4,4,6,6,5,3], 4)); // [true, true, true, true, true, true, false]
// console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true, true, true, false, true]

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//     let result: boolean[] = [];
//     for (let i = 0; i < candies.length; i++) {
//         result[i] = false;
//     }
//     let maxCandies = Math.max(...candies);
//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] + extraCandies >= maxCandies) {
//             result[i] = true;
//         }
//     }
//     return result;
// }

// console.log(kidsWithCandies([1,4,4,6,6,5,3], 4)); // [true, true, true, true, true, true, false]
// console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true, true, true, false, true]


// function reverseVowels(s: string): string {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

//     const chars = s.split('');

//     let left = 0, right = chars.length - 1;

//     while (left < right) {
//         if (vowels.has(chars[left]) && vowels.has(chars[right])) {
//             [chars[left], chars[right]] = [chars[right], chars[left]];
//             left++;
//             right--;
//         } else if (vowels.has(chars[left])) {
//             right--;
//         } else {
//             left++;
//         }
//     }

//     return chars.join('');
// }

// console.log(reverseVowels('hello')); // 'holle'
// console.log(reverseVowels('leetcode')); // 'leotcede'


// function reverseVowels(s: string): string {
//     let vowels = [];
//     let result = '';

//     for (let i = 0; i < s.length; i++) {
//         if ('aeiouAEIOU'.includes(s[i])) {
//             vowels.push(s[i]);
//         }
//     }

//     vowels.reverse();

//     for (let i = 0; i < s.length; i++) {
//         if ('aeiouAEIOU'.includes(s[i])) {
//             result += vowels.shift();
//         } else {
//             result += s[i];
//         }
//     }

//     return result;
// }

// console.log(reverseVowels('hello')); // 'holle'
// console.log(reverseVowels('leetcode')); // 'leotcede'


// function reverseWords(s: string): string {
//     let result: string = '';
//     let splitString = s.split(' ');

//     console.log(splitString);

//     let reversedString = splitString.reverse().join( ' ');

//     console.log(reversedString);
//     return reversedString;
// };

// //     for (let i=0; i<reversedString.length; i++) {
// //         result += reversedString[i] + ' ';
// //     }
// //     console.log(result);
// //     return result;
// // };

// reverseWords ('the sky is blue'); // 'blue is sky the'


// function fizzBuzz(n: number): (string | number)[] {
// 	const result: (string | number)[] = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			result.push('fizzbuzz');
// 		} else if (i % 3 === 0) {
// 			result.push('fizz');
// 		} else if (i % 5 === 0) {
// 			result.push('buzz');
// 		} else {
// 			result.push(i);
// 		}
// 	}
//     console.log(result);
// 	return result;
// }

// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(7));


// function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
//     const INF = Number.MAX_SAFE_INTEGER;
//     const n = source.length;

//     const minCost: number[][] = Array.from({ length: 26 }, () => Array(26).fill(INF));

//     for (let i = 0; i < original.length; i++) {
//         const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
//         const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
//         minCost[from][to] = Math.min(minCost[from][to], cost[i]);
//     }

//     for (let i = 0; i < 26; i++) {
//         minCost[i][i] = 0;
//     }

//     for (let k = 0; k < 26; k++) {
//         for (let i = 0; i < 26; i++) {
//             for (let j = 0; j < 26; j++) {
//                 if (minCost[i][k] < INF && minCost[k][j] < INF) {
//                     minCost[i][j] = Math.min(minCost[i][j], minCost[i][k] + minCost[k][j]);
//                 }
//             }
//         }
//     }

//     let totalCost = 0;

//     for (let i = 0; i < n; i++) {
//         const from = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
//         const to = target[i].charCodeAt(0) - 'a'.charCodeAt(0);
//         if (minCost[from][to] === INF) {
//             return -1;
//         }
//         totalCost += minCost[from][to];
//     }

//     return totalCost;
// }


// console.log(minimumCost('abc', 'bcd', ['a', 'b', 'c'], ['b', 'c', 'd'], [1, 2, 3])); // 6
// console.log(minimumCost('abc', 'acd', ['a', 'b'], ['c', 'd'], [1, 2])); // -1
// console.log(minimumCost('xyz', 'xyz', [], [], [])); // 0
// console.log(minimumCost('abc', 'bcd', ['a', 'b', 'c'], ['b', 'c', 'd'], [1, 2, 3])); // 6


function canBeEqual(target: number[], arr: number[]): boolean {
    if (target.length !== arr.length) {
        return false;
    }

    let firstArray = target.sort((a, b) => a - b);
    let secondArray = arr.sort((a, b) => a - b);

    for (let i = 0; i < target.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([1, 12], [12, 1])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false
