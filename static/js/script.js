let islandCounter = -1;
const islands = document.querySelectorAll(".island");
const playButton = document.querySelector(".mainIsland");

let loopStatus = 0;

let island0status = 1;
let island1status = 1;
let island2status = 1;
let island3status = 1;
let island4status = 1;

fetch('https://api-hitloop.responsible-it.nl/test_json?seed=120')
    .then(response => response.json())
    .then(json => {
        const midi = json;
        console.log(midi);

        const synths = []

        midi.tracks.forEach(track => {
            const notes = track.notes
            notes.forEach(note => {
                //create a synth for each track
                const synth = new Tone.PolySynth(Tone.Synth, {
                    envelope: {
                        attack: 0.02,
                        decay: 0.1,
                        sustain: 0.3,
                        release: 1
                    }
                }).toDestination()
                synths.push(synth)
                console.log(synths)

                sound(synths)
            })
        })

        
    })
    .catch(error => console.error(error));

setInterval(loop, 500);

function loop() {
    if (loopStatus == 1) {
        if (islandCounter < 4) {
            islandCounter++
            sound()
        } else {
            islandCounter = 0;
            sound()
        }
        console.log(islandCounter)
    }
}

function sound(synths) {
    const synth = new Tone.PolySynth().toDestination();
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

playButton.addEventListener("click", () => {
    console.log("test")
    if (loopStatus == 0) {
        loopStatus = 1
    } else {
        loopStatus = 0
    }
})


