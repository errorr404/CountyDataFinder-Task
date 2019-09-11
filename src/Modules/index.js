import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar';
import './Home.css';
import SearchBox from '../components/searchBox';
import Cards from '../components/Cards';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            country: null,
        }
    }
    setCurrentSearchValue = (name) => {
        if(name.length===2 || name.length===3){
            // it means it a county code
            axios.get(`https://restcountries.eu/rest/v2/alpha/${name}`)
            .then(res=>{
                this.setState({country:[{...res.data}]});
            }).catch(err=>{
                if(err.response.status === 404){
                    alert('Invalid Search')
                }
            });
        }
        else if(name.length>3){
            // this one is for the country
            axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res=>{
                this.setState({country:res.data});
            }).catch(err=>{
                if(err.response.status === 404){
                    alert('Invalid Search')
                }
            });
        }
    };
    componentDidMount(){
        // for getting all the county data
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res=>{
                this.setState({country:res.data});
            }).catch(err=>{
                if(err.response.status === 404){
                    alert('Invalid Search')
                }
            })
    }
    render() {
        console.log(this.state);
        const {country} = this.state;
        return (
            <div className="home">
                <NavBar />
                <SearchBox setCurrentSearchValue={this.setCurrentSearchValue} />
                {
                   country && country.map(item=> <Cards data={item}/>)
                }
                
            </div>
        );
    }
}

export default Home;