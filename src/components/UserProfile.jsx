import React from 'react'

function UserProfile() {
    return (
        <div>
            <div className="jumbotron container my-3">
                <h2 className="display-3">User Name</h2>
                <hr class="my-4" />
                <p><strong>Email:</strong> demo@emailprovider.com</p>
                <button className="btn btn-primary">Edit</button>
            </div>
        </div>
    )
}

export default UserProfile
