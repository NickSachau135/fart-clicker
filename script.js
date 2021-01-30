"use strict";

let farts = 0;
let fartRate = 0;

let milk = 0;
let milkBefore = 0;
let beans = 0;
let energy = 0;
let coffee = 0;
let laxative = 0;

let audio = document.createElement('audio')
body.appendChild(audio)

document.getElementById('poopFart').addEventListener('click', farting);
document.getElementById('milk').addEventListener('click', milkItem)
document.getElementById('beans').addEventListener('click', beansItem)
document.getElementById('energy').addEventListener('click', energyItem)
document.getElementById('coffee').addEventListener('click',coffeeItem)
document.getElementById('laxative').addEventListener('click', laxativeItem)

let playsound = function() {
    audio.setAttribute("src", "fart.mp3");
    audio.play()
}

function farting() {
    farts++;
    document.getElementById('farts').textContent = farts;
    document.getElementById('poopFart').style.transform = "scale(.95)";
    setTimeout(function(){document.getElementById('poopFart').style.transform = "scale(1)"}, 100)
    playsound()
}

// fartRate = (seconds/fart) = (fart / seconds)

function milkItem() {
    if(farts >= 10) {
        farts -= 10;
        document.getElementById('farts').textContent = farts;
        milk++;
        fartRate += 2500;
        setInterval(function(){farting()}, fartRate);
        document.getElementById("fartRate").textContent = `${(fartRate / 10000)} farts per seconds`
    }
}

function beansItem() {
    if(farts >= 100) {
        farts -= 100;
        beans++;
        fartRate += 5000;
        setInterval(function(){farting()}, fartRate);
        document.getElementById("fartRate").textContent = `${fartRate / 1000} farts per seconds`
    }
}

function energyItem() {
    if(farts >= 500) {
        farts -= 500;
        energy++;
        fartRate += 10000;
        setInterval(function(){farting()}, fartRate);
        document.getElementById("fartRate").textContent = `${fartRate / 1000} farts per seconds`
    }
}
function coffeeItem() {
    if(farts >= 1000) {
        farts -= 1000;
        energy++;
        fartRate += 20000;
        setInterval(function(){farting()}, fartRate);
        document.getElementById("fartRate").textContent = `${fartRate / 1000} farts per seconds`
    }
}
function laxativeItem() {
    if(farts >= 5000) {
        farts -= 5000;
        energy++;
        fartRate += 50000;
        setInterval(function(){farting()}, fartRate);
        document.getElementById("fartRate").textContent = `${fartRate / 1000} farts per seconds`
    }
}


function unlockLaxitives() {
// unlock laxatives at certain amount of farts
}