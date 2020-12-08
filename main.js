for (x = 1; x < 101; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'> fuzzbuzz </div>";
    }
    if (x % 3 == 0) {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'> fuzz </div>";
    }
    else if (x % 5 == 0) {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'> buzz </div>";
    }
    else {
        document.getElementById("numbers").innerHTML += "<div class = 'col-2 number'>" + x + "</div>";
    }
}