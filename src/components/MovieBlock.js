import React, { Component } from 'react';

class MovieBlock extends Component{
    render(){
        const{movies}=this.state;
        return(
            <>
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

export default MovieBlock;