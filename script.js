const map = document.getElementById("map");
const enterArchivesButton = document.getElementById("enterArchives");
const goArchivesButton = document.getElementById("goArchives");
const goDocksButton = document.getElementById("goDocks");
const goUnderButton = document.getElementById("goUnder");
const goWaydownButton = document.getElementById("goWaydown");
const leaveTownButton = document.getElementById("leaveTown");
const returnUpButton = document.getElementById("returnUp");
const exitArchivesButton = document.getElementById("exitArchives");
const returnHomeButton = document.getElementById("returnHome") || document.getElementById("returnHomeb") || document.getElementById("returnHomea");

if (enterArchivesButton) {
    enterArchivesButton.addEventListener("click", () => {
        map.style.transformOrigin = 'right 38%';
        map.classList.toggle("zoomed");
        map.classList.toggle("zoomed-temple");
        if (map.classList.contains("zoomed-return")) {
            map.classList.remove("zoomed-return");
        }

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'library.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
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

if (goDocksButton) {
    goDocksButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = goDocksButton.getBoundingClientRect();
        const mapRect = map.getBoundingClientRect();
        const originX = ((buttonRect.left + buttonRect.width / 2) - mapRect.left) / mapRect.width * 100;
        const originY = ((buttonRect.top + buttonRect.height / 2) - mapRect.top) / mapRect.height * 100;
        map.style.transformOrigin = `${originX}% ${originY}%`;

        map.classList.add("zoomed");

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'port.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
    });
}

if (goUnderButton) {
    goUnderButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = goUnderButton.getBoundingClientRect();
        const mapRect = map.getBoundingClientRect();
        const originX = ((buttonRect.left + buttonRect.width / 2) - mapRect.left) / mapRect.width * 100;
        const originY = ((buttonRect.top + buttonRect.height / 2) - mapRect.top) / mapRect.height * 100;
        map.style.transformOrigin = `${originX}% ${originY}%`;

        map.classList.add("zoomed");

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'under.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
    });
}

if (goWaydownButton) {
    goWaydownButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = goWaydownButton.getBoundingClientRect();
        const mapRect = map.getBoundingClientRect();
        const originX = ((buttonRect.left + buttonRect.width / 2) - mapRect.left) / mapRect.width * 100;
        const originY = ((buttonRect.top + buttonRect.height / 2) - mapRect.top) / mapRect.height * 100;
        map.style.transformOrigin = `${originX}% ${originY}%`;

        map.classList.add("zoomed");

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'down.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
    });
}

if (leaveTownButton) {
    leaveTownButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = leaveTownButton.getBoundingClientRect();
        const mapRect = map.getBoundingClientRect();
        const originX = ((buttonRect.left + buttonRect.width / 2) - mapRect.left) / mapRect.width * 100;
        const originY = ((buttonRect.top + buttonRect.height / 2) - mapRect.top) / mapRect.height * 100;
        map.style.transformOrigin = `${originX}% ${originY}%`;

        map.classList.add("zoomed");

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'index.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
    });
}

if (returnUpButton) {
    returnUpButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = returnUpButton.getBoundingClientRect();
        const mapRect = map.getBoundingClientRect();
        const originX = ((buttonRect.left + buttonRect.width / 2) - mapRect.left) / mapRect.width * 100;
        const originY = ((buttonRect.top + buttonRect.height / 2) - mapRect.top) / mapRect.height * 100;
        map.style.transformOrigin = `${originX}% ${originY}%`;

        map.classList.add("zoomed");

        const onTransitionEnd = (event) => {
            if (event.propertyName === 'transform') {
                map.removeEventListener('transitionend', onTransitionEnd);
                window.location.href = 'port.html';
            }
        };

        map.addEventListener('transitionend', onTransitionEnd);
    });
}

if (exitArchivesButton) {
    exitArchivesButton.addEventListener("click", () => {
        map.classList.remove("zoomed-temple", "zoomed-return");

        const buttonRect = exitArchivesButton.getBoundingClientRect();
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
        map.style.transformOrigin = '50% 50%';
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
