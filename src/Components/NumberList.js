import React from "react";

function ListItem(props) {
	return <li>{props.value}</li>;
}

function NumberList(props) {
	// const numbers = props.numbers;
	// const listItems = numbers.map(number => (
	// 	<ListItem key={number.toString()} value={number} />
	// ));
	return (
		<ul>
			{props.numbers.map(number => (
				<ListItem key={number.toString()} value={number} />
			))}
		</ul>
	);
}

export default NumberList;
