let number = Math.floor(Math.random() * 1000 + 1)
let guesses = 0
let alreadyGuessed = []
let a = 0

document.getElementById("submit").onclick = function () {
    var guess = window.document.getElementById("guess").value;
    Number(guess)
    if (alreadyGuessed.includes(guess)) {
        alert("You have already guessed " + guess + "!")
    }
    else {
        guesses++
        alreadyGuessed[a] = guess
        a++
        if (guess < number) {
            alert("too low")
        }
        if (guess > number) {
            alert("too High")
        }
        if (guess === number + "") {
            if (guesses === 1) {
                alert("Correct it ONLY took you " + guesses + " guess! YOUR INSANE!!!")
            }
            else {
                alert("Correct it took you " + guesses + " guesses!")
            }
        }
    }
    console.log(alreadyGuessed, number, guesses)
}

document.getElementById("reset").onclick = function () {
    number = Math.floor(Math.random() * 1000 + 1)
    guesses = 0
    a = 0
    alreadyGuessed = []
    alert("The game has been reset")
}


