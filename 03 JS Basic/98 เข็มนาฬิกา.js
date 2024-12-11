function timeWithDegree(hour, minute) {
  let hourDegree = (hour * 30) + (minute/2);
  let minuteDegree = minute * 6;

  if(hourDegree > minuteDegree){
    let result = 360 - hourDegree - minuteDegree;
    return result;
  } else if (minuteDegree > hourDegree){
    let result = minuteDegree - hourDegree;
    return result;
  }
}
console.log(timeWithDegree(9,0));
console.log(timeWithDegree(5, 30));
console.log(timeWithDegree(5,45));

//2นาที ได้ 1องศา
//1นาที ได้ 0.5องศา