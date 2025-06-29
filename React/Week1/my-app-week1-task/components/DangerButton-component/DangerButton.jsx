import "./DangerButton.css"

export const DangerButton = ({appearance, action, text, type ="button"})=> {
    return (
    <button type={type} onClick={action} className={appearance}>
        {text}
    </button>
    );
};