import React, { useState } from "react";
import { Child } from "../child/Child";

export const Parent = () => {
	const [message, setMessage] = useState("Hello from Parent!");

	const updateMessage = () => {
		setMessage("Updated by Child!");
	};

	return <Child message={message} updateMessage={updateMessage} />;
};
