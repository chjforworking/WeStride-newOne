let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z",];
    let newArr = [];
    
    function decrypt (str){
        let splitStr = str.split("");
        for (const x of splitStr) {
            let inputIndex = arr.indexOf(x);
            let secIndex = (inputIndex+5) % 26;
            let value = arr[secIndex]
            newArr.push(value)
        }
        console.log(newArr.join(""));
    }
    

    function createcrypt(str){
        let splitStr = str.split("");
        for (const x of splitStr) {
            let inputIndex = arr.indexOf(x);
            let secIndex = (inputIndex - 5 + 26) %26;
            let value = arr[secIndex];
            newArr.push(value);
        }
        console.log(newArr.join(""));
    }

    decrypt("xvo")
    createcrypt("cat")