//สร้างโปรแกรมถอดรหัส 5 ลำดับ
/*
1.สร้าง array a-z
2.สร้าง function
3.แยกตัวอักษร
4.หา index ของ input ที่รับเข้ามา
*/

let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let newArr = [];
function decrypt(str){ //str =xvo + 5 ก่อนจะบวกห้าต้องแยกแต่ละตัวก่อน
    let splitStr = str.split("");
    for (const element of splitStr) {
        let inputIndex = arr.indexOf(element);
        let secIndex = inputIndex + 5 ;
        let value = arr[secIndex];
        if(value){
            newArr.push(value)
        }
    }
}

console.log(decrypt("xvt"));
