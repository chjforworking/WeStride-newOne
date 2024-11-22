const farm ={
    name : 'Farm Chokchai',
    cowCount : 0,
    cowsIntoEnclosure(cowCount){
        return function(){
            this.cowCount+= 1;
             console.log("Mow Mow");
        }
    }
}

console.log(farm.cowsIntoEnclosure);
