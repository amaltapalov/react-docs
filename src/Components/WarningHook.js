import React, { useState } from "react";

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}

	return <div style={{ background: "red", padding: "10px" }}>Warning</div>;
}

export default function ShowWarningHook() {
	const [show, setShow] = useState(true);

	return (
		<div>
			<WarningBanner warn={show} />
			<button onClick={() => setShow(!show)}>
				{show ? "Hide" : "Show"}
			</button>
		</div>
	);
}
