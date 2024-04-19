const myB = document.getElementById(`myB`);

myB.onclick = function () {
    const minNum = 1;
    const maxNum = 100;
    const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    console.log(answer)
    let attemts = 0;
    let guess;
    let running = true;

    while (running) {
        guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
        guess = Number(guess);

        if (isNaN(guess)) {
            l
            window.alert(`please enter a valid Number`)
        }
        else if (guess < 0 || guess > 100) {
            window.alert(`please enter a valid Number`)
        }
        else {
            attemts++;
            if (guess < answer) {
                window.alert(`TOO LOW! TRY AGAIN`)
            }
            else if (guess > answer) {
                window.alert(`TOO HIGH! TRY AGAIN`)
            }
            else {
                window.alert(`CORRECT! the answer was ${answer}.It took you ${attemts} attempts`)
                running = false;
            }
        }

    }
}
