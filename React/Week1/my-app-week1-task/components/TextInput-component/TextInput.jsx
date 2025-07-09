import "./TextInput.css"

export const TextInput = ({appearance, placeholder, type="text", value })=> {
    return (
        <input type={type} placeholder={placeholder} className={appearance} value={value}/>
    )
}