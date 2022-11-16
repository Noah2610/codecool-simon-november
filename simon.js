function sleep(milliseconds) {
    return new Promise((resolve) =>
        setTimeout(resolve, milliseconds),
    );
}

async function main() {
    function getRandomGameNumber() {
        return Math.ceil(Math.random() * 4);
    }

    function addRandomGameNumber() {
        pattern.push(getRandomGameNumber());
    }

    // 1. Print a short introduction message, game rules, how to play.
    console.log(
        "SIMON\n" +
            "  You will be given a pattern of numbers to memorize,\n" +
            "  then you must input the same numbers in order!\n" +
            "  Play by inputting numbers from 1-4 like this:\n" +
            "    1234",
    );

    await sleep(1000);
    console.clear();

    // 2. Generate a number pattern.
    //    Pick three random numbers and add them to our pattern.
    //    - initialize array
    //    - pick random integer
    const pattern = [];

    for (let i = 0; i < 3; i++) {
        addRandomGameNumber();
    }

    // 3. Display the number pattern.
    //    Printing each number, then waiting a bit, and hide the displayed pattern.

    for (let i = 0; i < pattern.length; i++) {
        console.log(pattern[i]);
        await sleep(750);
        console.clear();
        console.log("#");
        await sleep(150);
        console.clear();
    }

    // 4. Get user input.
    //    Let the user input one or multiple number(s) from 1 - 4.
    //    Store user input numbers.

    // 5. Check if the user input the correct pattern of numbers.
    //    If the pattern is correct, add random number to the existing pattern,
    //    and repeat.
    //    If wrong, reset game: reset score, clear pattern, generate a new pattern.
}

main();