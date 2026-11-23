// Alert & Function
function welcomeUser() {
    alert("Welcome to the BMW website!");
}

// seconds counter
let seconds = 0;
let counter = document.getElementById("counter");

if (counter) {
    setInterval(function () {
        seconds++;
        counter.innerHTML = seconds + " Seconds";
    }, 1000);
}

// Event Listener: Light / Dark Mode Button
let themeBtn = document.getElementById("theme-btn");
let darkMode = true;

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        if (darkMode == true) {
            document.body.style.backgroundColor = "#eeeeee";
            document.body.style.color = "black";
            themeBtn.innerText = "Dark Mode";
            darkMode = false;
        } else {
            document.body.style.backgroundColor = "#111111";
            document.body.style.color = "white";
            themeBtn.innerText = "Light Mode";
            darkMode = true;
        }
    });
}
function highlightCar(button) {
    let card = button.parentElement;

    if (button.innerText == "Highlight") {
        card.style.border = "4px solid gold";
        button.innerText = "Highlighted";
    } else {
        card.style.border = "none";
        button.innerText = "Highlight";
    }
}

let budgetBtn = document.getElementById("budget-btn");
if (budgetBtn) {
    budgetBtn.addEventListener("mouseover", function () {
        let userBudget = Number(document.getElementById("budget-input").value);
        checkBudget(userBudget, 68000);
    });
}

function checkBudget(budget, minPrice) {
    let result = document.getElementById("budget-result");

    if (budget <= 0 ) {
        result.innerHTML = "Please enter a valid number!";
        result.style.color = "red";
    } else if (budget >= 147500) {
        result.innerHTML = "You can afford any BMW here, even the BMW i8!";
        result.style.color = "#00ff88";
    } else if (budget >= minPrice) {
        result.innerHTML = "You can afford a BMW X5 or more!";
        result.style.color = "#00aaff";
    } else {
        result.innerHTML = "You need at least $" + minPrice + " for the BMW X5.";
        result.style.color = "orange";
    }
}

const cars = [
    "BMW M4 Competition",
    "BMW M3 Competition",
    "BMW i8",
    "BMW X5",
    "BMW X7"
];

const prices = [81375, 79575, 147500, 68000, 85000];
const years = [2025, 2025, 2020, 2025, 2025];

let modelList = document.getElementById("model-list");

for (let i = 0; i < cars.length; i++) {
    if (modelList) {
        modelList.innerHTML += "<li>" + years[i] + " " + cars[i] + " - $" + prices[i] + "</li>";
    }
    console.log(cars[i]);
}

