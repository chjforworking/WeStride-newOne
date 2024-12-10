//หาช่องว่าง
function findSpace(str) {
  let splitStr = str.split(" ");
  let len = splitStr.length;
  //จำนวนช่องว่างจะน้อยกว่าคำอยู่ 1 ฉะนั้นจำเป็นต้อง -1
  let result = len - 1;
  console.log(`Result : ${result}`);
}

findSpace("Hello World ! ");