
$(document).ready(function() {

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz";
    var carBrands, wins, remaining, guessedLetter;

    carBrands = ["FORD", "TOYOTA", "CHEVROLET", "HONDA", "NISSAN", "JEEP", "HYUNDAI", "KIA", "SUBARU", "GMC"];
    wins = 0;
    remaining = 13;
    guessedLetter = [];

    var computerOption = Math.floor(Math.random() * carBrands.length);
    var currentComputerOption = carBrands[computerOption];

    var elRemaining = document.getElementById("remaining");
    elRemaining.textContent = remaining;

    console.log(currentComputerOption);
    console.log(currentComputerOption.length);

    var repeatString = "";
    
    function repeatStringNumTimes(string, times) {
        while(times > 0) {
            repeatString += string;
            times--;
        };
        return repeatString;
    }
    var resultOfRepeatStringFunction = repeatString;

    var current = document.getElementById("currentWord");
    current.textContent = repeatStringNumTimes("_", currentComputerOption.length);
    console.log(repeatString)

    document.onkeyup = function(event) {
        
        var main = $("body");
        var userGuess = event.key;
        console.log(userGuess);

        var upperUserGuess = userGuess.toUpperCase();
        console.log(upperUserGuess);

        var rightGuess = currentComputerOption.indexOf(upperUserGuess);
        console.log(rightGuess);
        var rightGuessArr = [];

        if(rightGuess === -1) {
            if(remaining > 1) {
                remaining--;
                var elRemaining = document.getElementById("remaining");
                elRemaining.textContent = remaining;
            }else {
                alert("You didn't make it! Try again!");
                window.location.reload();
            }

            main.find("#guessedLetter").append(upperUserGuess + ", ");
            
        }else {

            console.log(repeatString[rightGuess])
            console.log(currentComputerOption[rightGuess])

            var wordArr = currentComputerOption.split("");

            var repeatArray = repeatString.split("");
            for (var i = 0; i < wordArr.length; i++){
                console.log(repeatArray)
                console.log(wordArr[i])
                if (upperUserGuess === wordArr[i]) {
                    repeatArray[i] = upperUserGuess;
                }
            }
            console.log(repeatArray);

            repeatString = repeatArray.join("");
            console.log(repeatString);
            
            var current = document.getElementById("currentWord");
            current.textContent = repeatString;

            if (repeatString === currentComputerOption) {
                wins++;
                var elWins = document.getElementById("wins");
                elWins.textContent = wins;
            }
        }
    }

});

