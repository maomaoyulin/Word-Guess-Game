
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
    console.log(resultOfRepeatStringFunction)

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
            var indices = [];

            for(var i=0; i<currentComputerOption.length;i++) {
                if (currentComputerOption[i] === upperUserGuess) {
                    indices.push(i);
                    rightGuessArr.push(upperUserGuess);
                    repeatString = repeatString.replace(repeatString.charAt(indices[0]), upperUserGuess); 
                    console.log(repeatString);
                    var current = document.getElementById("currentWord");
                    current.textContent = repeatString;

                }
            }
            console.log(indices);
            console.log(rightGuessArr);
        }
    }
});

