const fakeReqPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor() * 4500 + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timed Out");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};
