import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


class RandomQuoteMachine extends React.Component {

    constructor(props) {
        super(props);
        this.quoteGenerator = this.quoteGenerator.bind(this);
        this.state = {
            quoteText: "",
            quoteAuthor: "",
            backgroundColor: "#D67B60"
        };

    }





    quoteGenerator() {  
        let rQuoteNumber = Math.floor(Math.random() * 1644);
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
            return response.json();
        })
            .then(data => {

            let randomQuote = data[rQuoteNumber];
            let randomText = randomQuote.text;
            let randomAuthor = randomQuote.author;

            this.setState({
            quoteText: randomText,
            quoteAuthor: randomAuthor
        });
            
            

        });
        const wrapper = document.querySelector("#site-wrapper");
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.setState({
            backgroundColor: randomColor
        });
        wrapper.style.backgroundColor = "#" + randomColor;
    };    

    componentDidMount() {
        this.quoteGenerator();
    }

    render() {
        return (  

            <html lang="en">
            <head>
            <meta charset="utf-8"></meta>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <title>Olivera's Random Quote Machine</title>

            </head>

            <body> 

            <div id = "site-wrapper" style = {{backgroundColor: this.state.randomBackgroundColor}}>
            <div className = "container" id = "quote-box">
            <div className = "row">
            <div className = "col-12"><FontAwesomeIcon icon={faQuoteLeft} />
            <p id = "text" className = "text-center">{this.state.quoteText}</p>
            </div>
            </div>
            <div className = "row">
            <div className = "col-11">
            <p id = "author" className = "text-right">- {this.state.quoteAuthor}</p>
            </div>
            </div>

            <div id = "button-container" className = "row">
            <div className = "col-6 text-left">
            <a id = "tweet-quote" href = "https://www.twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a id = "facebook-quote" href = "https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a id = "email-quote" href = "mailto:"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
            </div>
            <div className = "col-6 text-right">
            <button className = "btn btn-primary btn-lg" id = "new-quote" onClick = {this.quoteGenerator}>new quote</button>
            </div>        
            </div>

            </div>
            </div>

            </body>
            </html>

        );};
}

export default RandomQuoteMachine;
