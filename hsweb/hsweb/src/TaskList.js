import { useState, useEffect } from "react";
import base64 from "base-64";
function TaskList() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const getAllFromServer = async () => {
		let headers = new Headers();
		headers.set('Authorization', 'Basic ' + base64.encode("myuser:mypass"));
		const resp = fetch('https://localhost:30000/api/all', {
			method: 'GET',
			headers: headers
		}
		);
		const rawresp = await resp;
		const data = rawresp.json();
		return data;
	}

	useEffect(() => {
		const getAllItems = async () => {
			try{
				const result = await getAllFromServer();
				setItems(result);
				setIsLoaded(true);
			}catch(e){
				setError(e);
			}			
		}
		getAllItems();
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else if (items.items.length === 0) {
		return <div>No Items</div>
	} else {
		return (
			<ul>
				{items.items.map(item => (
					<li key={item.id}>
						{item.name} {item.price}
					</li>
				))}
			</ul>
		);
	}
}
export default TaskList;