//function เข้ารหัส A -> N , B -> O , C -> P

let aToZ = ["a","b","c",'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function decode(str){
    let splitStr = str.split('');
    for (const x of splitStr) {
        let inputIndex = aToZ.indexOf(x) ;//1,2,3
        let nextIndex = inputIndex + 5;
        let ansValue = aToZ[nextIndex];
        if(){
            
        }
    }
}




console.log(decode("xvo"));

//decode(str)