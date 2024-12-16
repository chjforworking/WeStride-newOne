function findSpace(str) {
  let splitStr = str.split(" "); //เพื่อให้รู้ว่ามีคำกี่คำในประโยค
  let len = splitStr.length; // สร้าง length เพราะ คำมันต้องต่อกันด้วย space
  let result = len - 1; //ก็เลยเอามาลบ 1 
  console.log(`Result is ${result}`);
}

findSpace("Hello World ! ");
