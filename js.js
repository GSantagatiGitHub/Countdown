// set date we're counting to (opening date)
let openingDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

// Get today's date and time
let now = new Date().getTime();

// Find the distance between now and the count down date
let distance = openingDate - now;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an html element (div)
document.getElementById("countdown").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

// If the count down ends, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "OPENING DAY!"
}
}, 1000);