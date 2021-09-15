import React, { Component } from 'react';

class RenderListSearch extends Component{
    constructor(props){
        super(props);
        this.state  = {
           
        }
    }

    render(){
    
        return(
            <>
               
               <section>
                    <div class="container">
                        <div class="row addrow">
                            <form class="example col-offset-2">
                                <input type="text" onChange={this.movieSearch}/>
                                <button type="btn" onClick={this.handleSearchBtn}>Search</button>
                            </form>
                        </div> 
                    </div>       
                </section>
            </>
        )
    }

}

export default RenderListSearch;






