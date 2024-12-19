const fakeReqCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeReqCallback(
  "book.com/homepage",
  (data) => {
    console.log("Success");
    console.log(data);
    fakeReqCallback(
      "book.com/page1",
      (data1) => {
        console.log("Still Good Page 1");
        console.log(data1);
        fakeReqCallback("book.com/page2", (data2) => {
          console.log("Still Good Page 2");
          console.log(data2);
        });
        (err2) => {
          console.log("Error! Page 2");
          console.log(err2);
        };
      },
      (err1) => {
        console.log("Error! Page 1");
        console.log(err1);
      }
    );
  },
  (err) => {
    console.log("Failure");
    console.log(err);
  }
);
