let listOfWords = ["оріхалк","адамантій","мезозой","поліомієліт","дота","вена"];

let word = listOfWords[Math.floor(Math.random() * listOfWords.length)];

let answerWord = [];
for (let i = 0; i < word.length; i++) {
    answerWord[i] = "_";
}

let attemptsLeft = 6; 

while (attemptsLeft > 0) {
    
    document.getElementById("word-container").textContent = answerWord.join(" ");
    document.getElementById("attempts-left").textContent = `Попыток осталось: ${attemptsLeft}`;

    let guess = prompt("Відгадайте букву або нажміть скасувати, щоб вийти з ігри");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Будь ласка, введіть тільки одну літеру");
    } else {
        let guessCorrect = false;

        for (let a = 0; a < word.length; a++) {
            if (word[a] === guess) {
                answerWord[a] = guess;
                remainedLetters--;
                guessCorrect = true;
            }
        }

       
        if (!guessCorrect) {
            attemptsLeft--;
        }
    }
}


document.getElementById("word-container").textContent = answerWord.join(" ");
document.getElementById("attempts-left").textContent = `Попыток осталось: ${attemptsLeft}`;

if (attemptsLeft > 0) {
    alert("Чудово, Ви виграли, було загадано слово: " + word);
} else {
    alert("Ви програли. Загадане слово було: " + word);
}