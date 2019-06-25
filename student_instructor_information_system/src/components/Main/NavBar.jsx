import React,{Component} from 'react';
import './main.css';

export default class NavBar extends Component{
    render(){

        return <div className="topnav" id="myTopnav">
            <a href="/HomePage" className="active">SLIIT Course Web</a>
            <div className="dropdown">
                <button className="dropbtn">Faculties &nbsp;
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#1">Link 1</a>
                    <a href="#2">Link 2</a>
                    <a href="#3">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Support Services &nbsp;
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#1">Link 1</a>
                    <a href="#2">Link 2</a>
                    <a href="#3">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Academic Services &nbsp;
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#1">Link 1</a>
                    <a href="#2">Link 2</a>
                    <a href="#3">Link 3</a>
                </div>
            </div>
            <a href="#about" className="icon">&#9776;</a>

        </div>
    }
}