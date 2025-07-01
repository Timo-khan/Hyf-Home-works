"use client"
import "./counter.css"
import { useState } from "react";

export const Counter = ()=> {
    const [count, setCount] = useState(1)

    const handleCountUp = ()=> {
        setCount(count + 1)
    }
    const handleCountDown = ()=>
        setCount(count - 1)


return (
    <div className="counter">
        <h1 className="text">counter</h1> 
        <p className="text">{count}</p>
        <div className="flex">
        <button onClick={handleCountUp}> descriptionUp</button>
        <button onClick={handleCountDown}>Count down</button>
        </div>
    </div>
);
};






