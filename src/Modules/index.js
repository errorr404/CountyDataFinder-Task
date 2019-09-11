import React, { Component } from 'react';
import NavBar from '../components/navbar';
import './Home.css';
import SearchBox from '../components/searchBox';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            currentSearchValue:null,
        }
    }
    setCurrentSearchValue = (name) => this.setState({currentSearchValue:name});
    render() {
        console.log(this.state);
        return (
            <div className="home">
                <NavBar />
                <SearchBox setCurrentSearchValue={this.setCurrentSearchValue} />
            </div>
        );
    }
}

export default Home;