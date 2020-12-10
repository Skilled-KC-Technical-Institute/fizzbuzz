let x; 
// Loops 1 - 100
for(x=1; x < 101; x++) {
    // divides each number by 3 and 5 and prints Fizzbuzz if its both divisible by 3 and 5
    
    if (x % 3 == 0 && x % 5 == 0) {
            console.log("FizzBuzz");
    }
     // divides each number by 3 and prints Fizz if its both divisible by 3 
    else if (x % 3 == 0) {
        console.log("Fizz");
    }
     // divides each number by 5 and prints Buzz if its both divisible by 5
    else if (x % 5 == 0) {
        console.log("Buzz");
    }

    // Prints the value of x
    else {
        console.log(x);
    }
}
