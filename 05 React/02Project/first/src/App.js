import ProfileCard from "./ProfileCard";
import alexaImg from "./Images/alexa.png";
import cortanaImg from "./Images/cortana.png";
import siriImg from "./Images/siri.png";

function App() {
  return (
    <div>
      <h1>Personal Digital Assistansts</h1>
      <ProfileCard title={"Alexa"} handle={"@alexa99"} img={alexaImg} />
      <ProfileCard title={"Cortana"} handle={"@cortana26"} img={cortanaImg} />
      <ProfileCard title={"Siri"} handle={"@siri01"} img={siriImg} />
    </div>
  );
}

export default App;
