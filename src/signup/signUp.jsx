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
                <div className="form">
                    <input type="text"
                           id="name"
                           value={name}
                           className="form__input"
                           autoComplete="off"
                           placeholder=" "
                           onChange={(e) => setName(e.target.value)}/>
                    <label className="form__label"  htmlFor="name">Full Name</label>
                </div>

                <div className="form">
                    <input type="text"
                           id="username"
                           value={username}
                           className="form__input"
                           autoComplete="off"
                           placeholder=" "
                           onChange={(e) => setUsername(e.target.value)}/>
                    <label className="form__label"  htmlFor="username">Username</label>
                </div>

                <div className="form">
                    <input type="password"
                           id="password"
                           value={password}
                           className="form__input"
                           autoComplete="off"
                           placeholder=" "
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form__label"  htmlFor="password">Password</label>
                </div>

                <button className="button-signup" onClick={(e) => handleSubmit(e)}>
                    <div className="text--block">Sign up</div>
                </button>

            </form>

        </div>
    );
}
export default SignUp;