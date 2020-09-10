var target = Math.floor(Math.random() * 100) + 1
var pastGuesses = ''
var guessRemaining = 10
var button = document.getElementById('guessButton')

const reset = () => {
    let loadingTimer = 5
    setInterval(() => {
        if(loadingTimer <= 0) {
            clearInterval()
            location.reload()
        } else {
            document.getElementById("notification").innerHTML = `Reload game after ${loadingTimer}`
        }
        loadingTimer -= 1
    },1000)
}

button.addEventListener('click', function() {
    var yourInput = document.getElementById("yourNumber").value
    //console.log(target)
    guessRemaining--

    if(yourInput == target) {
        document.getElementById("message").innerHTML = "Congratulations!! You guessed correctly."
        document.getElementById("message").style.background = "green"
        document.getElementById("notification").innerHTML = "---------------------"
        reset()
    }
    else if(yourInput < target) {
        document.getElementById("message").innerHTML = `Your guess was too low, guess higher. You have ${guessRemaining} left`
        document.getElementById("message").style.background = "red"
    }
    else if(yourInput > target) {
        document.getElementById("message").innerHTML = `Your guess was too high, guess lower. You have ${guessRemaining} left`
        document.getElementById("message").style.background = "tomato"
    }

    if(guessRemaining == 0) {
        document.getElementById("message").innerHTML = `You lose! The right choice is ${target}`
        document.getElementById("message").style.background = 'tomato'
        document.getElementById("guessButton").disabled = true
        reset()
    }

    pastGuesses = pastGuesses + yourInput + '<br>'
    document.getElementById("pastGuesses").innerHTML = pastGuesses
    document.getElementById("pastGuesses").style.textAlign = 'center'
})
