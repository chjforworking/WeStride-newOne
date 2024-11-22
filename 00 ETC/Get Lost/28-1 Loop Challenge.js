// Exercise 1
let numOne = prompt("จงใส่จำนวนเต็มตัวแรก");
let numTwo = prompt("จงใส่จำนวนเต็มตัวที่สอง");
if (numOne > numTwo) {
  console.log(`${numOne} มีค่ามากกว่า ${numTwo}`);
} else if (numTwo > numOne) {
  console.log(`${numTwo} มีค่ามากกว่า ${numOne}`);
}

//Exercise 2 ถ้า total เป็นตัวอักษร มันจะออกมาเป็น NaN
let one = prompt("จงใส่ตัวเลขแรก");
let two = prompt("จงใส่ตัวเลขที่สอง");
let three = prompt("จงใส่ตัวเลขที่สาม");
let total = one * two * three;
let checker = Number(total);
if(!isNaN(checker)){
    if (total < 0) {
        alert("ผลลัพธ์เป็น - ");
      } else {
        alert("ผลลัพธ์เป็น + ");
      }
} else {
    alert("ระบบผิดพลาด กรุณากรอกเป็นตัวเล็ก")
}

//Exercise 3
let ichi = prompt("จงใส่ตัวเลขที่หนึ่ง");
let ni = prompt("จงใส่ตัวเลขที่สอง");
let san = prompt("จงใส่ตัวเลขที่สาม");
ichi = Number(ichi);
ni = Number(ni);
san = Number(san);
let max , mid , min;

if(ichi >= ni && ichi >= san){
    max = ichi;
} else if (ni >= ichi && ni >= san){
    max = ni;
} else if (san >= ichi && san >= ni){
    max = san;
}

if(ichi <= ni && ichi <= san){
    min = ichi;
}else if (ni <= ichi && ni <= san){
    min = ni;
} else if (san <= ichi && san <= ni){
    min = san;
}
mid = ichi + ni + san - max - min;

// alert(`ลำดับมีดังต่อไปนี้ ${max} > ${mid} > ${min}`)

//Exercis 4
let _num1 = Number(prompt("Enter Number"));
let _num2 = Number(prompt("Enter Number"));
let _num3 = Number(prompt("Enter Number"));
let _num4 = Number(prompt("Enter Number"));
let _num5 = Number(prompt("Enter Number"));
let mathMax =Math.max(_num1,_num2,_num3,_num4,_num5);
alert(mathMax)

// //Exercise 5
for (i = 0; i <= 15; i += 1) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//Exercise 6
for (let x = 1 ; x<= 5 ; x++){
    let row = '';
    for ( let y = 1 ; y <= x ; y++){
        row += '*';
    }
    console.log(row);

}

//Exercise 7
let summ = 0;
for ($num$ = 0; $num$ <= 1000; $num$++) {
  if (($num$ % 3 === 0) || ($num$ % 5 === 0)) {
    summ = summ + $num$;
  }
}
console.log(summ);

//Exercise 8
let $score = { 
    David: 80, 
    Vinoth: 77, 
    Divya: 88, 
    Ishitha: 95, 
    Thomas: 68 
};

let sumScore = 0;
let numOfStudents = 0;
for (let student in $score) {
    let $$$score = $score[student];
    let grade;
    if ($$$score == 100) {
        grade = "Grade A";
      } else if ($$$score >= 90 && $$$score < 100) {
        grade = "Grade B";
      } else if ($$$score >= 80 && $$$score < 90) {
        grade = "Grade C";
      } else if ($$$score >= 70 && $$$score < 80) {
        grade = "Grade D";
      } else if ($$$score >= 60 && $$$score < 70) {
        grade = "Grade F";
      }

  console.log(`Score of ${student} is ${$score[student]} [${grade}]`);
  sumScore += $score[student];
  numOfStudents++;
}
let avg = sumScore / numOfStudents;
console.log(`Average is ${avg}`);
