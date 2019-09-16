import React from "react";
import Author from "./Components/Author";
import Clock from "./Components/Clock";
import ToggleButtonHook from "./Components/ToggleButtonHook";
import Greeting from "./Components/Greeting";
import LoginControl from "./Components/LoginControl";
import LoginControlHook from "./Components/LoginControlHook";
import ShowWarning from "./Components/ShowWarning";
import ShowWarningHook from "./Components/ShowWarningHook";
import NumberList from "./Components/NumberList";
import NameForm from "./Components/NameForm";
import Reservation from "./Components/Reservation";
import TempCalculator from "./Components/TempCalculator";

// constant for NumberList component
const numbers = [1, 2, 3, 4, 5];

function App() {
	return (
		<div>
			<Author />
			<hr />
			<Clock />
			<hr />
			<ToggleButtonHook />
			<hr />
			<Greeting isLoggedIn={true} />
			<hr />
			<LoginControl />
			<hr />
			<LoginControlHook />
			<hr />
			<ShowWarning />
			<hr />
			<ShowWarningHook />
			<hr />
			<NumberList numbers={numbers} />
			<hr />
			<NameForm />
			<hr />
			<Reservation />
			<br />
			<br />
			<hr />
			<TempCalculator />
		</div>
	);
}

export default App;
