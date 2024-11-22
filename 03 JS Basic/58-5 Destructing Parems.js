const fullName = ({ first, last }) => {
  return `${first} ${last}`;
};
const runner = {
  first: "James",
  last: "Bec",
  country: "Britain",
};

console.log(fullName(runner));
