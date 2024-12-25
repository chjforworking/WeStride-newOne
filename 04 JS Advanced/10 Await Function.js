const changeBgcPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const rainbow = async () => {
  await changeBgcPromise("red", 2000);
  await changeBgcPromise("orange", 2000);
  await changeBgcPromise("yellow", 2000);
  await changeBgcPromise("green", 2000);
  await changeBgcPromise("blue", 2000);
  await changeBgcPromise("indigo", 2000);
  changeBgcPromise("violet", 2000);
};

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

const reqAsync = async () => {
  const res = await fakeReqPromise("book.com/page1");
  console.log(res);
  const res2 = await fakeReqPromise("book.com/page2");
  console.log(res2);
  return "Success";
};

reqAsync().then((data) => {
  console.log("books");
  console.log(data);
});

// async await คือมันรับค่าได้แค่ resolve ไม่สามารถรับ reject ได้
