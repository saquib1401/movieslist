import React,  { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date : new Date() };
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    tick(){
        this.setState(
            {
                date: new Date(),
            }
        );
    }

    render(){
        return (
            <>
                <div>
                    <h1>Clock: </h1>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                </div>
            </>
        );
    }
}
export default Clock;