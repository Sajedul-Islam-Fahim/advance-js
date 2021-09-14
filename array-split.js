const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);

const removed = nums.splice(2, 3, 30, 40, 50);
const together = nums.join("ami ");

console.log(together);
console.log(removed);
console.log(part);
console.log(nums);