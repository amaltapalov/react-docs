import React, { useState } from "react";
import Greeting from "./Greeting";

export default function LoginControlHook() {
	const [toggle, setToggle] = useState(false);

	function LogButton() {
		return (
			<button onClick={() => setToggle(!toggle)}>
				{toggle === true ? "Logout" : "Login"}
			</button>
		);
	}

	return (
		<div>
			<Greeting isLoggedIn={toggle} />
			<LogButton />
		</div>
	);
}
