import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
//import { TransitionGroup } from 'react-transition-group';
//var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm


class RandomQuoteMachine extends React.Component {

    constructor(props) {
        super(props);
        this.quoteGenerator = this.quoteGenerator.bind(this);
        this.fadeOut = this.fadeOut.bind(this);
        this.state = ({
            quoteText: "",
            quoteAuthor: "",
            backgroundColor: "",
            oldColor: ""
        });

    }



    fadeOut() {
        const body = document.querySelector("body");
        const text = document.querySelector("#text");
        const author = document.querySelector("#author");
        text.className = "fade-out";
        author.className = "fade-out";
    }


    quoteGenerator() {
        const wrapper = document.querySelector("#site-wrapper");
        const text = document.querySelector("#text");
        const author = document.querySelector("#author");
        
        const rQuoteNumber = Math.floor(Math.random() * 16 ); //api now only returns 16 quotes
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
            return response.json();
        })
            .then(data => {
            let randomQuote = data[rQuoteNumber];
            let randomText = randomQuote.text;
            let randomAuthor = randomQuote.author;
            if (randomAuthor == null)  {
                randomAuthor = "Anonymous"
            };

            this.setState({
                quoteText: randomText,
                quoteAuthor: randomAuthor
            });


            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.setState({
                oldColor: this.state.backgroundColor,
                backgroundColor: randomColor
            });
            wrapper.style.backgroundColor = "#" + randomColor;
            text.className = "fade-in";
            author.className = "fade-in";
        }

                 );
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

            <div id = "site-wrapper" style={{
            backgroundColor: this.state.oldColor =! this.state.backgroundColor ? this.state.oldColor : this.state.backgroundColor,
            transition: "all .7s ease",
            WebkitTransition: "all .7s ease",
            MozTransition: "all .7s ease"
            }}>


            <div className = "container fade-in" id = "quote-box">
            <div className = "row">
            <div className = "col-1 text-left">
            <FontAwesomeIcon icon={faQuoteLeft} />
            </div></div>
            <div className = "row">
            <div className = "col-10 offset-1 text-center">
            <p className = "fade-in" id = "text">{this.state.quoteText}</p>
            </div>
            </div>
            <div className = "row">
            <div className = "col-12 col-md-12 text-right">
            <p className = "fade-in" id = "author">- {this.state.quoteAuthor}</p>
            </div>
            </div>

            <div id = "button-container" className = "row">
            <div className = "col-md-6 col-12 text-md-right order-md-2 text-center">
            <button className = "btn btn-primary btn-lg" id = "new-quote" onClick={() => {this.fadeOut(); setTimeout(() => {this.quoteGenerator()},500);}}>new quote</button>
</div>
<div className = "col-md-6 col-12 text-md-left order-md-1 text-center">
    <a id = "tweet-quote" href = "https://www.twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitterSquare} /></a>
<a id = "facebook-quote" href = "https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></a>
<a id = "email-quote" href = "mailto:"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
</div>

</div>

</div>
</div>

</body>
</html>

);};
}

export default RandomQuoteMachine;