import React from "react";

export const Child = ({ message, updateMessage }) => {
	return (
		<div>
			<p>{message}</p>
			<button onClick={updateMessage}>Update Message</button>
		</div>
	);
};
