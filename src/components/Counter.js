import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(100)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
