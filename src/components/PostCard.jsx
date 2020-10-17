import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function PostCard() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const config = {
            params: {
                _id: localStorage.getItem('_id')
            }
        }
        axios.get('http://localhost:4000/content/user/:id', config).then((res) => {
            fetch(`http://localhost:4000/content/user/${res.config.params._id}`)
<<<<<<< HEAD
            .then(res=>res.json())
            .then(data=>setPosts(data))
            }).catch((error)=>{
=======
                .then(response => response.json())
                .then(data => setPosts([data]))
        }).catch((error) => {
>>>>>>> 732383794d03d1fa5197040e23395359deeb124c
            console.log(error)
        })
    }, [])
<<<<<<< HEAD

return (
=======
    if (!posts) return <div>No Posts found!</div>
    return (
>>>>>>> 732383794d03d1fa5197040e23395359deeb124c
        posts.map(post => {
            if(post.errorMessage){
                return <div>{post.errorMessage}</div>
            }
            return (
                <div className="post-box" >
                    <div className="card postcard-box" key={post._id}>
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
