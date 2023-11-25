import React, { useState } from 'react'

import Button from './Button'
import Input from './Input'

import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [name, setName] = useState('Fruit')
    const [price, setPrice] = useState(1)

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

    const handlerProductChange = (value) => {
        setName(value)
    }

    const handlerPriceChange = (value) => {
        setPrice(value)
    }

    return (
        <div className='counter-container'>
            <h2 className='title'>{name}</h2>
            <div className='button-group'>
                <Button className="increment-button" label='+' onClick={handleIncrement} />
                <span className='quantity'>Quantity: {count}</span>
                <Button className="decrement-button" label='-' onClick={handleDecrement} />
            </div>
            <p className='discount'>{`Discount: ${discount}%`}</p>
            <Input styleName='product-input' label='Product Name' value={name} onChange={handlerProductChange} />
            <br />
            <Input styleName='price-input' label="Price" value={price} onChange={handlerPriceChange} />
            <p className='price'>{`Total: $${((count * price) - ((count * price) * (discount / 100))).toFixed(2)}`}</p>
        </div>
    )
}
