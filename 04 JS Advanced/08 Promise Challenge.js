const evenOdd = (data) => {
    return new Promise((resolve, reject) => {
      if (typeof data !== "number") {
        reject("Error! Input must be number!");
      } else {
        if (data % 2 !== 0) {
          setTimeout(() => {
            resolve("Odd");
          }, 1000);
        } else {
          setTimeout(() => {
            resolve("Even");
          }, 2000);
        }
      }
    });
  };
  
  evenOdd(8) //ใส่ Number ที่ต้องการค้นหาตรงนี้
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });