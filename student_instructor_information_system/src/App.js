import React, { Component } from 'react';
import './App.css';

import Header from './components/Main/Header';
import NavBar from './components/Main/NavBar';
import Footer from './components/Main/Footer';
import Main from './components/main';
import Search from './components/Main/SearchBar';


class App extends Component {
    render() {
        return <div>
            <Search/>
            <div className="topLine">
            </div>
            <div className="abc">
            <Header/><NavBar/><Main/>
            </div>
            <div className="topLine">
            </div>
            <Footer/>
        </div>
    }
}

export default App;
