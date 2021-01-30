"use strict";

let farts = 500;
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
poopFart.addEventListener('mousedown', function(){
    this.style.transform = "scale(.95)";
});
poopFart.addEventListener('mouseup', function(){
    this.style.transform = "scale(1)";
});

document.getElementById('milk').addEventListener('click', milkItem)
document.getElementById('beans').addEventListener('click', beansItem)
document.getElementById('energy').addEventListener('click', energyItem)
document.getElementById('coffee').addEventListener('click',coffeeItem)
document.getElementById('laxative').addEventListener('click', laxativeItem)

let playsound = function() {
    audio.setAttribute("src", "media/Fart.mp3");
    audio.play()
}

function addFartRate(){
    for(let i = 0; i < fartRate; i++){
        farts += 1;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
    }
    if(fartRate == 1){
        document.getElementById(`fartRate`).textContent = `${fartRate} fart per second`;
    }else{
        document.getElementById(`fartRate`).textContent = `${fartRate} farts per second`;
    }
}



function farting() {
    farts++;
    document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
    setTimeout(function(){document.getElementById('poopFart').style.transform = "scale(1)"}, 100)
    playsound()
}

function milkItem() {
    if(farts >= 10) {
        farts -= 10;
        milk++;
        fartRate += 0.1;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        if(fartRate == 1 || fartRate == 0){
            document.getElementById(`fartRate`).textContent = `${fartRate} fart per second`;
        }else{
            document.getElementById(`fartRate`).textContent = `${fartRate} farts per second`;
        }
        if(fartRate != 0 && !fartRateRunning){
            setInterval(function(){addFartRate()}, (1000 / fartRate))
            fartRateRunning = true;
        }
    }
}

function beansItem() {
    if(farts >= 100) {
        farts -= 100;
        beans++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 1;
        document.getElementById(`fartRate`).textContent = `${fartRate} farts per second`;
        if(fartRate != 0 && !fartRateRunning){
            setInterval(function(){addFartRate()}, (1000 / fartRate))
            fartRateRunning = true;
        }
    }
}
function energyItem() {
    if(farts >= 500) {
        farts -= 500;
        energy++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 10;
            document.getElementById(`fartRate`).textContent = `${fartRate} farts per second`;
            if(fartRate != 0 && !fartRateRunning){
    setInterval(function(){addFartRate()}, (1000 / fartRate))
    fartRateRunning = true;
}
    }
}
function coffeeItem() {
    if(farts >= 1000) {
        farts -= 1000;
        energy++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 25;
            document.getElementById(`fartRate`).textContent = `${fartRate} farts per second`;
            if(fartRate != 0 && !fartRateRunning){
    setInterval(function(){addFartRate()}, (1000 / fartRate))
    fartRateRunning = true;
}
    }
}
function laxativeItem() {
    if(farts >= 5000) {
        farts -= 5000;
        energy++;
        document.getElementById('farts').textContent = `${Math.floor(farts)} farts`;
        fartRate += 100;
            document.getElementById(`fartRate`).textContent = `${fartRate} farts per second`;
            if(fartRate != 0 && !fartRateRunning){
    setInterval(function(){addFartRate()}, (1000 / fartRate))
    fartRateRunning = true;
}
    }
}


function unlockLaxitives() {
// unlock laxatives at certain amount of farts
}

