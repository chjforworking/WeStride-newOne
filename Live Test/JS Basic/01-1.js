//ลบเครื่องหมาย ! ออกจากท้ายของ string
function remove(str) {
  if (str.length > 0 && str.charAt(str.length-1)==='!') {
    console.log(str.slice(0, -1));
  } else {
    console.log(str);
  }
}

remove("Hi!");
remove("Hi!!!");
remove("!Hi");
remove("Hi! Hi!");
remove("Hi");
