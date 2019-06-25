import React,{Component} from 'react';
import Content from "./StudentDashboardContent";

export default class StudentDashboardHandler extends Component{
    render(){
        return <div>
            <div className="row">
                <Content/>
            </div>
        </div>
    }
}