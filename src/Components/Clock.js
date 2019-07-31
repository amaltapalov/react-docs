import React from "react";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1 style={{ marginBottom: 0 }}>Hello, world!</h1>
				<h2 style={{ margin: 0 }}>
					It is {this.state.date.toLocaleTimeString()}.
				</h2>
			</div>
		);
	}
}

export default Clock;
