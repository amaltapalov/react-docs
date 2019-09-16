import React from "react";

function Warning(props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning" style={{ background: "red" }}>
			Warning!
		</div>
	);
}

class ShowWarning extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showWarning: true
		};
		this.handleWarning = this.handleWarning.bind(this);
	}

	handleWarning() {
		this.setState(state => ({
			showWarning: !state.showWarning
		}));
	}

	render() {
		return (
			<div>
				<Warning warn={this.state.showWarning} />
				<button onClick={this.handleWarning}>
					{this.state.showWarning === true ? "Hide" : "Show"}
				</button>
			</div>
		);
	}
}

export default ShowWarning;
