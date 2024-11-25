const button = document.querySelector(".button");
//เขียนแบบที่ 1
button.addEventListener("click", function () {
  alert("clicked");
});

//เขียนแบบที่ 2
function clicked(){
    alert('clicked')
}
button.addEventListener("click",clicked);

