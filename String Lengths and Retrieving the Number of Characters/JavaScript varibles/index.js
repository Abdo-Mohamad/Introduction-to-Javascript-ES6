var totalNumber = 280;

var weriteText = prompt("Weritr a txt the limite is 280");

var catacterused = totalNumber - weriteText.length;

alert("You have written " + weriteText.length + " characters, you have " + catacterused + "characters left.");


var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;

if (tweet === null || tweetCount === 0) {
    alert(" You hava not wreite anything")
} else {
    alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining");
}