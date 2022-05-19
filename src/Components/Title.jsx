import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="title">
                <h1>Random Gif Generator</h1>
                <h3>by Chazz</h3>
                you can click search multiple times for one entry
                <div className="dynamic">
                    <small>{this.props.title ? this.props.title : "No Title Available"}</small>
                </div>
            </div>
        );
    }
}

export default Title;