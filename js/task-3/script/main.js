let numberToGuess = Math.floor(Math.random() * 101);
let attemptCount = 0;

function guess() {
    let attempt = parseInt(document.getElementById("number").value);
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let hint = document.getElementById("hint");

    if (isNaN(attempt) || attempt < start.value || attempt > end.value)
        alert("Incorrect input");
    else {
        attemptCount++;
        console.log(attempt);
        if (attempt > numberToGuess) {
            hint.innerHTML = "Your variant is more than the right number.";
            end.value = attempt;
        }
        else if (attempt < numberToGuess) {
            hint.innerHTML = "Your variant is less than the right number.";
            start.value = attempt;
        }
        else {
            alert(`Congratulation! You guessed it in ${attemptCount} attempts.`);
            document.location.reload();
        }    
    }
}










