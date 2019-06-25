import React,{Component} from 'react';
import Content from "./LecturerDashboardContent";

export default class LecturerDashboardHandler extends Component{
    render(){
        return <div>
            <div className="row">
                <Content/>
            </div>
        </div>
    }
}