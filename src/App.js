import React from "react";
import Author from "./Components/Author";
import Clock from "./Components/Clock";
import ToggleButton from "./Components/ToggleButton";
import Greeting from "./Components/Greeting";
import LoginControl from "./Components/LoginControl";
import Page from "./Components/Warning";

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
		</div>
	);
}

export default App;
