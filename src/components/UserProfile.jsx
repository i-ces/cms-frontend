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

    handleDelete =()=> {
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

    handleNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    //Send post request from these functions
    // updateName = ()=> {
    //                 axios.patch('http://localhost:4000/users/self').then((res)=>{
    //                     console.log(res.data.name)
    //                     this.setState({ userName: res.data.name })
            
    //                 }).catch((error)=>{
    //                     console.log(error)
    //                 })

    //                 // const config = {
    //                 //     params: {
    //                 //         _id: localStorage.getItem('_id')
    //                 //     }
    //                 // }
            
    //                 // this.setState({
    //                 //     user: config.params._id
    //                 // })
    //                 // axios.get(`http://localhost:4000/users/${config.params._id}`).then((res) => {
    //                 //     //console.log(res.data.name)
    //                 //     this.setState({ userName: res.data.name, email: res.data.email })
    //                 // }).catch((e) => {
    //                 //     console.log(e)
    //                 // })
    // 

    updateProfile= ()=> {
        const data={name:this.state.userName,
        email:this.state.email
        }
        
                            axios.patch('http://localhost:4000/users/self',data).then((res)=>{
                                console.log(res)

                                this.setState({ userName: res.data.name, email: res.data.email })
                    
                            }).catch((error)=>{
                                console.log(error)
                            })
            }

    updateEmail = e => {
        console.log(e)
    }

    render() {
        let buttons;
        if (this.state.user) {
            buttons = <>
                <button className="btn btn-primary mx-3"  onClick={()=>this.updateProfile()}>Edit</button>

                <button className="btn btn-danger mx-3" onClick={() => this.handleDelete()}>Delete Profile</button>
            </>
        }
        return (
            <div>
                <div className="jumbotron container my-3">
                    <h2 className="display-3">{this.state.userName} <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button></h2>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input className="form-control" type="text" onChange={this.handleNameChange} value={this.state.userName} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.updateName}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <p><strong>Email:</strong> {this.state.email} <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">Edit</button></p>
                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input className="form-control" type="text" onChange={this.handleEmailChange} value={this.state.email} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.updateEmail}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
