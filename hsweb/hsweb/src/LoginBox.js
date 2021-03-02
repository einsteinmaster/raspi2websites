function loginClick(e){
	console.log("button hi");
}
function LoginBox() {
	return (
		<div className="LoginBox">
			<form>
				Username:
				<input type="text"/>
				Password:
				<input type="text"/>
				<button onClick={loginClick}>Login</button>
			</form>
		</div>
	);
}
export default LoginBox;