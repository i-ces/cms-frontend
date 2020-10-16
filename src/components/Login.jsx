import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "axios"

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        const data = { email, password }
        axios.post(`http://localhost:4000/users/login`, data).then((res) => {
            if (res.data.errorMessage) {
                return console.log(res.data.errorMessage)
            }
            props.history.push('/create');
            console.log(res.data.publicProfile, "LOGIN SUCESSFULL")
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('_id', res.data.publicProfile._id)
        })
            .catch((error) => {
                console.log(error);
            });
        console.log(email, password);

        setEmail("");
        setPassword("");

    }
    return (
        <div className="loginForm">
            <form className="signinForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary px-3 uppertext"
                >
                    log in
                </button>
            </form>
        </div>
    )
}

export default Login
