const endpoint = 'https://dog.ceo/api/breeds/image/random';
const btn = document.querySelector("#js-new-quote");
const answerBtn = document.querySelector('#js-tweet');
const picture = document.querySelector('#picture')
answerBtn.addEventListener("click", replacePicture);
btn.addEventListener("click", getPicture);

let answer = '';


async function getPicture(){
    console.log("Button to get new quote has been clicked");
    try{
        const response = await fetch(endpoint);
        // if(!response.ok){
        //     throw Error(response.statusText);
        // }
        const json = await response.json();
        console.log(json);
        imageSrc = json['message'];
        console.log(imageSrc);
        picture.src = imageSrc;
        // displayQuote(json['question']);
        // console.log(json['answer']);
        // answer = json['answer'];

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

function replacePicture(){
    picture.src=("huhCat.jpg");
    
}

