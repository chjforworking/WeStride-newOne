const formEle = document.querySelector("#SearchForm");
formEle.addEventListener("submit", function (e) {
    e.preventDefault()
  console.log(formEle);
});

/*
รับตัวแปรเข้า
ใช้ axios ดึงข้อมูลออกมา
โชว์รูป
*/