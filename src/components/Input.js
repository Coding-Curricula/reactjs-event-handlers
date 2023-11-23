import React from 'react'

export default function Input({ value, label, onChange }) {

    const handlerChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={handlerChange} />
        </>
    )
}
