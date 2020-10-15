import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function PostCard() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const config={
            params:{ 
                _id:localStorage.getItem('_id')
            }
        }
        axios.get('http://localhost:4000/content/user/:id',config).then((res)=>{
            fetch(`http://localhost:4000/content/user/${res.config.params._id}`)
            .then(response => response.json())
            .then( data =>setPosts(data))
        }).catch((error)=>{
            console.log(error)
        }) 
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
