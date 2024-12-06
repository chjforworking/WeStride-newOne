//function เข้ารหัส A -> N , B -> O , C -> P
//14 ตำแหน่ง

let aToZ = ["a","b","c",'d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'];
let ansArr = [];

function decrypt(str){
    let splitStr = str.split("");
    for (const x of splitStr) {
        let inputIndex = aToZ.indexOf(x); //1 2 3 4 5
        let secIndex = (inputIndex - 13 + 26) % 26;
        let value = aToZ[secIndex];
        ansArr.push(value)
    }
    console.log(ansArr.join(","));
}

function createcrypt(str){
    let splitStr = str.split("");
    for (const x of splitStr) {
        let inputIndex = aToZ.indexOf(x); //1 2 3 4 5
        let secIndex = (inputIndex + 13) % 26;
        let value = aToZ[secIndex];
        ansArr.push(value)
    }
    console.log(ansArr.join(","));
}

// decrypt("uryyb")
console.log('/////////');
// createcrypt("hello india")
decrypt("uryybvaqvn")