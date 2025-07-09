export const Person = ()=> {
    const name = "Alice";
    const age = 20;

    return (
        <div>
            <p>
                {name} is {age >= 10 ? "an adult" : "a minor"}
            </p>
        </div>
    );
};