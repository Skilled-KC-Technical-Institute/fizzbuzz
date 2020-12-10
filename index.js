let msg = "";
for (x = 1; x < 101; x++) {
  if (x % 3 == 0 && x % 5 == 0)
    msg += "<span class='FizzBuzz'>FizzBuzz</span><br>";

  if (x % 3 == 0) {
    msg += "<span class='Fizz'>Fizz</span><br>";
  } else if (x % 5 == 0) {
    msg += "<span class='Buzz'>Buzz</span><br>";
  } else {
    msg += x + "<br>";
  }
}
document.querySelector("#x").innerHTML = msg;
