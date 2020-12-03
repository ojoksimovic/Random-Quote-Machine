
function QuotesAPI() {
    let rQuoteNumber = Math.floor(Math.random() * 1644);
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

let randomQuote = data[rQuoteNumber];
let randomText = randomQuote.text;
let randomAuthor = randomQuote.author;

    dataList = data.slice([0], [data.length-1]);
    
    console.log(randomText);
    console.log(randomAuthor);
});
};
QuotesAPI();
