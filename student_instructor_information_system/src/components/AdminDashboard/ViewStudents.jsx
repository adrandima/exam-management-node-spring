
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './studentDetails';

export default class ViewStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/student')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.students.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="container">
                <h3 align="center">Students List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>NIC</th>
                        <th>ID Number</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}