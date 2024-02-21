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
