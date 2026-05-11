const map = document.getElementById("map");
const enterArchivesButton = document.getElementById("enterArchives");

enterArchivesButton.addEventListener("click", () => {
    map.style.transformOrigin = 'center 55%, left 80%';
    map.classList.toggle("zoomed");
    map.classList.toggle("zoomed-temple");
    if (map.classList.contains("zoomed-return")) {
        map.classList.remove("zoomed-return");
    }
});

const returnHomeButton = document.getElementById("returnHome");
returnHomeButton.addEventListener("click", () => {
    map.style.transformOrigin = '38% 38%';
    map.classList.toggle("zoomed");
    map.classList.toggle("zoomed-return");
    if (map.classList.contains("zoomed-temple")) {
        map.classList.remove("zoomed-temple");
    }
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 600);
});
