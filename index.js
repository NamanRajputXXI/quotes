const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

//hide laoding 

//show newQuote
function newQuote(){
   
    //pick a random quote from api quotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //check if author field is blanck and replace it with unknown 
  if(!quote.author){
    authorText.textContent = 'unknown'
  }else{
    authorText.textContent = quote.author;
  }
  // check quote lenght to detemine the styling if 
  if(quote.text.length >50){
    quoteText.classList.add('long-quote');

  }else{
    quoteText.classList.remove('long-quote');

  }

   quoteText.textContent = quote.text;

   
}
async function  getQuotes(){
    
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl)
        apiQuotes= await response.json()
      newQuote()

    } catch(error){
        alert(error)
       //handling the error
    }
}
//tweet
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}

// everntListenrer
newQuoteBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click', tweetQuote)




//onLoad

getQuotes();