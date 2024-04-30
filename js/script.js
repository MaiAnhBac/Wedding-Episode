const countDownDate = new Date("May 17, 2024 21:20:00").getTime();
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("second").innerHTML= second;   
})