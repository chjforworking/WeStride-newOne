async function makeReq() {
  try {
    //ppl 1
    const res = await fetch("https://swapi.py4e.com/api/people/1/");
    const data = await res.json();
    console.log(data);
    //ppl 2
    const res2 = await fetch("https://swapi.py4e.com/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (error) {
    console.log("Error!", error);
  }
}

makeReq();
