import {useState} from 'react';
import base64 from "base-64";

const AddTask = () => {
	const [itemname,setItemname] = useState("");
	const [itemdesc,setItemdesc] = useState("");
	const addClicked = () => {
		serverAddTask({
			name: itemname,
			desc: itemdesc
		});
	}
	const serverAddTask = (item) => {
		let headers = new Headers();
		headers.set('Authorization', 'Basic ' + base64.encode("myuser:mypass"));
		fetch("https://localhost:30000/api/item",{
			method: 'POST',
			headers: headers,
			body: JSON.stringify(item)
		});
	}
	return (
		<div>
			<form>
				Itemname:
				<input type="text" value={itemname} onChange={(e) => setItemname(e.target.value)}/>
				Description:
				<input type="text" value={itemdesc} onChange={(e) => setItemdesc(e.target.value)}/>
				<button type="button" onClick={addClicked}>submit</button>
			</form>
		</div>
	)
}

export default AddTask
