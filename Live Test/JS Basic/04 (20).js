//เขียน function return ค่าตรงกลางของตัวแปร
// cat -> a ; bill -> il

function findCenter(str) {
  let len = str.length;
  let centerChar = Math.floor(len / 2);
  if (str.length % 2 !== 0) {
    console.log(str[centerChar]);
  } else {
    console.log(str.slice(centerChar - 1, centerChar + 1));
  }
}

findCenter("cat");
findCenter("bat");
findCenter("bill");
findCenter("middle");
findCenter("a");
