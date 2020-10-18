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
    
    handleDelete = e => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        window.confirm("Are you sure you wish to delete this item?") &&
        axios.delete('http://localhost:4000/users/self',config).then((res)=>{
            console.log(res)
            localStorage.clear()
        }).catch((error)=>{
            console.log(error)
        })
    }
    handleEdit = e => {
        console.log(`Edit ${this.state.user}`)
    }

    render() {
        let buttons;
        if (this.state.user) {
            buttons = <>
                <button className="btn btn-primary mx-3" onClick={() => this.handleEdit(this.state.user)}>Edit</button>
                <button className="btn btn-danger mx-3" onClick={() => this.handleDelete(this.state.user)}>Delete Profile</button>
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
