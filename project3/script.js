// array of predefined quotes
const simpleQuotes = [
    {
        name:'Linus Torvalds',
        quote:'"Talk is cheap. Show me the code"'
    },
    {
        name:'Harold Abelson, Structure and Interpretation of Computer Programs',
        quote:'"Programs must be written for people to read, and only incidentally for machines to execute."'
    },
    {
        name:'John Woods',
        quote:'"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live"'
    },
    {
        name:'Rick Cook, The Wizardry Compiled',
        quote:'"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."'
    },
    {
        name:'Larry Niven',
        quote:'"That\'s the thing about people who think they hate computers. What they really hate is lousy programmers."'
    },
    {
        name:'Muhammad Waseem',
        quote:'"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."'
    },
    {
        name:'Kent Beck',
        quote:'"I\'m not a great programmer; I\'m just a good programmer with great habits."'
    },
    {
        name:'Steve Jobs',
        quote:'"You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting."'
    },

];

// select DOM object

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
quoteAuthor.style.fontStyle = 'normal';

// eventListeners
quoteBtn.addEventListener('click',displayQuote);

// functions
function displayQuote(){
    let number = Math.floor(Math.random()*simpleQuotes.length);
    quote.innerHTML = simpleQuotes[number].quote;
    quoteAuthor.innerHTML = simpleQuotes[number].name;
}
