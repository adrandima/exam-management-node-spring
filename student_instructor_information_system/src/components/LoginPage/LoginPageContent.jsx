import React,{Component} from 'react';
import login from './login.png';
import './loginStyles.css';

export default class LoginPageContent extends Component {
    render() {
        return (<div className="loginbox">
            <img src={login} alt="LoginIcon" className="User"/>
                <h1>Login Here</h1>
                <form method="post" action="Login">
                    <p>Username</p>
                    <input type="text" name="username" placeholder="Enter Username" required="required" autoComplete="off"/>
                    <p>Password</p>
                    <input type="Password" name="password" placeholder="Enter Password" required="required" autoComplete="off"/>
                    <input type="submit" name="submit" value="Login"/><br/>
                    <a href="Reset.html">Reset Your Password</a><br/>
                </form>
        </div>
        )
    }
}