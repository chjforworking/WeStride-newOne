//https://swapi.py4e.com/api/people/1/

fetch("https://swapi.py4e.com/api/people/1/") //Param คือ end point fetch มีการตอบกลับแบบ Promise  และเมื่อมี promise ก็ใช้ then ได้
  .then((res) => {
    console.log("Resolved!"); //ถ้าเขียนถึงตรงนี้จะยังไม่สามารถเข้าถึง response ได้ แบบ XHR
    //res.json().then((data) => console.log(data)); ->ใช้ json แปลง แล้วพอแปลงเป็น json แล้วมันจะ return เป็น promise เราเลยต้องเขียน .then อีกตัว
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.py4e.com/api/people/2/");
  })
  .then((res) => {
    console.log("Resolved 2 !");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Rejected!", err);
  });
