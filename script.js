const map = document.getElementById("map");
const enterArchivesButton = document.getElementById("enterArchives");
const goArchivesButton = document.getElementById("goArchives");
const returnHomeButton = document.getElementById("returnHome");

if (enterArchivesButton) {
    enterArchivesButton.addEventListener("click", () => {
        map.style.transformOrigin = 'right 38%';
        map.classList.toggle("zoomed");
        map.classList.toggle("zoomed-temple");
        if (map.classList.contains("zoomed-return")) {
            map.classList.remove("zoomed-return");
        }
    });
}

if (goArchivesButton) {
    goArchivesButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = goArchivesButton.getBoundingClientRect();
        const mapRect = map.getBoundingClientRect();
        const originX = ((buttonRect.left + buttonRect.width / 2) - mapRect.left) / mapRect.width * 100;
        const originY = ((buttonRect.top + buttonRect.height / 2) - mapRect.top) / mapRect.height * 100;
        map.style.transformOrigin = `${originX}% ${originY}%`;

        map.classList.add("zoomed");

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'archive.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
    });
}

if (returnHomeButton) {
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
}
