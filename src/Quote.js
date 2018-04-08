import React, {Component} from 'react';

class Quote extends Component{

    constructor(props){
        super(props);
        this.state={
            quote:[],
            imageURL:'https://source.unsplash.com/random/500X300/?nature,water?'+Date.now()
        }
        this.fetchData=this.fetchData.bind(this);
    }

    fetchData(){
        fetch('https://talaikis.com/api/quotes/random/')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            this.setState({quote:response});
            this.setState({imageURL:this.state.imageURL+Date.now()})
        }

        );
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
            <div class="card">
            <img class="card-img-top" src={this.state.imageURL} />
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{this.state.quote.quote}</p>
                <footer class="blockquote-footer">{this.state.quote.author}</footer>
              </blockquote>
              <button type="button" class="btn btn-raised btn-primary" onClick={this.fetchData}>Get another</button>
            </div>
          </div>
        );
    }
}

export default Quote;