import {FilePond} from "react-filepond";
import React,{Component} from 'react';
import 'filepond/dist/filepond.min.css';


export default class AddAssignment extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){

    }

    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <h1 className="App-title">Add Assignment</h1>
                </header>

                <FilePond
                    allowMultiple={true}
                    name={"file"}
                    server="http://localhost:4000/assignment"
                />

            </div>
        )
    }
}