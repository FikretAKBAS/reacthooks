import Employee from "./Employee";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>Name</tr>
        <tr>Email</tr>
        <tr>address</tr>
        <tr>Phone</tr>
        <tr>Actions</tr>
      </thead>
      <tbody>
        <Employee employess={employees} />
      </tbody>
    </table>
  );
};

export default EmployeeList;
