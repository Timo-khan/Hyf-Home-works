import "./toggleContent.css"
import React, { useState } from 'react';

export const ToggleContent = ({ content }) => {
	const [show, setShow] = useState(false);

	const toggleVisibility = () => {
		setShow((prevShow) => !prevShow);
	};

	return (
		<div className='toggle'>
			<button onClick={toggleVisibility} className="text">
				{show ? "Show" : "Hide"} Content
			</button>
			<div>
				{show ? content : <p className="content">This is the content</p>}
			</div>
		</div>
	);
};
