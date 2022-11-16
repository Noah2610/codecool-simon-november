// 1. Print a short introduction message, game rules, how to play.
console.log(
    "SIMON\n" +
    "  You will be given a pattern of numbers to memorize,\n" +
    "  then you must input the same numbers in order!\n" +
    "  Play by inputting numbers from 1-4 like this:\n" +
    "    1234"
);

// 2. Generate a number pattern.
//    Pick three random numbers and add them to our pattern.
//    - initialize array
//    - pick random integer
const pattern = [];

function getRandomGameNumber() {
    return Math.ceil(Math.random() * 4);
}

function addRandomGameNumber() {
    pattern.push(getRandomGameNumber());
}

for (let i = 0; i < 3; i++) {
    addRandomGameNumber();
}

// 3. Display the number pattern.
//    Printing each number, then waiting a bit, and hide the displayed pattern.

// 4. Get user input.
//    Let the user input one or multiple number(s) from 1 - 4.
//    Store user input numbers.

// 5. Check if the user input the correct pattern of numbers.
//    If the pattern is correct, add random number to the existing pattern,
//    and repeat.
//    If wrong, reset game: reset score, clear pattern, generate a new pattern.