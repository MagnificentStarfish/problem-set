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


type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length == 0) {
        return init;
    }
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}
