const map = document.getElementById("map");
const enterArchivesButton = document.getElementById("enterArchives");

enterArchivesButton.addEventListener("click", () => {
    map.style.transformOrigin = 'right 38%';
    map.classList.toggle("zoomed");
    map.classList.toggle("zoomed-temple");
    if (map.classList.contains("zoomed-return")) {
        map.classList.remove("zoomed-return");
    }
});

const returnHomeButton = document.getElementById("returnHome");
returnHomeButton.addEventListener("click", () => {
    map.style.transformOrigin = '38% 38%';
    map.classList.add("zoomed", "zoomed-return");
    map.classList.remove("zoomed-temple");

    const onTransitionEnd = (event) => {
        if (event.propertyName === 'transform') {
            map.removeEventListener('transitionend', onTransitionEnd);
            window.location.href = 'index.html';
        }
    };

    map.addEventListener('transitionend', onTransitionEnd);
});
