import React, { Component } from 'react';
import GifImage from './GifImage';
import Title from './Title';
// this component serves as the form 
class Search extends Component {
    constructor(){
        super()
        this.state={
            info: null,
            userInput:'',
            info2: null,
            info3: null,
            title:null,
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault()
        const character = this.state.userInput
       
    
        const url = `https://api.giphy.com/v1/gifs/search?api_key=kSRfXgwbzEaX6F8BuWaoKoHFN6zcbKaX&q=${character}&limit=25&offset=0&rating=g&lang=en`

        try{
            const response = await fetch(url)
            const data = await response.json()
            var index = Math.floor(Math.random() * 25);
            this.setState({info:data.data[index].images.downsized.url})
            this.setState({info2:data.data[1].images.downsized.url})
            this.setState({info3:data.data[2].images.downsized.url})
            this.setState({title:data.data[index].title})
            console.log(this.state.info)
        }
        catch(err){
            return "try again"
        }
    }  

    handleChange = (e) =>{
        this.setState({userInput : e.target.value})
    }


    render() {
        return (
            <div className='search-comp'>
                <header></header>
                <div className="frame"><GifImage help={this.state.info} className="gif"/> </div>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="input">
                        <input type="text" name="search" value={this.state.userInput} onChange={this.handleChange} placeholder="Search by Name"/>
                        <button type="submit"> 
                            <h2>
                                SEARCH
                            </h2>
                        </button>
                    </div>
                </form>
                
                <Title title={this.state.title} />
                <footer></footer>

                
            </div>
        );
    }
}

export default Search;