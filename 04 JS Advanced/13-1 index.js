//https://swapi.py4e.com/api/people/1/
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Success");
  const res = JSON.parse(this.responseText);
  console.log(res.name);
};

req.onerror = function () {
  console.log("Fail");
  console.log(this);
};

req.open("GET", "https://swapi.py4e.com/api/people/1/"); //("METHOD","URL OR END POINT")
req.send();
