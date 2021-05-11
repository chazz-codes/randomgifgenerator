import React, { Component } from 'react';

class GifImage extends Component {
    
    render() {
        return (
            <div>
                {this.props.help ? <div><img src={this.props.help}/></div>:null}
            </div>
        );
    }
}

export default GifImage;