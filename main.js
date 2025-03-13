function getRandomQuote() {
    const axeQuotes = [
        "What’s the point of having f*** you money if you never say f*** you?",
        "I like fear. It’s a great motivator.",
        "When I walk into a room, it’s like being a woman with a perfect set of tits.",
        "I don’t play chess. I knock over the board.",
        "You don’t get to where I am without knowing how to read a f***ing room.",
        "I don’t lose. I don’t even leave it to chance.",
        "The only enemy more dangerous than a man with unlimited resources is one with nothing to lose.",
        "Loyalty is a line item. You pay for it like anything else.",
        "I’m not here to make friends. I’m here to make money.",
        "The best revenge is your own success, served cold."
    ];
    const randomIndex = Math.floor(Math.random() * axeQuotes.length);
    console.log(`Bobby Axelrod says: "${axeQuotes[randomIndex]}"`);
}

// Run the function
getRandomQuote();
