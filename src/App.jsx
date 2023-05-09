import "./App.css";
import "./componen/Card.jsx";
import Card from "./componen/Card.jsx";
import ListDigimon from "./componen/ListDigimon";
import Navbar from "./componen/Navbar";
import Profile from "./componen/Profile";

function App() {
  return (
    <>
      {/* <Card img="https://digimon.shadowsmith.com/img/koromon.jpg" name="tara" /> */}
      <Navbar />
      <Profile />
      <ListDigimon />
    </>
  );
}

export default App;
