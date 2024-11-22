let a = ["A","B","C","D","E","F","G","H","I"];
b = a.slice(3,6);
console.log(b);
//slice คือการตัด array เอามาเป็น array ตัวใหม่ โดยไม่กระทบตัวเก่า

c = a.splice(0,3);
console.log(c);