let food = 0
let playc = 0
let guessnumber = null
 function sound() {
    let audio = new Audio('sound.wav');
    audio.play();
 }
document.getElementById('s1').addEventListener('click', sound);
document.getElementById('s2').addEventListener('click', sound);
document.getElementById('s3').addEventListener('click', sound);


function play() {
    let audio = new Audio('sound.wav')
    document.getElementById('playscreen').style.display = 'block'
    document.getElementById('statsscreen').style.display = 'none'
 guessnumber = Math.round(Math.random() * 5)
    console.log(guessnumber)
    }
    document.getElementById('subguess').addEventListener('click', function() {
    if (Number(document.getElementById('textin').value) === guessnumber) {
        playc += 1
        document.getElementById('guesss').textContent = guessnumber + ' Correct'
    } else {
         document.getElementById('guesss').textContent = guessnumber + ' Wrong'
    }
    if (playc > 4) {
        document.getElementById('playlevel').textContent = "Activity: \n4"
    }
    if (playc == 1) {
        document.getElementById('playlevel').textContent  = "Activity: \n\n\n\n2"
    }
    if (playc == 2) {
        document.getElementById('playlevel').textContent  = "Activity: \n2"
    }
    if (playc == 3) {
        document.getElementById('playlevel').textContent  = "Activity: \n3"
    }
    if (playc == 4) {
        document.getElementById('playlevel').textContent  = "Activity"+"\n4"
    }
    })

function feed() {
     document.getElementById('statsscreen').style.display = 'none'
     document.getElementById('playscreen').style.display = 'none'
    food += 1;
    if (food > 4) {
        document.getElementById('foodlevel').textContent = "Hungry: \n4"
        pet.addEventListener('animationend', function handler() {
        pet.style.animation = 'nothungry 1s infinite ';
    })
    }
    if (food == 1) {
        document.getElementById('foodlevel').textContent  = "Hungry: \n\n\n\n2"
        pet.addEventListener('animationend', function handler() {
        pet.style.animation = 'feed 3s infinite ';
    })
    }
    if (food == 2) {
        document.getElementById('foodlevel').textContent  = "Hungry: \n2"
        pet.addEventListener('animationend', function handler() {
        pet.style.animation = 'feed 3s infinite ';
    })
    }
    if (food == 3) {
        document.getElementById('foodlevel').textContent  = "Hungry: \n3"
        pet.addEventListener('animationend', function handler() {
        pet.style.animation = 'feed 3s infinite ';
    })
    }
    if (food == 4) {
        document.getElementById('foodlevel').textContent  = "Hungry"+"\n4"
        pet.addEventListener('animationend', function handler() {
        pet.style.animation = 'feed 3s infinite ';
    })
    }
    document.getElementById('pet').style.animation = 'feed 3s'
    pet.addEventListener('animationend', function handler() {
        pet.style.animation = 'alive 3s infinite ';
    })
    
}

function stats() {
    document.getElementById('statsscreen').style.display = 'block'
    document.getElementById('playscreen').style.display = 'none'
        if (food > 4) {
        document.getElementById('foodlevel').textContent = "Hungry: \n4"
    }
    if (food == 1) {
        document.getElementById('foodlevel').textContent  = "Hungry: \n\n\n\n1"
    }
    if (food == 2) {
        document.getElementById('foodlevel').textContent  = "Hungry: \n2"
    }
    if (food == 3) {
        document.getElementById('foodlevel').textContent  = "Hungry: \n3"

    }
    if (food == 4) {
        document.getElementById('foodlevel').textContent  = "Hungry"+"\n4"
    }
       if (playc > 4) {
        document.getElementById('playlevel').textContent = "Activity: \n4"
    }
    if (playc == 1) {
        document.getElementById('playlevel').textContent  = "Activity: \n\n\n\n1"
    }
    if (playc == 2) {
        document.getElementById('playlevel').textContent  = "Activity: \n2"
    }
    if (playc == 3) {
        document.getElementById('playlevel').textContent  = "Activity: \n3"
    }
    if (playc == 4) {
        document.getElementById('playlevel').textContent  = "Activity"+"\n4"
    }
}

function lower() {
  food-= 1;
  console.log(food)
    if (food === 1) {
    let audio = new Audio('sound.wav');
    audio.play();
  }
  if (playc == 1) {
    let audio = new Audio('sound.wav');
    audio.play();
}
}
setInterval(lower, 600000);

function lowera() {
  playc-= 1;
  console.log(playc)
      if (food == 1) {
    let audio = new Audio('sound.wav');
    audio.play();
  }
  if (playc === 1) {
    let audio = new Audio('sound.wav');
    audio.play();
}
}

setInterval(lowera, 500001);

function death() {
  document.getElementById('pet').src = 'death.png';
}

setInterval(death, Math.floor(Math.random() * (1814400000 - 604800000 + 1)) + 604800000);

window.onbeforeunload = function() {
    return "Leaving this page will reset the wizard";
};