var counter = 1;

function myFunction(){
    var x = document.getElementById(counter);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    counter++;
    var x = document.getElementById(counter);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};