import React from "react";
import Author from "./Components/Author";
import Clock from "./Components/Clock";
import ToggleButton from "./Components/ToggleButton";
import Greeting from "./Components/Greeting";
import LoginControl from "./Components/LoginControl";
import Page from "./Components/Warning";
import NumberList from "./Components/NumberList";
import NameForm from "./Components/NameForm";

// constant for NumberList component
const numbers = [1, 2, 3, 4, 5];

function App() {
	return (
		<div>
			<Author />
			<hr />
			<Clock />
			<hr />
			<ToggleButton />
			<hr />
			<Greeting isLoggedIn={true} />
			<hr />
			<LoginControl />
			<hr />
			<Page />
			<hr />
			<NumberList numbers={numbers} />
			<hr />
			<NameForm />
		</div>
	);
}

export default App;
