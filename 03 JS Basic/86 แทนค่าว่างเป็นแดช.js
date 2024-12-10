//แทนค่า " " เป็น "-"
function replacement(str) {
  //คำสั่ง .replace ใช้เพื่อเปลี่ยนค่าจากสิ่งนึงไปสู่สิ่งนึง
  let replaceFunc = str.replace(" ", "-");
  let result = replaceFunc;
  console.log(result);
}

replacement("Hello World");
