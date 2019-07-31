import React from "react";

class ToggleButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			isToggleOn: !this.state.isToggleOn
		});
	}

	render() {
		return (
			<button
				onClick={this.handleClick}
				style={{ width: 200, margin: "20px 0" }}
			>
				{this.state.isToggleOn ? "ON" : "OFF"}
			</button>
		);
	}
}

export default ToggleButton;
