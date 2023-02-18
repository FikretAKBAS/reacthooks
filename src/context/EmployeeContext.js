import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeeContextProvider = (props) => {
  const [employees] = useState([
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
    {
      id: uuidv4(),
      name: "fikret",
      email: "fikret@gmail.com",
      address: "address 1",
      phone: "555555555555",
    },
  ]);

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeeContextProvider;
