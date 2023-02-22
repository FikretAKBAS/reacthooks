import EmployeeList from './components/EmployeeList';
import EmployeeeContextProvider from './context/EmployeeContext';

function App() {
	return (
		<div className="App">
			<div className="container-xl">
				<div className="table-responsive">
					<div className="table-wrapper">
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
