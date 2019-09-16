import React, { useState } from "react";

export default function ToggleButton() {
	const [toggle, setToggle] = useState(true);

	return (
		<button
			style={{ width: 200, margin: "20px 0" }}
			onClick={() => setToggle(!toggle)}
		>
			{toggle ? "ON" : "OFF"}
		</button>
	);
}
