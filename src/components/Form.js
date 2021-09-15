import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            comment: "",
            course: ""
        }
    };
    
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value,
        });
    }

    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value,
        });
    }

    handleCourseChange = (event) =>{
        this.setState({
            course: event.target.value,
        });
    }

    handlSubmit = (event) =>{
        alert( `${this.state.username} ${this.state.comment} ${this.state.course}`)
        event.preventDefault();
    }
    render(){
        return(
            <>
                <form onSubmit={this.handlSubmit}>
                    <div>
                        <label>Username :</label>
                        <input 
                        type="text"
                        value={this.state.username} onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div>{`My name is : ${this.state.username}` }</div>

                    <div>
                        <label>Comments</label>
                        <input type="text" value={this.state.comment} onChange={this.handleCommentChange} 
                        />
                    </div>
                    <div>{`Comment is: ${this.state.comment}` }</div>

                    <div>
                        <label>Courses</label>
                        <select value={this.state.course} onChange={this.handleCourseChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default Form;
