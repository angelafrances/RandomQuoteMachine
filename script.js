var quotes = [
    "I raise up my voice—not so I can shout, but so that those without a voice can be heard...we cannot succeed when half of us are held back. ―Malala Yousafzai",
    "If you want something said, ask a man; if you want something done, ask a woman. —Margaret Thatcher",
    "I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay. ―Madonna",
    "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent. —Madeleine Albright",
    "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength. —G.D. Anderson",
    "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass. —Maya Angelou",
    "Women belong in all places where decisions are being made... It shouldn't be that women are the exception. —Ruth Bader Ginsburg",
    ]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
