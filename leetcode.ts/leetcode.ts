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


declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    if (this.length > 0) {
        return this[this.length - 1];
    } else {
        return -1;
    }
}
