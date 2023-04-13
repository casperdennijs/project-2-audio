let islandCounter = -1;
const islands = document.querySelectorAll(".island");

setInterval(loop, 1000);

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
            synth.triggerAttack("D4", now);
            synth.triggerRelease("D4", now + 1);
            islands[islandCounter].classList.add("animation");
            break;
        case 1:
            synth.triggerAttack("F4", now);
            synth.triggerRelease("F4", now + 1);
            islands[islandCounter].classList.add("animation");
            break;
        case 2:
            synth.triggerAttack("A4", now);
            synth.triggerRelease("A4", now + 1);
            islands[islandCounter].classList.add("animation");
            break;
        case 3:
            synth.triggerAttack("C5", now);
            synth.triggerRelease("C5", now + 1);
            islands[islandCounter].classList.add("animation");
            break;
        case 4:
            synth.triggerAttack("E5", now);
            synth.triggerRelease("E5", now + 1);
            islands[islandCounter].classList.add("animation");
            break;
    }
}