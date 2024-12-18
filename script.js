let wordsArray = [];
let i = 0;

function addWord() { 
    let words;

    do {
        words = prompt("Enter a word:" , " ");
        if (words != "done") {
            wordsArray.push(words);
        }

        } while (words != "done");
    }

function Guess() {
    let guess;
    let tries = 5;

   while (tries > 0) {
        guess = prompt("Guess a word:");

        if (wordsArray.includes(guess)) {
            alert("Correct guess!");
            return;
        }
        else {
            tries--;
            alert(`Wrong guess! You have ${tries} tries left.`);
        }
    }

    alert("No more tries left. try again!");
   
}


function displayWords() {
    document.getElementById("word").innerHTML = wordsArray;

}