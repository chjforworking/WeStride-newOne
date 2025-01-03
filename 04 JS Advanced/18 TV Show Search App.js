//https://api.tvmaze.com/search/shows?q=girls
const formEle = document.querySelector("#searchForm");
formEle.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = formEle.elements.query.value;
  getMovieDetails(search);
});

const getMovieDetails = async (search) => {
  try {
    const config = { params: { q: search } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, {
      config,
    });
    renderImg(res.data);
  } catch (err) {
    console.log(err);
  }
};

const renderImg = (data) => {
  for (let item of data) {
    if (item.show.image.medium) {
      const imgEle = document.createElement("img");
      imgEle.src = item.show.image.medium;
      document.body.append(imgEle);
    }
  }
};
