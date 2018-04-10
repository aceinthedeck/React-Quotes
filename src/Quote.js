import React, {Component} from 'react';
import $ from 'jquery';

class Quote extends Component{

    constructor(props){
        super(props);
        this.state={
            quote:'',
            author:'',
            imageURL:'https://source.unsplash.com/random/500X300/?nature,water?'+Date.now()
        }
        this.randomQuote=this.randomQuote.bind(this);
    }

    randomQuote(){

        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (response) {
            this.setState({ quote: response.quoteText, author: response.quoteAuthor });
          }.bind(this));
        
          this.setState({imageURL:'https://source.unsplash.com/random/500X300/?nature,water?'+Date.now()});
    }

    componentDidMount(){
        this.randomQuote();
    }

    render(){
        return(
            <div class="card">
            <img class="card-img-top" src={this.state.imageURL} />
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{this.state.quote}</p>
                <footer class="blockquote-footer">{this.state.author}</footer>
              </blockquote>
              <button type="button" class="btn btn-raised btn-primary" onClick={this.randomQuote}>Get another</button>
            </div>
          </div>
        );
    }
}

export default Quote;