import React, { useState } from 'react'

export default function Form2() {
    const initialValue = { username: '', password: '' };
    const [a, setState] = useState(initialValue);
    const [e, setError] = useState({});
    const validate = () => {
        const err = {};

        const pat = /^[a-zA-Z]+$/
        if (!a.username) {
            err.username = "Username Empty";
        }
        else if (!pat.test(a.username)) {
            err.username = "No Numbers needed!";
        }
        if (!a.password) {
            err.password = "Password Empty"
        }
        setError(err);
    }
    const submitForm2 = (event) => {
        event.preventDefault();

        validate(a);

        console.log(a);
        console.log(e);
    }
    return (
        <div>
            <form action="" onSubmit={submitForm2}>
                <label>Enter Name</label>
                <input type='text' value={a.username} onChange={(e) => setState({ ...a, username: e.target.value })} ></input>
                <label>Enter Password</label>
                <input type='text' value={a.password} onChange={(e) => setState({ ...a, password: e.target.value })}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}