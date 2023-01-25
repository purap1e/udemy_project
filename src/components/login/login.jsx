import React, {useState} from 'react'
import '../login/login.css'
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";

const Login = () => {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        const data = {username,password};
        AuthService.login(data).then(res => {
            // console.log(LocalStorageService.get("access_token"));
        })
    }

    return (
        <div className="auth--container">
            <div className="title mini">Log in to your Udemy account</div>

            <div className="btn-link">
                <img className="icon" src="http://localhost:3000/svgs/google.svg"/>
                <div className="text--block">Continue with Google</div>
            </div>
            <div className="btn-link">
                <img className="icon" src="http://localhost:3000/svgs/facebook.svg"/>
                <div className="text--block">Continue with Facebook</div>
            </div>

            <div className="btn-link">
                <img className="icon" src="http://localhost:3000/svgs/apple.svg"/>
                <div className="text--block">Continue with Apple</div>
            </div>

           <form>
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
                   <div className="text--block">Log in</div>
               </button>
           </form>
        </div>
    );
}
export default Login;