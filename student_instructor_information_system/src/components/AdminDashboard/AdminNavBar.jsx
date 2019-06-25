import React,{Component} from 'react';
import './DashboardStyles.css';
import {Link } from 'react-router-dom';

export default class AdminNavBar extends Component {
    render() {
        return (
            <div className="sidenav">
                        <nav>
                            <Link to={"/AddStudent"}>Add Student</Link>
                            <Link to={"/AddLecturer"}>Add Lecturer</Link>
                            <Link to={"/ViewStudents"}>View Students</Link>
                        </nav>
            </div>
        )
    }
}