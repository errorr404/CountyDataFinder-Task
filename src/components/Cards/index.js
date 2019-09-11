import React, { Component } from 'react';
import './cards.css';

class Cards extends Component {
    constructor(){
        super()
        this.state = {
            displayCurrency:true,
            displayLanguage:true,
        }
    }
    handleShowCurrency = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            displayCurrency: !prevState.displayCurrency
        }))
    }
    handleShowLanguage = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            displayLanguage: !prevState.displayLanguage
        }))
    }
    render() {
        console.log(this.props.data);
        const { data } = this.props;
        const { displayCurrency, displayLanguage} = this.state;
        return (
            <div className="card">
                <div className="cardName">
                    <h2>{data.name}</h2>
                </div>
                <div className="cardItem">
                    <div className="cardItemInfo">
                    <i className="fa fa-flag cardIcon" aria-hidden="true"></i> 
                    <span>Country Code :</span>
                    </div>
                    <span className="detailsText">{data.alpha2Code}</span>
                </div>
                <div className="cardItem">
                    <div className="cardItemInfo">
                    <i class="fas fa-city"></i>
                    <span>Capital City:</span>
                    </div>
                    <span className="detailsText">{data.capital}</span>
                </div>
                <div className="cardItem">
                    <div className="cardItemInfo">
                    <i class="fas fa-globe"></i>
                    <span>Region :</span>
                    </div>
                    <span className="detailsText">{data.region}</span>
                </div>
                <div className="cardItemArray">
              
                <div className="cardItemInfo cardName" onClick={this.handleShowCurrency}>
                     <i class="fas fa-dollar-sign"></i>
                    <span>currency</span>
                    </div>
                    {
                       displayCurrency && data.currencies.map(currency=>{
                             return <div className="ArrayItem">
                            <div className="ArrayItemContent">
                                <span className="textAlign">Name:</span>
                                <span>{currency.name}</span>
                            </div>
                            <div className="ArrayItemContent">
                                <span className="textAlign">Code:</span>
                                <span>{currency.code}</span>
                            </div>
                            <div className="ArrayItemContent">
                                <span className="textAlign">Symbol:</span>
                                <span>{currency.symbol}</span>
                            </div>
                        </div>
                        })
                     
                    }
                </div>
                <div className="cardItemArray">
                <div className="cardItemInfo cardName" onClick={this.handleShowLanguage}>
                <i class="fas fa-language"></i>
                    <span>Language</span>
                    </div>
                    {
                       displayLanguage && data.languages.map(lang=>{
                            return  <div className="ArrayItem">
                            <div className="ArrayItemContent">
                                <span className="textAlign">Name:</span>
                                <span>{lang.name}</span>
                            </div>
                            <div className="ArrayItemContent">
                                <span className="textAlign">Native name:</span>
                                <span>{lang.nativeName}</span>
                            </div>
                        </div>
                        })
                      
                    }
                </div>
               
            </div>
        );
    }
}

export default Cards;