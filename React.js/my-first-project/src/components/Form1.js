import React, { useState } from 'react'

export default function Form1() {
    const [a, setId] = useState(10);
    return (
        <div>
            <form action="">
            </form>
            <input type='text' value={a}></input>
        </div>
    )
}