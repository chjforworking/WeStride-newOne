const input = document.querySelector("#input01");
const span = document.querySelector("#span");
//type change -> จับการเปลี่ยนแปลงเมื่อเรากด Enter
// input.addEventListener("change", function () {
//   console.log(input);
// });

//type input -> จับทุกการเปลี่ยนแปลงขณะเรากำลังพิมพ์เข้าไป
// input.addEventListener("input", function () {
//   console.log(input);
//   span.append(this.value)
// });

//type blur -> จะทำให้เรากด enter ไม่ได้ ต้อง click ข้างนอกกล่องถึงจะถือว่าเป็น enter
//blur ปกติเอาไว้ส่งข้อมูลว่า คุณกรอกรหัสไม่สำเร็จ
input.addEventListener("blur", function () {
  console.log(input);
  span.append(this.value);
});
