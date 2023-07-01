import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import ReactForm from "./Components/Form";
// import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </Router> */}
      {/* <Users /> */}
      <ReactForm />
    </div>
  );
}

export default App;
