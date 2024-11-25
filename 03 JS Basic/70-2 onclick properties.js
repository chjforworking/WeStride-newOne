const v2 = document.querySelector('#v2');
// function expression
// v2.onclick = function(){
//     alert('Click v2')
// }

// // function ปกติ
// // function clickMe(){
// //     alert('v2')
// // }
// // v2.onclick = clickMe;

//arrow function
v2.onclick = () => {
    alert('click v2');
}

//hover เอาเม้าส์ไปจ่อแม้งเกิดปฎิกริยาอะไรขึ้น
v2.onmouseenter = () => {
    console.log('Hi');   
}