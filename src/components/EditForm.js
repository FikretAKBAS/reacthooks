import { useContext, useState } from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

const EditForm = ({ theEmployee }) => {
  const { dispatch } = useContext(EmployeeContext);
  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateEmployee(id, updatedEmployee);
    dispatch({ type: "update_employee", id, updatedEmployee });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3">
        <FormControl
          type="Text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></FormControl>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormControl
          type="email"
          placeholder="Email *"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        ></FormControl>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormControl
          as="textarea"
          placeholder="Address *"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          name="address"
        ></FormControl>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Phone *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
        ></FormControl>
      </FormGroup>
      <Button variant="success" type="submit" block>
        Update Employee
      </Button>
    </Form>
  );
};

export default EditForm;
