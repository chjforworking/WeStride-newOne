//เอา input ไปหาร 3 และ 11 ได้เศษเท่าไรโดยห้ามใช้ modulo
// 18 -> 0กับ7 , 167 -> 2กับ1

function calculate(x){
    if(x/3 == 0){
       console.log(0);
    }else if (x/3 != 0){
        let remain = x/3
    }
}


// function calculate(x){
//     let dThree = x/3;
//     let realValue = dThree;
//     let quotientOne = Math.floor(realValue);
//     let remainOne = realValue - quotientOne;

//     let dEle = x/11;
//     let realValueEle = dEle;
//     let quotientTwo = Math.floor(realValueEle);
//     let remainTwo = realValueEle - quotientTwo;

//     console.log(remainOne);
//     console.log(remainTwo);
// }

// calculate(18);
// calculate(167);