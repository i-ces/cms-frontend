import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

class Navbar extends Component {

    state = {
        user: null
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

    handleDelete = (e) => {
        console.log(`Logout ${e}`)
    }
    render() {
        let navLinks;
        if (this.state.user) {
            navLinks = (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                    </li>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(this.state.user)}>Logout</button>
                </>
            )
        }
        else {
            navLinks = (<>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                </li>
            </>
            )
        }
        return (
            <div>
                <section id="nav-bar">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/" ml-5="true">CMS</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog <span className="sr-only">(current)</span></Link>
                                </li>
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
        )
    }

}

export default Navbar
