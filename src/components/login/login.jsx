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
               <div className="input-group">
                   <input type="text"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}/>
                   <label>Email</label>
               </div>
               <div className="input-group">
                   <input type="text"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                   <label>Password</label>
               </div>

               <button className="button-signup" onClick={(e) => handleSubmit(e)}>
                   <div className="text--block">Log in</div>
               </button>
           </form>
        </div>
    );
}
export default Login;