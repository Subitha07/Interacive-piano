document.addEventListener("DOMContentLoaded", () => {
    const pianoKeys = document.querySelectorAll(".piano-keys .key");

    let allKeys = [];
    let audio = new Audio(`tunes/a.wav`);
    const playTune = (key) => {
        audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed 
        audio.play();

        const clickedKey = document.querySelector(`[data-key="${key}"]`);
        clickedKey.classList.add("active"); // highlight the key
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }

    pianoKeys.forEach((key) => {
        allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
        key.addEventListener("click", () => playTune(key.dataset.key));
    });

    const pressedKey = (e) => {
        // if the pressed key is in the allKeys array, only call the playTune function
        if (allKeys.includes(e.key)) {
            playTune(e.key);
        }
    };
    document.addEventListener("keydown", pressedKey);
});






















