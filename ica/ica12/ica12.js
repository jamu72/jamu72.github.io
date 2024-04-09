const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
const btn = document.querySelector("#js-new-quote");
const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener("click", getAnswer);
btn.addEventListener("click", getQuote);
const answerTxt = document.querySelector('#js-answer-text');


let answer = '';


async function getQuote(){
    console.log("Button to get new quote has been clicked");
    try{
        const response = await fetch(endpoint);
        // if(!response.ok){
        //     throw Error(response.statusText);
        // }
        const json = await response.json();
        console.log(json['question']);
        displayQuote(json['question']);
        console.log(json['answer']);
        answer = json['answer'];
        answerTxt.textContent = '';

    }catch(err){
        console.log(err)
        alert("Failed to fetch the new quote");
    }
    console.log("get quote");
}

function displayQuote(quote){
    console.log("Hello in quote");
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer(){
    answerTxt.textContent = answer;
    console.log("Hello in answer");
}

