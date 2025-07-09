import "./card.css"
export const Card = ({ title, description, imageUrl }) => {
	return (
		<div className="cardClass">
			<img src={imageUrl} />
			<div>
				<h2 className="text">{title}</h2>
                <p className="text">{description}</p>
			</div>
		</div>
	);
};
