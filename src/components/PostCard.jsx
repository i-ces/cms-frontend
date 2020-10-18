import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function PostCard() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [updatePost, setUpdatePost] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedBody, setUpdatedBody] = useState('');


    // const handleDelete = (e) => {
    //     window.confirm("Are you sure you wish to delete this item?") && console.log(`Delete ${e}`)
    // }
    // const handleEdit = (e) => {
    //     console.log(`Edit ${e}`)
    // }


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

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    const handleDelete = (e) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`http://localhost:4000/content/${e}`, config).then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    const handleEdit = (e) => {
        axios.patch(`http://localhost:4000/content/${e}`, config).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const updatePosts = () => {
        console.log(updatedTitle, updatedBody, updatePost)
    }

    // if (!posts) return <div>No Posts found!</div>
    return (
        posts.length > 0 ? (posts.map(post => {
            if (post.errorMessage) {
                return <div>{post.errorMessage}</div>
            }
            return (
                <div className="post-box" key={post._id}>
                    <div className="card postcard-box">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            {
                                (user === post.author) && (
                                    <>
                                        <button className="btn btn-primary mx-3" onClick={() => handleDelete(post._id)}>Delete</button>
                                        <button className="btn btn-danger mx-3" data-toggle="modal" data-target="#exampleModal3" onClick={e => setUpdatePost(e._id)}>Edit</button>
                                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <input className="form-control my-3" type="text" onChange={(e) => setUpdatedTitle(e.target.value)} defaultValue={post.title} />
                                                        <input className="form-control" type="text" onChange={(e) => setUpdatedBody(e.target.value)} defaultValue={post.body} />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" onClick={updatePosts}>Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
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

