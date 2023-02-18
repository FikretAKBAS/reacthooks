import EmployeeList from './components/EmployeeList';
import EmployeeeContextProvider from './context/EmployeeContext';

function App() {
	return (
		<div className="App">
			<div className="container-xl">
				<div className="table-responsive">
					<div className="table-wrapper">
						<div className="table-title">
							<div className="row">
								<div className="col-sm-6">
									<h2>
										Manage <b> Employees</b>
									</h2>
								</div>
								<div className="col-sm-6">
									<a
										href="#addEmployeeModal"
										className="btn btn-success"
										data-toggle="modal">
										<i className="material-icons">&#xE147;</i>
										Add New Employee
									</a>
								</div>
							</div>
						</div>
						<EmployeeeContextProvider>
							<EmployeeList />
						</EmployeeeContextProvider>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

//8.Derste Kaldın
