import "./Button.css"

export const Button = ({appearance, action, text, type ="button"})=> {
    return (
    <button type={type} onClick={action} className={appearance}>
        {text}
    </button>
    );
};