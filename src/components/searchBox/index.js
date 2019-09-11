import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  handleState = (e) =>{
      e.preventDefault();
      this.setState({name:e.target.value});
  }
  handlePassValue = (e) => {
      e.preventDefault();
      const { name } = this.state; 
      this.props.setCurrentSearchValue(name);
  }
  render() {
    const { name } = this.state;
    return (
      <div className="searchBox">
        <input
          className="inputBox"
          placeholder="Enter Country name or Code"
          type="text"
          value={name}
          onChange={this.handleState}
            onKeyPress={e=> {if(e.key==='Enter'){
                this.handlePassValue(e);
            }}}
        />
        <i
          className="fas fa-search searchIcon"
          onClick={this.handlePassValue}
        ></i>
      </div>
    );
  }
}

export default SearchBox;
