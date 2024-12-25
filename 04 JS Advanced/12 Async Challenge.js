const evenOdd = async (data) => {
  if (typeof data !== "number") throw "Error! Input must be number!";
  if (data % 2 !== 0) {
    return setTimeout(() => {
      console.log("Odd");
    }, 1000);
  } else {
    return setTimeout(() => {
      console.log("Even");
    }, 2000);
  }
};
