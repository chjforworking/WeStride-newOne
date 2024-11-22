//this ไม่สามารถใช้ร่วมกับ Arrow Function ได้
let name = {
  fName: "Hello",
  lName: "World",
  fullName: () => {
    console.log(`Hi my name is ${this.fName} ${this.lName}`);
  },
};

name.fullName()
//full name ยังหาเจอ
name.lName()
//แต่ lName จะหาไม่เจอเพราะ this มันไม่ได้ ref ถึงอันที่เราใช้งานอยู่