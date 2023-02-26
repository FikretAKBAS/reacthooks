import Employee from "./Employee";
import { useContext, useState, useEffect, useReducer } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Alert, Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";
const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [employeesPerPage] = useState(5);
  // const handleShowAlert = () => setShowAlert(true);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  ///11. Videoda Kaldın ekleme kısmında

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b> Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>
              Add New Employee
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success" dismissible>
        Employee List Updated Successfully
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees
            .sort((a, b) => (a.name > b.name ? -1 : 1))
            .map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentEmployees}
        sortedEmployees={sortedEmployees}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start align-items-start">
          <Button
            onClick={handleClose}
            variant="secondary"
            className="d-flex justify-content-center"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
