// For statement that generates the numbers to be organized
for (x = 1; x < 101; x++) {
    // If statement to decide if the number is divisible by both 3 and 5 to change it to FizzBuzz
    if (x % 3 == 0 && x % 5 == 0) {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'> FizzBuzz </div>";
    }
    // Followup If statement if the number is only divisible by 3
    if (x % 3 == 0) {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'> Fizz </div>";
    }
    // Followup If statement if the number is only divisible by 5
    else if (x % 5 == 0) {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'> Buzz </div>";
    }
    // Else statement if the number is not divisible by 3 or 5
    else {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'>" + x + "</div>";
    }
}