import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                <h1>Random Gif Generator</h1>
                <h3>by Chazz</h3>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}

export default Title;