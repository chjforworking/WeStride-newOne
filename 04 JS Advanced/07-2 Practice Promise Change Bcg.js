// const changeBgc = (color,delay,doNext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor = color
//         doNext && doNext()
//     },delay)
// }

const changeBgcPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

changeBgcPromise("red", 1000)
.then(() => changeBgcPromise("green", 1000))
.then(()=> changeBgcPromise("blue",1000))
.then(()=> changeBgcPromise("yellow",1000))
.then(()=> changeBgcPromise("pink",1000))
.then(()=> changeBgcPromise("orange",1000))