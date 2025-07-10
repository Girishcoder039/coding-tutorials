import React, { useState } from "react";

export default function Inc_Dec() {
    const [a, setState] = useState(0);

    const process = (e, arg) => {
        e.preventDefault();
        if (arg === 'inc') {
            setState(a + 2);
        } else {
            setState(a - 1);
        }
    }

    return (
        <div>
            {a}
            <button onClick={(e) => process(e, 'inc')} >Increase</button>
            <button onClick={(e) => process(e, 'dec')} >Decrease</button>
        </div>
    );
}