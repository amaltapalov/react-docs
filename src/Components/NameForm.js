import React from "react";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			flavor: "coconut"
		};
	}

	handleChangeName = e => {
		this.setState({
			name: e.target.value
		});
	};

	handleChangeFlavor = e => {
		this.setState({
			flavor: e.target.value
		});
	};

	// Not used so far - it has been changed to handleSubmitFlavor action in <form> tag
	handleSubmit = e => {
		e.preventDefault();
		alert("A name was submitted: " + this.state.name);
		this.setState({
			name: ""
		});
	};

	handleSubmitFlavor = e => {
		e.preventDefault();
		alert("Your choosen flavor is: " + this.state.flavor);
		this.setState({
			flavor: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmitFlavor}>
				<label>
					Name:
					<input
						type="text"
						value={this.state.name}
						onChange={this.handleChangeName}
					/>
				</label>

				<label>
					Pick your favorite flavor:
					<select
						value={this.state.flavor}
						onChange={this.handleChangeFlavor}
					>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NameForm;
