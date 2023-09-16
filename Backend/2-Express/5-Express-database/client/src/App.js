import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Header from "./components/Header";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
