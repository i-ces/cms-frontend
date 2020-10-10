import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PostCard() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    if (!posts) return <div>No Posts found!</div>
    return (
        posts.map(post => {
            return (
                <div className="post-box" >
                    <div className="card postcard-box" key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <Link to="#" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default PostCard
