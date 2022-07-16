import "./index.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Navbar />
      <div className="cont">
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
