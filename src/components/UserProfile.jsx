import React from 'react'
import PostCard from './PostCard'
import axios from "axios"



class UserProfile extends React.Component {
    state = {
        user: '',
        userName: '',
        email: ''
    };

    componentDidMount() {
        const config = {
            params: {
                _id: localStorage.getItem('_id')
            }
        }

        this.setState({
            user: config.params._id
        })
        axios.get(`http://localhost:4000/users/${config.params._id}`).then((res) => {
            //console.log(res.data.name)
            this.setState({ userName: res.data.name, email: res.data.email })
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        let buttons;
        if (this.user) {
            buttons = <>
                <button className="btn btn-primary mx-3">Edit</button>
                <button className="btn btn-danger mx-3">Delete Profile</button>
            </>
        }
        return (
            <div>
                <div className="jumbotron container my-3">
                    <h2 className="display-3">{this.state.userName}</h2>
                    <hr className="my-4" />
                    <p><strong>Email:</strong>{this.state.email}</p>
                    {buttons}
                </div>
                <div className="container">
                    <h2 className="display-5 my-5">Posts Created by User</h2>
                    <PostCard />
                </div>
            </div>
        )
    }

}



export default UserProfile
