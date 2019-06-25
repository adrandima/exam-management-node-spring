import React,{Component} from 'react';
import logo from '../images/sliit_logo.jpg';
import './main.css';

export default class Header extends Component{
    render() {
        return <div className="header">
            <div className="row">
                <div className="col-6">
                    <img src={logo} alt="logo" align="center"/>
                </div>
                <div className="col-6 right">
                    <div className="login-container">
                        <form className="login" action="/AdminPage">
                            <input type="text" placeholder="Username" name="username"/>
                             <input type="password" placeholder="Password" name="psw"/>
                                    <button type="submit"><b>Login</b></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    }
}
