function add1(x,y){
    return x+y
}

//console.log(add1(10)); -> จะขึ้น Error เพราะไม่ใส้ค่า y

//Default Params เพื่อป้องกันการไม่ใส่ param แล้ว error
function add2(a=0,b=0){
    return a+b;
}
console.log(add2(10));

