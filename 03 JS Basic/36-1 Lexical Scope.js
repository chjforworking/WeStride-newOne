function getName() {
    let nameList = ["Alex","Joe","Anne"]
    function inner(){
        for (let i = 0; i < nameList.length; i++){
            console.log(`Hi ${nameList[i]}`);            
        }
    }
    inner(); //เรียกตัว function inner มาใช้งาน
}

getName();