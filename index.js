let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

function render() {
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;

    if (homeScore > guestScore) {
        homeScoreEl.style.borderColor = "goldenrod"
        guestScoreEl.style.borderColor = "black"
    } else if (guestScore > homeScore) {
        homeScoreEl.style.borderColor = "black"
        guestScoreEl.style.borderColor = "goldenrod"
    } else {
        homeScoreEl.style.borderColor = "black"
        guestScoreEl.style.borderColor = "black"
    }
}

function addOneHome() {
    homeScore += 1;
    render();
}

function addTwoHome() {
    homeScore += 2;
    render();
}

function addThreeHome() {
    homeScore += 3;
    render();
}

function addOneGuest() {
    guestScore += 1;
    render();
    
}

function addTwoGuest() {
    guestScore += 2;
    render();
}

function addThreeGuest() {
    guestScore += 3;
    render();
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    render();
}
