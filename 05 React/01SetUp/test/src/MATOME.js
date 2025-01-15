/* การ set up index.js
//1) Import React and ReactDom Libraries
import React from "react";
import ReactDOM from "react-dom/client";

//2) get a reference of the div with ID root
const el = document.getElementById("root");

//3) tell React to take control that element
const root = ReactDOM.createRoot(el);

//4) create a component
function App() {
  return <input style={{ border: "2px solid red",borderRadius:"12px"}} />;
}
//5) show 4) component in screen
root.render(<App />);
*/

//1) การพิมพ์ตัวแปร JS ใน JSX
function App() {
  const text = "Hello World";
  return (
    <div>
      <h1>{text}</h1>
      <h2>Testing</h2>
    </div>
  );
}

//2) Shorthand JS
function App() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

//3) รูปแบบของ Component
function App() {
  const msg = "Hello";
  const sum = 1 + 1; //----->ส่วน compute

  return (
    //----->ส่วน show content
    <div>
      <div>Message is: {msg}</div>
      <div>Sum is : {sum}</div>
    </div>
  );
}

//4) Props
function App() {
  const inputType = "number";
  const inputMin = 0;
  const inputMax = 10;
  const inputStyle = { border: "2px solid red", fontSize: "30px" };
  return (
    <input type={inputType} min={inputMin} max={inputMax} style={inputStyle} />
  );
}
//----->ตรงบรรทัด return คิือ Props ย่อมาจาก Propertie;

//5) การแปลง HTML to JSX
function App() {
  //Rule1: Property Name ต้องเป็น camelCase
  return <textarea autoFocus={true} className="test" />;
  //Rule2: ตัวเลขต้องใส่ใน {}
  return <input maxLength={5} />;
  //Rule3: Boolean true ใช้แค่ Property Name , Boolean False ใส่ใน{}
  return <input spellCheck />;
  return <input spellCheck={false} />;
  //Rule4: กำหนด class ด้วย className
  return <div className="test" />;
  //Rule5: พวก style ต้องเขียนใน object
  return <input style={{ border: "2px solid red", borderRadius: "12px" }} />;
}

//6)การแยก Components อันนี้อธิบายยา่ก เน้นไปอ่านในสมุดเอา
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.js";

// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);

// root.render(<App />);

//7)Module Systems
//App.js
function App() {
  return <h1>Hi</h1>;
}

export default App;

const msg = "HELLO";
const welcome = "WELCOME";
export { msg, welcome };
//index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App, { msg, welcome } from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
console.log({ welcome, msg });
