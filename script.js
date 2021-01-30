"use strict";

let farts = 1000;
document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
let fartRate = 0;

let milk = 0;
let beans = 0;
let energy = 0;
let coffee = 0;
let laxative = 0;
let fartRateRunning = false;


let audio = document.createElement('audio')
body.appendChild(audio)

poopFart.addEventListener('click', farting);
poopFart.addEventListener('mousedown', function () {
    this.style.transform = "scale(.95)";
});
poopFart.addEventListener('mouseup', function () {
    this.style.transform = "scale(1)";
});

document.getElementById('milk').addEventListener('click', milkItem)
document.getElementById('beans').addEventListener('click', beansItem)
document.getElementById('energy').addEventListener('click', energyItem)
document.getElementById('coffee').addEventListener('click', coffeeItem)
document.getElementById('laxative').addEventListener('click', laxativeItem)

let playsound = function () {
    audio.setAttribute("src", "media/Fart.mp3");
    audio.play()
}

function farting() {
    farts++;
    document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
    setTimeout(function () { document.getElementById('poopFart').style.transform = "scale(1)" }, 100)
    // playsound()
}

function addFartRate(){
    if(fartRate != 0){
        farts += (fartRate / 100)
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
    }
}
setInterval(addFartRate, 10)

function milkItem() {
    if (farts >= 10) {
        farts -= 10;
        milk++;
        fartRate += 0.1;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        if (fartRate == 1 || fartRate == 0) {
            document.getElementById(`fartRate`).textContent = `${Math.round(fartRate * 10) / 10} fart per second`;
        } else {
            document.getElementById(`fartRate`).textContent = `${Math.round(fartRate * 10) / 10} farts per second`;
        }
    }
}

function beansItem() {
    if (farts >= 100) {
        farts -= 100;
        beans++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 1;
        document.getElementById(`fartRate`).textContent = `${Math.round(fartRate * 10) / 10} farts per second`;
    }
}
function energyItem() {
    if (farts >= 500) {
        farts -= 500;
        energy++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 10;
        document.getElementById(`fartRate`).textContent = `${Math.round(fartRate * 10) / 10} farts per second`;
    }
}
function coffeeItem() {
    if (farts >= 1000) {
        farts -= 1000;
        energy++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 25;
        document.getElementById(`fartRate`).textContent = `${Math.round(fartRate * 10) / 10} farts per second`;
    }
}
function laxativeItem() {
    if (farts >= 5000) {
        farts -= 5000;
        energy++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 100;
        document.getElementById(`fartRate`).textContent = `${Math.round(fartRate * 10) / 10} farts per second`;
    }
}


function unlockLaxitives() {
    // unlock laxatives at certain amount of farts
}

