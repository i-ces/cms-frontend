import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function PostCard() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null)
    useEffect(() => {
        const config = {
            params: {
                _id: localStorage.getItem('_id')
            }
        }
        console.log(config.params._id)
        setUser(config.params._id);
        axios.get(`http://localhost:4000/content/user/${config.params._id}`).then((res) => {
            console.log(res.data)
            setPosts(res.data)
            // fetch(`http://localhost:4000/content/user/${res.config.params._id}`)
            //     .then(response => response.json())
            //     .then(data => setPosts([data]))
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    // if (!posts) return <div>No Posts found!</div>
    return (
        posts.length > 0 ? (posts.map(post => {
            if (post.errorMessage) {
                return <div>{post.errorMessage}</div>
            }
            let updateDivs;
            if (user === post.author) {
                updateDivs = <div>
                    <button className="btn btn-primary mx-3">Delete</button>
                    <button className="btn btn-danger mx-3">Edit</button>
                </div>
            }
            return (
                <div className="post-box" key={post._id}>
                    <div className="card postcard-box">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            {updateDivs}
                        </div>
                    </div>
                </div >
            )
        }))
            :
            (<h2>No Posts Found.</h2>)
    )
}

export default PostCard

