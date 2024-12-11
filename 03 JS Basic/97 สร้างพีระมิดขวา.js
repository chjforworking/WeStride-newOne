function pyramid(input){
    for(let i = 1 ; i <= input ; i++){
        const space = input - i;
        const Lspace = ' '.repeat(space);
        const star = '*'.repeat(i);
        console.log(Lspace + star); 
    }
}

pyramid(5);