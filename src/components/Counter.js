import React, { useState } from 'react'

import Button from './Button'
import Input from './Input'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [name, setName] = useState('Banana')

    const price = 1.99

    const handleIncrement = () => {
        setCount((prevCount) => {
            let count = prevCount + 1;
            if (count >= 5) {
                setDiscount(20)
            }
            return count;
        })
    }

    const handleDecrement = () => {
        setCount((prevCount) => {
            let count = prevCount - 1;
            if (count < 5) {
                setDiscount(0)
            }
            return count;
        })
    }

    const handlerChange = (value) => {
        setName(value)
    }

    return (
        <div>
            <h2 className='title'>{name}</h2>
            <Button label='+' onClick={handleIncrement} />
            <span>Quantity: {count}</span>
            <Button label='-' onClick={handleDecrement} />
            <p>Price: ${price}</p>
            <p>{`Discount: ${discount}%`}</p>
            <Input label='Name' value={name} onChange={handlerChange} />
        </div>
    )
}
