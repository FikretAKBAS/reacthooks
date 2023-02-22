import { useContext, useState } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';

const addForm = () => {
	const { addEmployee } = useContext(EmployeeContext);

	const [newEmployee, setNewEmployee] = useState({
		name: '',
		email: '',
		address: '',
		phone: '',
	});
	const { name, email, address, phone } = newEmployee;

	const onInputChange = (e) => {
		setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addEmployee(name, email, address, phone);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup className="mb-3">
				<FormControl
					type="Text"
					placeholder="Name *"
					value={name}
					name="name"
					onChange={(e) => onInputChange(e)}
					required></FormControl>
			</FormGroup>
			<FormGroup className="mb-3">
				<FormControl
					type="email"
					placeholder="Email *"
					required
					value={email}
					name="email"
					onChange={(e) => onInputChange(e)}></FormControl>
			</FormGroup>
			<FormGroup className="mb-3">
				<FormControl
					as="textarea"
					placeholder="Address *"
					rows={3}
					value={address}
					name="address"
					onChange={(e) => onInputChange(e)}></FormControl>
			</FormGroup>
			<FormGroup className="mb-3">
				<FormControl
					type="text"
					placeholder="Phone *"
					value={phone}
					name="phone"
					onChange={(e) => onInputChange(e)}></FormControl>
			</FormGroup>
			<Button variant="success" type="submit" block>
				Add New Employee
			</Button>
		</Form>
	);
};

export default addForm;
