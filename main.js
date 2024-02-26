// give credit else you randiputra

const quoteText = document.querySelector('.quote'),
author = document.querySelector('.author .name'),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
quoteBtn = document.querySelector("button");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} By - ${author.innerText}`;
    window.open(tweetUrl,"_blank");
});

quoteBtn.addEventListener("click", randomQuote);


// give credit to dilop
