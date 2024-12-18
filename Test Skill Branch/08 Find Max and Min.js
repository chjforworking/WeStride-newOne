let arr = [];

function findMax(arr) {
  let findMax = Math.max(...arr);
  console.log(`Max = ${findMax}`);
  
}
function findMin(arr) {
  let findMin = Math.min(...arr);
  console.log(`Min = ${findMin}`);
}

findMax([1, 2, 3, 4, 5, 6]);
findMin([1, 2, 3, 4, 5, 6]);
