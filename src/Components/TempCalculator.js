import React from "react";

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Water would boil.</p>;
	} else {
		return <p>Water would not boil.</p>;
	}
}

function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return "";
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

const scaleNames = {
	c: "Celsius",
	f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}: </legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}

class TempCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: "",
			scale: "c"
		};
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: "c", temperature });
	}
	handleFahrenheitChange(temperature) {
		this.setState({ scale: "f", temperature });
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius =
			scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit =
			scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput
					temperature={celsius}
					scale="c"
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					temperature={fahrenheit}
					scale="f"
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

export default TempCalculator;
