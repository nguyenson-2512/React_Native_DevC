var target = Math.floor(Math.random() * 100) + 1
var pastGuesses = ''
var count = 10

function myFunction() {
    var yourInput = document.getElementById("yourNumber").value
    //console.log(target)
    count--

    if(yourInput == target) {
        document.getElementById("message").innerHTML = "Congratulations!! You guessed correctly."
        document.getElementById("message").style.background = "green"
    }
    else if(yourInput < target) {
        document.getElementById("message").innerHTML = "Your guess was too low, guess higher. You have " + count +" left"
        document.getElementById("message").style.background = "red"
    }
    else if(yourInput > target) {
        document.getElementById("message").innerHTML = "Your guess was too high, guess lower. You have " + count +" left"
        document.getElementById("message").style.background = "red"
    }

    if(count == 0) {
        alert("You lose! The right choice is " + target)
        location.reload()
    }

    pastGuesses = pastGuesses + yourInput + '<br>'
    document.getElementById("pastGuesses").innerHTML = pastGuesses
}