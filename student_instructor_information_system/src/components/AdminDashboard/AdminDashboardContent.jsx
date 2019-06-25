import React,{Component} from 'react';
import './DashboardStyles.css';

import axios from 'axios';

export default class AdminDashboardContent extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeNicNumber = this.onChangeNicNumber.bind(this);
        this.onChangeFacultyName = this.onChangeFacultyName.bind(this);
        this.onChangeIdNumber = this.onChangeIdNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            student_faculty: '',
            student_nic:'',
            student_id_number:''
        }
    }
    onChangeStudentName(e) {
        this.setState({
            student_name: e.target.value
        });
    }
    onChangeNicNumber(e) {
        this.setState({
            student_nic: e.target.value
        })
    }
    onChangeFacultyName(e) {
        this.setState({
            student_faculty: e.target.value
        })
    }
    onChangeIdNumber(e) {
        this.setState({
            student_id_number: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_name: this.state.student_name,
            student_nic: this.state.student_nic,
            student_faculty: this.state.student_faculty,
            student_id_number: this.state.student_id_number
        };
        axios.post('http://localhost:4000/student/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            student_name: '',
            student_nic: '',
            student_faculty: '',
            student_id_number: ''
        })
    }
    render() {
        return (
            <div className="dashboardContent">
                    <div className="row">
                        <div className="col-13">
                            <div className="sidenav">
                                <a href="#about">Add Student</a>
                                <a href="#services">Add Lecturer</a>
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

                            <div className="AddUser">
                                <div className="container">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-25">
                                                <label>Student Name:  </label>
                                            </div>
                                            <div className="col-75">
                                                <input
                                                    type="text"
                                                    value={this.state.student_name}
                                                    onChange={this.onChangeStudentName}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-25">
                                                <label>Faculty Name: </label>
                                            </div>
                                            <div className="col-75">
                                                <input type="text"
                                                       value={this.state.student_faculty}
                                                       onChange={this.onChangeFacultyName}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-25">
                                                <label>Student NIC Number: </label>
                                            </div>
                                            <div className="col-75">
                                                <input type="text"
                                                       value={this.state.student_nic}
                                                       onChange={this.onChangeNicNumber}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-25">
                                                <label>Student ID Number: </label>
                                            </div>
                                            <div className="col-75">
                                                <input type="text"
                                                       value={this.state.student_id_number}
                                                       onChange={this.onChangeIdNumber}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-25">
                                                <input type="submit" value="Register Student" />
                                            </div>
                                            <div className="col-75">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}