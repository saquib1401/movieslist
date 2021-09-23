import React  from 'React';

const SearchBox = (props) => {
    return(
        <section>
            <div class="container">
                <div class="row addrow">

                       <input value={props.searchValue} type="text" onChange={(event) => props.handleSearchInput(event.target.value)}/>
                       <button type="btn" onClick={props.handleSearchBtn}>Search</button>
                    
                </div> 
            </div>       
        </section>
    )
}

export default SearchBox;