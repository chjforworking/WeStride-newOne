//index + 5 = result

let aToZ = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z",];
let newArr = [];

function decrypt(str){
    let splitStr = str.split("");
    for (const x of splitStr) {
        let inputIndex = aToZ.indexOf(x);
        let decryptProcess = (inputIndex+5)%26
        let result = aToZ[decryptProcess];
        newArr.push(result)
    }
    return newArr
}

console.log(decrypt("xvo"));

