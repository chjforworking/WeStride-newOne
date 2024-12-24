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

//   const res = fakeReqPromise("book.com");
//   res
//     .then(function () {
//       console.log("Success(P1)");
//       fakeReqPromise("book.com/P2")
//         .then(function () {
//           console.log("Success(P2)");
//         })
//         .catch(function () {
//           console.log("Failure (P2)");
//         });
//     })
//     .catch(function () {
//       console.log("Failure");
//     });

fakeReqPromise("books.com/page1")
  .then((data) => {
    console.log("Success Page1");
    console.log(data);
    return fakeReqPromise("books.com/page2");
  })
  .then((data) => {
    console.log("Success Page2");
    console.log(data);
    return fakeReqPromise("books.com/page3");
  })
  .then((data) => {
    console.log("Success Page3");
    console.log(data);
    return fakeReqPromise("books.com/page4");
  })
  .catch((data) => {
    console.log("Failure");
    console.log(data);
  });
