var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;

if (tweet === null || tweetCount === 0) {
    alert(" You hava not wreite anything")
} else if (tweetCount >= 280) {
    alert("Just you can use 280 characters")
} else {
    alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining");
}


alert(tweet.split(0,280));


var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);