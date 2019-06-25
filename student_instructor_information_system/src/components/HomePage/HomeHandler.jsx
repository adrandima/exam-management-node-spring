import React,{Component} from 'react';
import Content from "./HomeContent";

export default class HomeHandler extends Component{
    render(){
        return <div>
            <div className="row">
                <Content/>
            </div>
        </div>
    }
}