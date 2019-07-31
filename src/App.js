import React from "react";
import Author from "./Components/Author";
import Clock from "./Components/Clock";
import ToggleButton from "./Components/ToggleButton";
import Greeting from "./Components/Greeting";

function LoginButton(props) {
	return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
	return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedInStatus: false };
	}

	handleLoginClick() {
		this.setState({
			isLoggedInStatus: true
		});
	}

	handleLogoutClick() {
		this.setState({
			isLoggedInStatus: false
		});
	}

	render() {
		const isLoggedInStatus = this.state.isLoggedInStatus;
		// let button;

		// if (isLoggedInStatus) {
		// 	button = <LogoutButton onClick={this.handleLogoutClick} />;
		// } else {
		// 	button = <LoginButton onClick={this.handleLoginClick} />;
		// }
		return (
			<div>
				<Greeting isLoggedIn={isLoggedInStatus} />
				{isLoggedInStatus ? (
					<LogoutButton onClick={this.handleLogoutClick} />
				) : (
					<LoginButton onClick={this.handleLoginClick} />
				)}
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<Author />
			<Clock />
			<ToggleButton />
			<Greeting isLoggedIn={true} />
			<LoginControl />
		</div>
	);
}

export default App;
