import EmployeeList from "./components/EmployeesList";
import EmployeeeContextProvider from "./context/EmployeeContext";

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage</h2>
                  <b> Employees</b>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmployeeeContextProvider>
        <EmployeeList />
      </EmployeeeContextProvider>
    </div>
  );
}

export default App;

//8.Derste Kaldın
