function majorityElement(nums: number[]): number {
    let counter: { [key: number]: number } = {};
    let target = nums.length / 2;
    let result: number;

    for (let i = 0; i < nums.length; i++) {
        if (!counter[nums[i]]) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]]++;
        }

        if (counter[nums[i]] > target) {
            result = nums[i];
            break;
        }
    }

    return result;
};


function majorityElement(nums: number[]): number {
    let counter = {};
    for (let i=0; i<nums.length; i++) {
        if (!counter.nums[i]) {
            counter.nums[i] = 1;
        }
        if (counter.nums[i]) {
            counter.nums[i]++;
        }
    }
    let target = ((nums.length) / 2);
    if (counter.nums[i]== target) {
        let result = counter.nums[i];
    }
    return result;
};

test line
another test line
