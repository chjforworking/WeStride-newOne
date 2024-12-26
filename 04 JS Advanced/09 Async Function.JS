//Regular Function Way
// async function test1() {
//     return "Hello"
// }

//Arrow Function Way
// const arrowTest = async() => {
//     return "Hello Again"
// }

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "hello") return "Welcome";
  throw "Invalid Password";
};

login('test','hello')
  .then((data) => {
    console.log("Success", data);
  })
  .catch((error) => {
    console.log("Fail", error);
  });
