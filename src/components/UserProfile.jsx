import React from 'react'
import PostCard from './PostCard'

function UserProfile() {
    return (
        <div>
            <div className="jumbotron container my-3">
                <h2 className="display-3">User Name</h2>
                <hr className="my-4" />
                <p><strong>Email:</strong> demo@emailprovider.com</p>
                <button className="btn btn-primary">Edit</button>
            </div>
            <div className="container">
                <h2 className="display-5 my-5">Posts Created by User</h2>
                <PostCard />
            </div>
        </div>
    )
}

export default UserProfile
