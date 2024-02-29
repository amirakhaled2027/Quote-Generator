const quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    "“Insanity is doing the same thing, over and over again, but expecting different results.”",
]

const screenQuote = document.querySelector("#quotes");

function quoteGenerator() {
    const quote = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[quote];
    screenQuote.innerHTML = newQuote;

}