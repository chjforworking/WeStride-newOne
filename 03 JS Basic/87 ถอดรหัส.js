//ถอดรหัส ตำแหน่งห่าง 5 ลำดับ
/*

*/
let arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let arrAns = [];

function decrypt(str) {
  //str = xvo+5
  let splitStr = str.split("");
  for (let x of splitStr) {
    if (x != " ") {
      let inputIndex = arr.indexOf(x); //1,2,3,4...
      let nextIndex = inputIndex + 5;
      let nextValue = arr[nextIndex];
      if (nextValue) {
        arrAns.push(nextValue);
      } else {
        let remainLoop = arr.length - 1 - inputIndex;
        let newLoop = 5 - remainLoop;
        let ans = arr[newLoop - 1];
        arrAns.push(ans);
      }
    } else {
      arrAns.push(x);
    }
  }
  let answer = arrAns.join("");
  return answer;
}

//console.log(decrypt("XVO"));
//console.log("/////////////");
console.log(decrypt("HT IVHZ DN W"));
