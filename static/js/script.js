let islandCounter = -1;
const islands = document.querySelectorAll(".island");

let island0status = 1;
let island1status = 1;
let island2status = 1;
let island3status = 1;
let island4status = 1;

setInterval(loop, 500);

function loop() {
    if (islandCounter < 4) {
        islandCounter++
        sound()
    } else {
        islandCounter = 0;
        sound()
    }
    console.log(islandCounter)
}

function sound() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    islands.forEach(element => element.classList.remove("animation"))
    switch(islandCounter) {
        case 0:
            if (island0status == 1) {
                synth.triggerAttack("D4", now);
                synth.triggerRelease("D4", now + 1);
                islands[islandCounter].classList.add("animation");
            }
            break;
        case 1:
            if (island1status == 1) {
                synth.triggerAttack("F4", now);
                synth.triggerRelease("F4", now + 1);
                islands[islandCounter].classList.add("animation");
            }
            break;
        case 2:
            if (island2status == 1) {
                synth.triggerAttack("A4", now);
                synth.triggerRelease("A4", now + 1);
                islands[islandCounter].classList.add("animation");
            }
            break;
        case 3:
            if (island3status == 1) {
                synth.triggerAttack("C5", now);
                synth.triggerRelease("C5", now + 1);
                islands[islandCounter].classList.add("animation");
            }
            break;
        case 4:
            if (island4status == 1) {
                synth.triggerAttack("E5", now);
                synth.triggerRelease("E5", now + 1);
                islands[islandCounter].classList.add("animation");
            }
            break;
    }
}

islands[0].addEventListener("click", () => {
    if (island0status == 0) {
        island0status = 1
    } else {
        island0status = 0
    }
    islands[0].classList.toggle("hidden")
})

islands[1].addEventListener("click", () => {
    if (island1status == 0) {
        island1status = 1
    } else {
        island1status = 0
    }
    islands[1].classList.toggle("hidden")
})

islands[2].addEventListener("click", () => {
    if (island2status == 0) {
        island2status = 1
    } else {
        island2status = 0
    }
    islands[2].classList.toggle("hidden")
})

islands[3].addEventListener("click", () => {
    if (island3status == 0) {
        island3status = 1
    } else {
        island3status = 0
    }
    islands[3].classList.toggle("hidden")
})

islands[4].addEventListener("click", () => {
    if (island4status == 0) {
        island4status = 1
    } else {
        island4status = 0
    }
    islands[4].classList.toggle("hidden")
})