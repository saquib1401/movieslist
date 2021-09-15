import React, { Component } from 'react';

class RenderList extends Component{
    constructor(props){
        super(props);
        this.state  = {
            movies :[]
        }
    }

    componentDidMount(){
        this.MakeApiCall();
    }

    MakeApiCall(){
        fetch(`http://www.omdbapi.com/?s=avengers&apikey=237881c4`)
        .then((response) =>{
            if(response.status !== 200)  throw response;
            return response.json();
        })
        .then((data) =>{
            this.setState({
                movies:data.Search
            })
        })
        .catch((error) => {
            alert('not found');            
        })
    }

    render(){
        const{movies}=this.state;
        return(
            <>
               
                <section>
                    <div class="container">
                        <div class="row">
                        { 
                            movies.map((movie) => (
                                <div class="card">
                                    <img class="card-img-top" src={movie.Poster} alt="Card image"/>
                                    <div class="card-body">
                                        <h4 class="card-title">{movie.Title}</h4>
                                        <p class="card-text">{movie.Year}</p>
                                    </div>
                                </div>
                            ) )
                        }
                        </div>    
                    </div>
                </section>
            </>
        )
    }




}

export default RenderList;