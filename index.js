// get the elements from the dom 


const qoutetext = document.getElementById("qoute");

const qouteauthor = document.getElementById("auhtor");

const newqoutebutton = document.getElementById("new-qoute");

const tweetqoutebutton = document.getElementById("tweet-qoute");

// array of the qoutes 

const qoute = [
    {
        text:"The only way to do great work is to love what you do",
        author:"Steve Jobs"
    },
     {
        text:"Success is most often achieved by those who don’t know that failure is inevitable",
        author:"Coco Chanel"
     }
    ,
     {
        text:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing",
        author:"Aristotol"
     }
    ,
     {
        text:"I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself",
        author:"Albert Einstein"
     }
];

// generate the random qoutes 

function getRandomQoute(){
    return qoute[Math.floor(Math.random()*qoute.length)]
}

function displayQoute(){
    const {text,author} = getRandomQoute();
    qoutetext.textContent = text ;
     qouteauthor.textContent = author;
}

function tweetqoute(){
    const tweettext  = `${qoutetext.textcontent} - ${qouteauthor.textcontent}`;
    const tweeturl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweettext)}`;
    window.open(tweeturl);
}

//  event listner 

newqoutebutton.addEventListener("click", displayQoute);
tweetqoutebutton.addEventListener("click", tweetqoute);

// initial qoute dispaly

 displayQoute();
