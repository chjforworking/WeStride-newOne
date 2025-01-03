//https://swapi.py4e.com/api/people/1/
// axios
//   .get("https://swapi.py4e.com/api/people/1/")
//   .then((res) => {
//     console.log("Success", res);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

const makeAxiousReq = async (id) => {
  try {
    const res1 = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
    console.log("Success1 : ", res1.data.name);
    // const res2 = await axios.get("https://swapi.py4e.com/api/people/2/");
    // console.log("Success2 : ", res2.data.name);
    // const res3 = await axios.get("https://swapi.py4e.com/api/people/3/");
    // console.log("Success3 : ", res3.data.name);
  } catch (err) {
    console.log("Error", err);
  }
};

makeAxiousReq(30);
