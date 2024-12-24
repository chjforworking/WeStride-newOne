const fakeReqPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timed Out");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

const res = fakeReqPromise("book.com");
res
  .then(function () {
    console.log("Success(P1)");
    fakeReqPromise("book.com/P2")
      .then(function () {
        console.log("Success(P2)");
      })
      .catch(function () {
        console.log("Failure (P2)");
      });
  })
  .catch(function () {
    console.log("Failure");
  });

//ถ้าเราเรียกใช้งาน .then ต่อจาก promise ตัว .then มันจะรอให้ promise ทำกระบวนการเสร็จก่อน (resolve,reject)
