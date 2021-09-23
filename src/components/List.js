import React, {useState, useEffect} from 'react';
//import BlogBody from './BlogBody';
//import BlogBody from './components/BlogBody';

import axios from 'axios';

const List = ()=>{
    const [Posts,setPosts] = useState([]);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if(response.status !== 200) throw response;
            if(response.data){
                setPosts(response.data);
            }
        })
        .catch((error)=>{
            alert('data not found');
        });
    }, [] );

    
    return(
        <>
        {Posts.map((post) =>(
                    
            <dl class="row">
            <dt class="col-sm-3">Id</dt>
            <dd class="col-sm-9">{post.id}</dd>
        
            <dt class="col-sm-3">User Id</dt>
            <dd class="col-sm-9">
            <p>{post.userId}</p>
            </dd>
        
            <dt class="col-sm-3">Title</dt>
            <dd class="col-sm-9">{post.title}</dd>
        
            <dt class="col-sm-3 text-truncate">Description</dt>
            <dd class="col-sm-9">{post.body}</dd>
            </dl>
        
        )) }
        </>
    )
}

export default List;