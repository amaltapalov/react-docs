import React from "react";

function formatDate(date) {
	return date.toLocaleTimeString();
}

function Avatar(props) {
	return (
		<img
			className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
	);
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">{props.user.name}</div>
		</div>
	);
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">{props.text}</div>
			<div className="Comment-date">{formatDate(props.date)}</div>
		</div>
	);
}

const comment = {
	author: {
		name: "Michael Scorcese",
		avatarUrl: "https://placekitten.com/g/64/64"
	},
	text: "I hope you enjoy learning React!",
	date: new Date()
};

function Author() {
	return (
		<Comment
			author={comment.author}
			text={comment.text}
			date={comment.date}
		/>
	);
}

export default Author;
