/* global $ */
/* global twttr $ */
var quotes = [
    "If you want me to take a dump in a box and mark it guaranteed, I will... I've got spare time.",
    "Brothers don't shake hands. Brothers gotta hug.",
    "Does this suit make me look fat?",
    "Are you talking?",
    "It's go time!",
    "Look mommy, the rhino's getting too close to the car!",
    "If I wanted a kiss, I'd call your mother!",
    "Did I catch a 'niner' in there?",
    "Housekeeping. You want mint for pillow?",
    "Ugh, I can actually hear you getting fatter.",
    "Yeah, and just a shade under a decade too. Allriiight.",
    "Did you eat a lot of paint chips when you were a kid?",
    "What'd you do?",
    "Get yourself a new map.",
    "Do you know where the weight room is? I'll check it out.",
    "Fat guy in a liiittle coat.  Fat guy in a little coooat.",
    "Richard, were you watching 'spanktrovision'?",
    "That's gonna leave a mark."
    ];

var currentQuote = '';

function newQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $('#quoteDisplay').html(currentQuote);
    $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+currentQuote).attr('target', '_blank');

}

$(function() {
	$('#hitme').click(function() {
		newQuote();
	});
});

twttr.widgets.load();






