let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [{
    quote: `"This is my greatest quote."`,
    person: `Annelies`,
}, {
    quote: `"I need more quotes"`,
    person: `Annelies`,
}, {
    quote: `"I should totally get a bot linked to this and update with quotes i select from slack"`,
    person : `Annelies`
}
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})