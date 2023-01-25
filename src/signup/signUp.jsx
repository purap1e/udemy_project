import React, {useState} from 'react'
import './signup.css'
import AuthService from '../services/AuthService'
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {

        e.preventDefault();
        const user = {name,username,password};
        AuthService.signup(user).then(res => {
            navigate("/login");
        });

    }

    return (
        <div className="auth--container">

            <div className="title mini">Sign up and start learning</div>
            <br/>

            <form>
                <div className="input-group">
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                    <label>Full Name</label>
                </div>

                <div className="input-group">
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                    <label>Username</label>
                </div>

                <div className="input-group">
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <label>Password</label>
                </div>

                <button className="button-signup" onClick={(e) => handleSubmit(e)}>
                    <div className="text--block">Sign up</div>
                </button>

            </form>

        </div>
    );
}
export default SignUp;