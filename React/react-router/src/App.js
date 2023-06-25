import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:productID" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
