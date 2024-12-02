//หาช่องว่าง
function findSpace(str){
    let splitStr = str.split(" ");
    let len = splitStr.length;
    let result = len-1;
    console.log(`Result : ${result}`);
    
}

findSpace("Hello World ! ")