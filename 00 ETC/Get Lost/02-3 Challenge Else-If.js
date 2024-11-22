let input = prompt("fill color");
input = input.toLowerCase();
if (input === 'stop') {
  console.log("RED");
} else if (input === 'slow') {
  console.log("YELLOW");
} else if (input === 'go') {
  console.log("GREEN");
} else {
  console.error("ERROR CAN'T CALCULATE");
}
