import "./GreetingComponent.css"

export const GreetingComponent = ()=> {
    const returnString = "This is Timo!"

    return (
        <div className="first-class">
            <h1>Hello, React!</h1>
            <p>{returnString}</p>
        </div>
    )
}