import './App.css';
import LoginBox from './LoginBox';
import { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	if (loggedIn){
		return (
			<div className="App">
				<AddTask/>
				<TaskList/>
			</div>
		);
	}else{
		return (
			<div className="App">
				<LoginBox logInStateChange={setLoggedIn}/>
			</div>
		);
	}
}
export default App;