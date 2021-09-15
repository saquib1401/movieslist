import React, { Component } from "react";

class Count extends Component {
    constructor(props){
        super(props);
        this.state = { counter : 0 };
    }


    render(){
        const { counter } = this.state;
        return(
            <>
                <h1>{counter}</h1>
                <button onClick={() => this.setState({ counter : counter + 1 }) }>Increase</button>
                <button onClick={() => this.setState({ counter : counter - 1 }) }>Decrease</button>
            </>
        );
    }
}

export default Count;