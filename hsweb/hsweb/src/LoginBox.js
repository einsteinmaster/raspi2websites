function LoginBox({logInStateChange}) {
	const loginClick = (e) => {
		logInStateChange(true);
	}
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