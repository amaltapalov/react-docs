import React from "react";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	handleChange = e => {
		this.setState({
			value: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		alert("A name was submitted: " + this.state.value);
		this.setState({
			value: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NameForm;
