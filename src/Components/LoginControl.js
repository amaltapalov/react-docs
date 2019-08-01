import React from "react";
import Greeting from "./Greeting";

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
				<p>
					The user is <b>{isLoggedInStatus ? "currently" : "not"}</b>{" "}
					logged in
				</p>
			</div>
		);
	}
}

export default LoginControl;
