import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FileBase64 from "react-file-base64";
import { useState } from "react";
const ReactForm = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
    gender: "",
    city: "",
    state: "",
    pincode: "",
    options: [],
    uploadFile: "",
  });

  const handleForm = (e) => {
    // console.log(e.target);
    if (e.target.type === "checkbox") {
      let data = formFields.options;
      data.push(e.target.value);
      setFormFields((prev) => {
        return {
          ...prev,
          options: data,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormFields((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };
  return (
    <div>
      <Container>
        <h2>Registration Form</h2>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formFields.username}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formFields.password}
                onChange={handleForm}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formFields.email}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Enter address details"
                name="address"
                value={formFields.address}
                onChange={handleForm}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Check
                name="gender"
                type="radio"
                label="Male"
                value="Male"
                onChange={handleForm}
              />
              <Form.Check
                name="gender"
                type="radio"
                label="Female"
                value="Female"
                onChange={handleForm}
              />
              <Form.Check
                name="gender"
                type="radio"
                label="Not prefer to say"
                value="Not prefer to say"
                onChange={handleForm}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Enter City"
                name="city"
                value={formFields.city}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="state"
                onChange={handleForm}
              >
                <option>Select State...</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Assam">Assam</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                placeholder="Enter pincode"
                name="pincode"
                value={formFields.pincode}
                onChange={handleForm}
              />
            </Form.Group>
          </Row>

          {/* checkbox */}
          <Row>
            <Form.Label>Options</Form.Label>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Hostel"
                onChange={handleForm}
                value="Hostel"
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Bus"
                onChange={handleForm}
                value="Bus"
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Uniform"
                onChange={handleForm}
                value="Uniform"
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Upload File</Form.Label>
              <FileBase64
                onDone={({ base64 }) =>
                  setFormFields((prev) => {
                    return {
                      ...prev,
                      uploadFile: base64,
                    };
                  })
                }
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <img src={formFields.uploadFile} height={100} width={100} />
    </div>
  );
};

export default ReactForm;
