const inputBox = document.getElementById("user-input");
const changingNums = document.getElementById("changingNum");

function countCharLength(event) {
    const charNums = event.target.value.length;
    const maxChars = inputBox.maxLength;
    const remainNums = maxChars - charNums;

    changingNums.textContent = remainNums;

    if (remainNums === 0) {
        changingNums.classList.add("error");
        inputBox.classList.add("error");
    }
    else if (remainNums <= 10) {
        changingNums.classList.add("warning");
        inputBox.classList.add("warning");
        changingNums.classList.remove("error");
        inputBox.classList.remove("error");
    }
    else {
        changingNums.classList.remove("warning");
        inputBox.classList.remove("warning");
    }

/*  changingNums.classList.toggle("warning", remainNums <= 10);
    inputBox.classList.toggle("warning", remainNums <= 10);
    changingNums.classList.toggle("error", remainNums === 0);
    inputBox.classList.toggle("error", remainNums === 0); */
}

inputBox.addEventListener("input", countCharLength);