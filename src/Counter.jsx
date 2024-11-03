import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);
    const handleAdd =() => {
        setCount(count+1);

    }
    const handleMinus =() => {
        setCount(count-1);

    }

    return(
        <div>
            <h3>counter {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    )
}