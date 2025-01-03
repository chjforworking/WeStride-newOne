//https://icanhazdadjoke.com/api

const renderJoke = async () => {
  const jokeStr = await getDadJoke();
  const ulElement = document.querySelector("#joke");
  const liElement = document.createElement("li");
  liElement.append(jokeStr);
  ulElement.append(liElement);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    return res.data.joke;
  } catch (err) {
    console.log("No Joke Available :(");
  }
};

function clearfunc() {
  const ulEle = document.querySelector("#joke");
  ulEle.innerHTML = "";
}

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", renderJoke);

const clearbtn = document.querySelector(".clearbtn");
clearbtn.addEventListener("click", clearfunc);
