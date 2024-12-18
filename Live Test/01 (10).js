//ลบเครื่องหมาย ! ออกจากท้ายของ string

function remove(str) {
  let lastIndex = str.lastIndexOf("!");
  if (lastIndex !== -1) {
    console.log(str.slice(0, lastIndex) + str.slice(lastIndex + 1));
  } else {
    console.log(str);
  }
}

remove("Hi!");
remove("Hi!!!");
remove("!Hi");
remove("Hi! Hi!");
remove("Hi");
