import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import alexaImg from "./Images/alexa.png";
import cortanaImg from "./Images/cortana.png";
import siriImg from "./Images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title={"Alexa"}
                handle={"@alexa99"}
                img={alexaImg}
                description={
                  "Alexa was create by Amazon and helps you buy things."
                }
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={"Cortana"}
                handle={"@cortana26"}
                img={cortanaImg}
                description={
                  "Cortana was made by Microsoft. Who knows what it does?"
                }
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={"Siri"}
                handle={"@siri01"}
                img={siriImg}
                description={"Siri was made by Apple and is being pharsed."}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
