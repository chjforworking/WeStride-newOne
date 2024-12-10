/*
1. แบตเริ่ม 89% ใน 1 ครั้ง วางไว้เฉยๆ 03 นาที โทรออก 1 นาที ตอนวางไว้เฉยๆ 1 นาทีกินแบต 0.2%  ถ้าโทรออกลดลง 5 เท่า
2. แบตเริ่ม 49% ใน 1 ครั้ง วางไว้เฉยๆ 05 นาที โทรออก 1 นาที ตอนวางไว้เฉยๆ 1 นาทีกินแบต 0.4%  ถ้าโทรออกลดลง 2 เท่า
3. แบตเริ่ม 78% ใน 1 ครั้ง วางไว้เฉยๆ 02 นาที โทรออก 1 นาที ตอนวางไว้เฉยๆ 1 นาทีกินแบต 0.5%  ถ้าโทรออกลดลง 3 เท่า
4. แบตเริ่ม 19% ใน 1 ครั้ง วางไว้เฉยๆ 20 นาที โทรออก 1 นาที ตอนวางไว้เฉยๆ 1 นาทีกินแบต 0.1%  ถ้าโทรออกลดลง 1 เท่า
5. แบตเริ่ม 99% ใน 1 ครั้ง วางไว้เฉยๆ 05 นาที โทรออก 1 นาที ตอนวางไว้เฉยๆ 1 นาทีกินแบต 1%  ถ้าโทรออกลดลง 2 เท่า
6. แบตเริ่ม 100% ใน 1 ครั้ง วางไว้เฉยๆ 7 นาที โทรออก 1 นาที ตอนวางไว้เฉยๆ 1 นาทีกินแบต 1%  ถ้าโทรออกลดลง 3 เท่า
ให้หาว่าเครื่องไหนจะอยู่นานสุดและเครื่องไหนจะหมดก่อน
*/

let startBattery = 89;
let leaveAlo = 3;
let call = 1;
let battCons = 0.2;
let callMulti = 5;

function batteryCalculator(startBattery, leaveAlo, call, battCons, callMulti) {
  //หานาที
  // let minPerDay = 24*60;
  //เทียบ 1 ชม. % การใช้เป็นยังไง
  let comsumpPerHr = 60 / (leaveAlo + call);
  let seperateLeave = comsumpPerHr * leaveAlo;
  let seperateCall = comsumpPerHr * call;
  let leaveAloConsump = seperateLeave * battCons;
  let callComsump = seperateCall * (battCons * callMulti);
  let totalPerHr = leaveAloConsump + callComsump;
  let batteryLife = startBattery / totalPerHr;
  return batteryLife;
  // let hours = Math.floor(batteryLife);
  // let minutes = Math.round((batteryLife - hours) * 60);
  // return `สามารถใช้งานได้ถึง ${hours} ชั่วโมง ${minutes} นาที`
}

// console.log(batteryCalculator(89, 3, 1, 0.2, 5));
// console.log(batteryCalculator(49, 5, 1, 0.4, 2));
// console.log(batteryCalculator(78, 2, 1, 0.5, 3));
// console.log(batteryCalculator(19, 20, 1, 0.1, 1));
// console.log(batteryCalculator(99, 5, 1, 1, 2));
// console.log(batteryCalculator(100, 7, 1, 1, 3));

let resultArr = [];
resultArr.push(batteryCalculator(89, 3, 1, 0.2, 5));
resultArr.push(batteryCalculator(49, 5, 1, 0.4, 2));
resultArr.push(batteryCalculator(78, 2, 1, 0.5, 3));
resultArr.push(batteryCalculator(19, 20, 1, 0.1, 1));
resultArr.push(batteryCalculator(99, 5, 1, 1, 2));
resultArr.push(batteryCalculator(100, 7, 1, 1, 3));

let max = Math.max(...resultArr);
console.log(max);
let min = Math.min(...resultArr);
console.log(min);
