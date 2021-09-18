import React, { useState, useEffect } from "react";

const BasicOne = ()=>{
    const[state, setState] = useState({
        text: "I have been clicked",
        loading: true,
    });

    const{ text, loading } = state;

    return(
        <div>
            <h1>{loading ? text:"Text Change"}</h1>
            <button onClick= {() => {
                setState({ text: "I have been clicked"});
            }}>Click me</button>
        </div>
    );
}

export default BasicOne;
