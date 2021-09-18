import React, { useState } from 'react';

const BasicTwo = () =>{
    const[text, setState] = useState("I have not been clicked!");

    return(
        <div>
            <h1>{text}</h1>
            <button
                onClick = {() => {
                    setState("I have been clicked!");
                }}
            >Click Me</button>
        </div>
    );
}
export default BasicTwo;

