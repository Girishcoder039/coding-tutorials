import React, { useState, useEffect } from 'react'

export default function Table1() {

    const [state, setState] = useState([]);
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json().then((arg) => setState(arg)))
        }, []);
    return (
        <div>
            <table>
                <thead>
                    <td>Id</td>
                    <td>Title</td>
                </thead>
                <tbody>
                    {state.map(e =>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}