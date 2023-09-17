import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Alert from "react-bootstrap/Alert";

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    age: 0,
    city: "",
  });

  //   console.log(user);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post(
        "https://sparkling-sheath-dress-bear.cyclic.cloud/api/v1/create",
        user
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setUser({
      name: "",
      age: 0,
      city: "",
    });
    alert("User Created successfully");
    navigate("/");
  };

  return (
    <div>
      <h2 className="display-5 text-center">Create User component</h2>
      <>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Enter age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="City" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button variant="primary" size="lg" onClick={handleCreate}>
          Create
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Reset
        </Button>{" "}
      </>
    </div>
  );
};

export default CreateUser;
