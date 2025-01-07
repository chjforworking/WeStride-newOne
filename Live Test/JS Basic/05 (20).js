//"abcd" -> "a-bb-ccc-dddd"
function multiChar(str){
    let result = "";
    for (let i = 0; i < str.length;i++){
        result = result + str[i].repeat(i+1)+'-';
    }
    console.log(result.slice(0,-1));
    
}

multiChar("abcd")