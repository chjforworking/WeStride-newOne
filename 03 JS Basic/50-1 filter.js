//Filter
const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter((n) => {
  return n % 2 === 1;
});
console.log(odds);

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newOdds = nums1.filter((x) => x % 2 === 0);
console.log(newOdds);
