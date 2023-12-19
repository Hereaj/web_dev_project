const calculateButton = document.querySelector("#calculator button");
function calButtonClick() {
    const inputNum = document.getElementById("user-number");
    const sumOutput = document.getElementById("calculated-sum");
    let sum = 0;
    for (let i = 0; i <= inputNum.value; i++) {
        sum += i;
    }
    sumOutput.textContent = sum;
    sumOutput.style.display = "block";
}
calculateButton.addEventListener("click", calButtonClick);


const highlightButton = document.querySelector("#highlight-links button");
function highlightButtonClick() {
    const allAinHighlight = document.querySelectorAll("#highlight-links a");
    for (const as of allAinHighlight) {
        as.classList.add("highlight");
    }
}
highlightButton.addEventListener("click", highlightButtonClick);


const userData = {
    name: "AJ",
    age: 30,
    job: false
}
const informationButton = document.querySelector("#user-data button");
function infoButtonClick() {
    const userDataList = document.getElementById("output-user-data");

    userDataList.innerHTML = "";

    for (const key in userData) {
        let newList = document.createElement("li");
        newList.textContent = key.toUpperCase() + " : " + userData[key];
        userDataList.append(newList);
    }
}
informationButton.addEventListener("click", infoButtonClick);


const statisticsButton = document.querySelector("#statistics button");

function rollingDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function statisticsButtonClick() {
    const inputNum = document.getElementById("user-target-number");
    const outputList = document.getElementById("dice-rolls");
    const x = document.getElementById("output-total-rolls");
    const y = document.getElementById("output-target-number");
    
    let count = 0;
    let hasRolled = false;
    outputList.innerHTML = "";
    
    while (!hasRolled) {
        const randomNumber = rollingDice();
        count++;

        const newList = document.createElement("li");
        newList.textContent = "try #" + count + " Your #" + randomNumber;
        outputList.append(newList);

        if (inputNum.value == randomNumber) {
            hasRolled = true;
        }
    }

    x.textContent = count;
    y.textContent = inputNum.value;
}

statisticsButton.addEventListener("click", statisticsButtonClick);