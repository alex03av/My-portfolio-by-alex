import Nav from "./Components/Nav";
import ABOUT from "./Components/ABOUT";
import PROJECTS from "./Components/PROJECTS";
import Footer from "./Components/Footer";
import "./App.css";
import "./index.css";
import "./media .css";

function App() {
  return (
    <div className="App">
      <Nav />
      <ABOUT />
      <PROJECTS />
      <Footer />
    </div>
  );
}

export default App;
