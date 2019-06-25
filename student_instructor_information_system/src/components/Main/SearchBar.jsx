import React,{Component} from 'react';
import './main.css';

export default class SearchBar extends Component{
    render(){

        return <div className="searchBar">
            <div className="row">
                <div className="icon col-6">
                    <div className="icon">
                        <i className="fa fa-facebook"/>
                        <i className="fa fa-twitter"/>
                        <i className="fa fa-google"/>
                        <i className="fa fa-linkedin"/>
                        <i className="fa fa-youtube"/>
                        <i className="fa fa-instagram"/>
                    </div>
                    <div className="inq">
                        <h3>INQUIRIES? CALL: +94 11 754 4801</h3>
                    </div>
                </div>
                <div className="search col-6">
                    <form className="searchForm" action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search2"/><button type="submit"><i className="fa fa-search"/></button>
                    </form>
                </div>
            </div>
        </div>
    }
}