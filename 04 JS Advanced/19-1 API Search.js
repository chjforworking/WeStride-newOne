//https://api.jikan.moe/v4/anime?q=...&limit=20
const formEle = document.querySelector("#search-form");
formEle.addEventListener("submit", function (e) {
  e.preventDefault();
  const searcher = formEle.elements.searchBox.value;
  animeDetails(searcher);
  formEle.elements.searchBox.value = "";
});

const animeDetails = async (searcher) => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${searcher}&limit=20`
    );
    renderImg(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

const renderImg = (data) => {
  const result = document.querySelector(".searchResult");
  result.innerHTML = "";
  const limitData = data.slice(0, 20);

  for (let item of limitData) {
    if (item.images.jpg.large_image_url) {
      const imgEle = document.createElement("img");
      imgEle.src = item.images.jpg.large_image_url;
      const result = document.querySelector(".searchResult");
      result.append(imgEle);
    }
  }
};

const home = document.querySelector("h1");
home.onclick = () => {
  window.location.href =
    "http://127.0.0.1:5500/04%20JS%20Advanced/19%20API%20Search.html";
};
home.addEventListener("mouseover", () => {
  home.style.cursor = "pointer";
});
