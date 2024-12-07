const arr = [2,4,6,8,1,0,8];

function maxMin(arr){
    let maxNum = Math.max(...arr);
    console.log(`Max : ${maxNum}`);
    let minNum = Math.min(...arr);
    console.log(`Min : ${minNum}`);
    
}

maxMin(arr)
