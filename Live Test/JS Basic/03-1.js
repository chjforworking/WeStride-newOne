//หาผลรวมของเลขที่รับมา
//39 -> 3*9 = 27 => 2*7 => 14 => 1*4 => 4

function findNum(num) {
  let result = num.toString();
  while (result.length > 1) {
    result = result
      .split("")
      .reduce((acc, curr) => acc * curr)
      .toString();
  }
  return parseInt(result);
}

console.log(findNum(39));
console.log(findNum(33));
