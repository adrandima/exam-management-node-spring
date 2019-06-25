import React,{Component} from 'react';
import './DashboardStyles.css';

export default class LecturerDashboardContent extends Component {
    render() {
        return (<div className="dashboardContent">
                    <div className="row">
                        <div className="col-13">
                            <div className="sidenav">
                                <a href="#about">About</a>
                                <a href="#services">Services</a>
                                <a href="#clients">Clients</a>
                                <a href="#contact">Contact</a>
                                <button className="dropdown-btn">Dropdown
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-container">
                                    <a href="#1">Link 1</a>
                                    <a href="#2">Link 2</a>
                                    <a href="#3">Link 3</a>
                                </div>
                                <a href="#contact">Search</a>
                            </div>
                        </div>
                        <div className="col-14">
                        </div>
                    </div>
                </div>
        )
    }
}