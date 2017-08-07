import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component{
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        );
    }
}
