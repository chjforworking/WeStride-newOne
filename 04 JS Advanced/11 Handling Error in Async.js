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
  try {
    const res = await fakeReqPromise("book.com/page1");
    console.log(res);
    const res2 = await fakeReqPromise("book.com/page2");
    console.log(res2); 
  } catch (e) {
    console.log("Failure!");
    console.log(`Error : ${e}`);
  }
};

reqAsync()