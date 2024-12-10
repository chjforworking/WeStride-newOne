//สร้างรหัส เปลี่ยนทุกสระ ตามด้วยตัว p แล้วค่อยตามด้วยสระนั้นอีกครั้ง
//เช่น kemija -> kepemipijapa

function creCrypt(str){
    const vowels = 'aeiouAEIOU';
    let result = '';
    for(let i = 0 ; i < str.length; i++){
        if(vowels.includes(str[i])){
            result += str[i] + 'p' + str[i];
        }
        else {
            result += str[i];
        }
    }
    return result;
}

console.log(creCrypt('Kemija'));
console.log(creCrypt('Hello World'));