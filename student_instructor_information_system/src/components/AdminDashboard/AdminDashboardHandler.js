import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './DashboardStyles.css';

import NavBar from './AdminNavBar';
import Main from './AdminDashboardController';


class AdminDashboardHandler extends Component {
    render() {
        return (
            <div className="dashboardContent">
                <Router>
                    <div className="row">
                        <div className="col-13">
                            <NavBar/>
                        </div>
                        <div className="col-14">
                            <Main/>
                        </div>
                    </div>
                </Router>
            </div>


        )
    }
}

export default AdminDashboardHandler;
