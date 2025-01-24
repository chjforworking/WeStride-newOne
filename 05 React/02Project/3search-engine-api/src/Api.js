import axios from "axios";

const searchImg = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID qRttEwsEhUErKCCzjWkW04qwV21sjgOz7pA2MPKAaI0",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImg;
