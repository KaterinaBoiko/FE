let numberToGuess = Math.floor(Math.random() * 101);
let attemptCount = 0;
let compAttemptCount = 0;
let compNumber = document.getElementById("compNumber");
compNumber.value = Math.floor(Math.random() * 101);
document.getElementsByClassName("computer_guesing")[0].classList.add("disabled");

function guess() {
    let attempt = parseInt(document.getElementById("number").value);
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let hint = document.getElementById("hint");

    if (isNaN(attempt) || attempt < start.value || attempt > end.value)
        alert("Incorrect input");
    else {
        attemptCount++;
        if (attempt > numberToGuess) {
            hint.innerHTML = "Your variant is more than the right number.";
            end.value = attempt-1;
        }
        else if (attempt < numberToGuess) {
            hint.innerHTML = "Your variant is less than the right number.";
            start.value = attempt+1;
        }
        else {
            alert(`Congratulation! You guessed it in ${attemptCount} attempts.`);
            document.location.reload();
        }
        document.getElementsByClassName("user_guessing")[0].classList.add("disabled");
        document.getElementsByClassName("computer_guesing")[0].classList.remove("disabled");
    
    }
}

function less(){
    compAttemptCount++;
    compStart.value = compNumber.value + 1;
    max = parseInt(compEnd.value);
    min = parseInt(compStart.value);
    compNumber.value = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementsByClassName("user_guessing")[0].classList.remove("disabled");
    document.getElementsByClassName("computer_guesing")[0].classList.add("disabled");

}

function more(){
    compAttemptCount++;
    compEnd.value = compNumber.value - 1;
    max = parseInt(compEnd.value);
    min = parseInt(compStart.value);
    compNumber.value = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementsByClassName("user_guessing")[0].classList.remove("disabled");
    document.getElementsByClassName("computer_guesing")[0].classList.add("disabled");
}

function guessedUserNumber(){
    compAttemptCount++;
    alert(`Computer guessed it in ${compAttemptCount} attempts.`);
    document.location.reload();
}









