//alert('Hello World');

//Message Database ---------------------------------------------------------------------------------
const greetings = ['Hello.', 'Hi!', 'Hey!', 'Welcome.', 'Good day.', 'Hi there.'];
const message = ['How may I be of assistance?', 'How may I assist you?', 'What would you like to look up?', 'What\'s on your mind?', 'Let me assist you.'];
const motivationalQuotes = [
    {
        _name: 'Warren Buffett',
        _quote: '“Someone\'s sitting in the shade today because someone planted a tree a long time ago.”'
    },
    {
        _name: 'A.A. Milne',
        _quote: '“Rivers know this: there is no hurry. We shall get there some day.”'
    },
    {
        _name: 'Jason Fried',
        _quote: '“Small is not just a stepping-stone. Small is a great destination itself.”'
    },
    {
        _name: 'Benjamin Franklin',
        _quote: '“He that can have patience can have what he will.”'
    },
    {
        _name: 'Napoleon Hill',
        _quote: '“If you can\'t yet do great things, do small things in a great way.” ―Napoleon Hill'
    },
    {
        _name: 'Wayne Dyer',
        _quote: '“If you change the way you look at things, the things you look at change.”'
    }

];

//console.log(greetings.length)
//console.log(Math.floor(Math.random()*greetings.length) + 1)


//Randomisers -------------------------------------------------------------------------
getRandGreeting = () => {
    let randIndex = Math.floor(Math.random()*greetings.length);
    return randGreeting = greetings[randIndex];
}
//console.log(getRandGreeting());

getRandMessage = () => {
    let randIndex = Math.floor(Math.random()*message.length);
    return randMessage = message[randIndex];
}
//console.log(getRandMessage());

getRandQuoteObject = () => {
    let randIndex = Math.floor(Math.random()*motivationalQuotes.length);
    return randQuote = motivationalQuotes[randIndex];
}
//console.log(getRandQuoteObject());

//Outputs -------------------------------------------------------------------------
generateWelcomeMessage = () => {
    let randGreeting = getRandGreeting();
    let randMessage = getRandMessage();
    return `${randGreeting} ${randMessage}`
}
//console.log(generateWelcomeMessage());

generateQuoteSentence = () => {
    let randQuoteSentence = getRandQuoteObject();
    return `${randQuoteSentence._quote}`;
}
console.log(generateQuoteSentence());

generateQuoteName = () => {
    let randQuoteName = getRandQuoteObject();
    return `${randQuoteName._name}`;
}
console.log(generateQuoteName());

//DOM -------------------------------------------------------------------------
const welcomeMessage = document.querySelector('.welcome-message');
welcomeMessage.textContent = generateWelcomeMessage();
console.log(welcomeMessage.textContent);

// node welcome_message.js