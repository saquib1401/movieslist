import React, { Component } from 'react';

class Cards extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies:[]
        }
    }

    componentDidMount(e){
        this.makeApiCall();
    }

    /**handleSearchBtn = (e)=>{
        let search = `${this.state.searchMovies}`;
        this.makeApiCall(search);
        e.preventDefault();
    }**/

    makeApiCall(movies){
        //fetch(`http://www.omdbapi.com/?s=${movies}&apikey=237881c4`)
        fetch(`http://www.omdbapi.com/?s=avengers&apikey=237881c4`)
        .then((response) => {
            if(response.status !== 200) throw response;
            return response.json(); 
        })
        .then((data) => {
            this.setState({
                movies:data.Search
            })
            console.log(data);
        })
        .catch((error)=>{
            alert('data not found');
        })

    }
    render(){
        const{movies}=this.state;
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

                <section>
                    <div class="container">
                        <div class="row">
                        {movies.map((movie) =>(
                            <div class="card">
                                <img class="card-img-top" src={movie.Poster} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">{movie.Title}</h4>
                                    <p class="card-text">{movie.Year}</p>
                                </div>
                            </div>
                        ))}
                        </div>    
                    </div>
                </section>
                        
            </>
        )
    }
}

export default Cards;