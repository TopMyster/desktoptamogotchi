let food = 0;
let playc = 0;
let guessnumber = null;

function playSound() {
    const audio = new Audio('sound.wav');
    audio.play();
}

['s1', 's2', 's3'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', playSound);
});

function play() {
    playSound();
    document.getElementById('playscreen').style.display = 'block';
    document.getElementById('statsscreen').style.display = 'none';
    guessnumber = Math.floor(Math.random() * 6);
    console.log('Guess number:', guessnumber);
}

document.getElementById('subguess').addEventListener('click', function() {
    const input = Number(document.getElementById('textin').value);
    const guesss = document.getElementById('guesss');
    if (input === guessnumber) {
        playc = Math.min(playc + 1, 4);
        guesss.textContent = `${guessnumber} Correct`;
    } else {
        guesss.textContent = `${guessnumber} Wrong`;
    }
    updatePlayLevel();
});

function feed() {
    document.getElementById('statsscreen').style.display = 'none';
    document.getElementById('playscreen').style.display = 'none';
    food = Math.min(food + 1, 4);
    updateFoodLevel();
    animatePet('feed 3s');
}

function stats() {
    document.getElementById('statsscreen').style.display = 'block';
    document.getElementById('playscreen').style.display = 'none';
    updateFoodLevel();
    updatePlayLevel();
}

function updateFoodLevel() {
    const foodlevel = document.getElementById('foodlevel');
    if (!foodlevel) return;
    foodlevel.textContent = `Hungry: ${food}`;
}

function updatePlayLevel() {
    const playlevel = document.getElementById('playlevel');
    if (!playlevel) return;
    playlevel.textContent = `Activity: ${playc}`;
}

function animatePet(animation) {
    const pet = document.getElementById('pet');
    if (!pet) return;
    pet.style.animation = animation;
    pet.removeEventListener('animationend', pet._handler);
    pet._handler = function() {
        pet.style.animation = 'alive 3s infinite';
    };
    pet.addEventListener('animationend', pet._handler);
}

setInterval(() => {
    food = Math.max(food - 1, 0);
    updateFoodLevel();
    if (food === 1) playSound();
}, 600000);

setInterval(() => {
    playc = Math.max(playc - 1, 0);
    updatePlayLevel();
    if (playc === 1) playSound();
}, 500000);

function death() {
    const pet = document.getElementById('pet');
    if (pet) pet.src = 'death.png';
}
setInterval(death, Math.floor(Math.random() * (1814400000 - 604800000 + 1)) + 604800000);

window.onbeforeunload = function() {
    return "Leaving this page will reset the wizard";
};

window.play = play;
window.feed = feed;
window.stats = stats;