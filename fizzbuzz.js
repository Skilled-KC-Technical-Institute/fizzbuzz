"use strict"

let ptag=document.getElementById("para");

//function buzzWork () {

for (let i=1;i<=100;i++) {}
  if (i%3===0 && i%5===0){
    //show fizzbuzz
    ptag.innerHTML+="FizzBuzz";
  } else if (i%3===0) {
    //show fizz
    ptag.innerHTML+="Fizz";

  } else if (i%5===0){
    ptag.innerHTML+="Buzz";

  }
  else {
    ptag.innerHTML+=i;
     //show i
  }
 ptag.innerHTML+= "<br>";
 ptag.innerHTML+= "<br>";
}
  //}
//buzzWork();