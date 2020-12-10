/*
PSUEDO CODE
Print 1-47 in console
if the number is divisible by 3
print Buzz
If the number is divisble by 5
print Fizz
If number is divisble by 3 AND 5
print BuzzFizz
Otherwise
print the number
*/
// variables

let msg = "";
for (x = 1; x <101; x++) {
    if (x % 3 == 0 && x % 5 == 0) msg += "FizzBuzz<br>";
        
    
    if (x % 3 == 0) {
        msg += "Fizz<br>";
        }

 else if (x % 5== 0) {
     msg += "Buzz<br>";
    
    }
    else {
        msg += x + "<br>";
    }
}
    document.querySelector("#x").innerHTML=msg;
    





