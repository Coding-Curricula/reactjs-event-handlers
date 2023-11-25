import React from 'react'

export default function Input({ styleName, value, label, onChange }) {

    const handlerChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <label>{label}</label>
            <input className={styleName} value={value} onChange={handlerChange} />
        </>
    )
}
