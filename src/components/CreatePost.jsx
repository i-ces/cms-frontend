import React, { useState } from 'react'
import axios from "axios"

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setPostBody] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
            const data ={title,body}

            const config={
                headers:{
                    Authorization:'Bearer '+localStorage.getItem('token')
                }
            }
    
     axios.post(`http://localhost:4000/content`,data,config).then((res)=>{
     if(res.data.errorMessage){
     return console.log(res.data.errorMessage);
     }
     console.log(res.data,"Content Created")
     })
     .catch((error)=>{
     console.log(error);
     });
    
            console.log(title, body)

        
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
                        value={body}
                        onChange={e => setPostBody(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Publish</button>
            </form>
        </div>
    )
}

export default CreatePost
