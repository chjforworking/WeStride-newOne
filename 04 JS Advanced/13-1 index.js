//https://swapi.dev/api/people/1/

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Success");
  console.log(this);
};

req.onerror = function () {
  console.log("Fail");
  console.log(this);
};

req.open("GET", "https://swapi.py4e.com/api/people/1/"); //("METHOD","URL OR END POINT")
req.send();
