import React from 'react';
const BlogBody = (props) =>{
    return(
        <>
        {props.Posts.map((post) =>(
            
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

export default BlogBody;