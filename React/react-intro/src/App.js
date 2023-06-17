import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
