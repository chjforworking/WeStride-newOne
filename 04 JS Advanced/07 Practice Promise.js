const req = (url) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.7) {
        resolve("Request Success!");
      } else {
        reject("Request Failed!");
      }
    }, 1000);
  });
};

req()
  .then((data) => {
    console.log(`Your data is : ${data}`);
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
