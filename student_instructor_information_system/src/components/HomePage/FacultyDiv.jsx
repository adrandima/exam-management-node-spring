import React,{Component} from 'react';

export default class FacultyDiv extends Component{
    render(){
        var divStyle={};
        if(this.props.title === "COMPUTING"){
            divStyle = {
                backgroundColor:'#008CBA'
            };
        }else if(this.props.title === "BUSINESS"){
            divStyle = {
                backgroundColor:'#f1592a'
            };
        }else if(this.props.title === "ENGINEERING"){
            divStyle = {
                backgroundColor:'#8ec63f'
            };
        }else if(this.props.title === "HUMANITIES AND SCIENCES"){
            divStyle = {
                backgroundColor:'#92499e'
            };
        }else if(this.props.title === "GRADUATE STUDIES"){
            divStyle = {
                backgroundColor:'#29a294'
            };
        }

        return <div className="col-2">
                    <img src={this.props.image} alt={this.props.title} className="image"/>
                        <div className="desc" style={divStyle}><b>{this.props.title}</b></div>
                        <div className="overlay" style={divStyle}>
                            <div className="text">
                                <h2>{this.props.title}</h2><p>{this.props.description}</p>
                            </div>
                        </div>
                </div>
    }
}