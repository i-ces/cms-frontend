import React, { useState } from 'react'
import axios from "axios"

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accCreated, setAccCreated] = useState(false);
    const [errorMessage,setErrormessage]=useState("")
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);

        const data = { name, email, password }
        axios.post(`http://localhost:4000/users/signup`, data).then((res) => {
            if(res.data.errorMessage){
               return setErrormessage(res.data.errorMessage)
            }
                console.log(res.data, "NEW USER CREATED")
                setAccCreated(true);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('_id', res.data.publicProfile._id)
        })
            .catch((error) => {
                console.log(error);
            });

        setName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div className="loginForm">
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="form-group">
                <div>
                        {<small>{errorMessage}</small>}
                    </div>
                    <div>
                        {accCreated && <small>Account created successfully!Start creating post.</small>}
                    </div>
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary px-3 uppertext"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Register;
