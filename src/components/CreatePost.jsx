import React, { useState } from 'react'
import axios from "axios"

function CreatePost() {
    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        const data ={title,postBody}
 axios.post(`http://localhost:4000/content`,data).then((res)=>{
 if(res.errorMessage){
 console.log(res.errorMessage);
 }
 console.log(res.content,"Content Created")
 })
 .catch((error)=>{
 console.log(error);
 });

        console.log(title, postBody)
    }
    return (
        <div className="post-manage-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="blogTitle">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="blogTitle"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Body</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        value={postBody}
                        onChange={e => setPostBody(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Publish</button>
            </form>
        </div>
    )
}

export default CreatePost
