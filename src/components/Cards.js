import React, { Component } from 'react';
import SearchBox from './SearchBox';
import MovieBlock from './MovieBlock';

class Cards extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies:[],
            searchValue:""
        }
    }

    componentDidMount(e){
        this.makeApiCall();
    }

    handleSearchBtn = (e)=>{
        let search = `${this.state.searchValue}`;
        this.makeApiCall(search);
        e.preventDefault();
    }

    makeApiCall(){
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
        const{searchValue, movies} = this.state;
        return(
            <>
                <SearchBox searchValue={searchValue} handSearchInput = {this.handleSearchInput} handlesearchBtn = {this.handleSearchBtn} />

                <MovieBlock movies={movies}/>
                  
            </>
        )
    }
}

export default Cards;