import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import Alert from "react-bootstrap/Alert";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    age: 0,
    city: "",
  });

  //   console.log(user);

  useEffect(() => {
    axios
      .get(`https://sparkling-sheath-dress-bear.cyclic.cloud/api/v1/user/${id}`)
      .then((res) => setUser(res.data.usersData))
      .catch((err) => console.log(err));
  }, [id]);

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

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .put(
        `https://sparkling-sheath-dress-bear.cyclic.cloud/api/v1/user/edit/${id}`,
        user
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setUser({
      name: "",
      age: 0,
      city: "",
    });
    alert("User updated successfully");
    navigate("/");
  };

  return (
    <div>
      <h2 className="display-5 text-center">Edit User component</h2>
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
        <Button variant="primary" size="lg" onClick={handleEdit}>
          Edit
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Reset
        </Button>{" "}
      </>
    </div>
  );
};

export default EditUser;
